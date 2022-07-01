import { derived, writable } from 'svelte/store';

export const placeholder = '0';

const to = (prefix, base) => (v) =>
  `${prefix}: ${parseFloat(v, 10).toString(base)}`;
const toHex = to('Hex', 16);
const toOct = to('Oct', 8);
const toBin = to('Bin', 2);

const extractLevel = (l) => (s) =>
  l <= s.length ? s[s.length - l] : placeholder;

export const getCalculatorValues = () => {
  const value0 = writable(placeholder);
  const hexValue0 = derived(value0, toHex);
  const octValue0 = derived(value0, toOct);
  const binValue0 = derived(value0, toBin);

  const stackValues = writable([]);
  const value1 = derived(stackValues, extractLevel(1));
  const value2 = derived(stackValues, extractLevel(2));
  const value3 = derived(stackValues, extractLevel(3));
  const value4 = derived(stackValues, extractLevel(4));

  const stack = {
    value1,
    value2,
    value3,
    value4,
    push: (x) => {
      stackValues.update((vs) => {
        vs.push(x);
        return vs;
      });
    },
    pop: () => {
      let result;
      stackValues.update((vs) => {
        result = vs.pop();
        return vs;
      });
      return result;
    },
  };

  return { stack, value0, hexValue0, octValue0, binValue0 };
};

export const contextKey = {};
