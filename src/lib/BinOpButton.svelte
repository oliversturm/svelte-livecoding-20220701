<script>
  import { createEventDispatcher, getContext } from 'svelte';
  import { contextKey, placeholder } from './calculatorStore';

  const { value0, stack } = getContext(contextKey);

  // const dispatch = createEventDispatcher();
  // const enter = () => {
  //   dispatch('OlisEvent', 'details zu Olis EVent');
  // };

  const binOp = (f) => () => {
    const v0 = parseFloat($value0, 10);
    const v1 = parseFloat(stack.pop(), 10);
    const result = f(v1, v0);
    $value0 = result.toString(10);
  };

  const ops = {
    plus: {
      caption: '+',
      handler: binOp((v1, v2) => v1 + v2),
    },
    minus: {
      caption: '-',
      handler: binOp((v1, v2) => v1 - v2),
    },
    multiply: {
      caption: '*',
      handler: binOp((v1, v2) => v1 * v2),
    },
    divide: {
      caption: '/',
      handler: binOp((v1, v2) => v1 / v2),
    },
  };

  export let op;

  $: opInfo = ops[op] || {};
  // $: {
  //   console.log('old op', op);
  //   op = op + 'x';
  // }
  $: caption = opInfo.caption || 'INVALID';
  $: handler = opInfo.handler || (() => {});

  // let thing;
  // function calcThing(innerOp) {
  //   thing = ops[innerOp];
  // }

  // $: calcThing(op);

  // let foo;
  // $: {
  //   //...
  //   foo = 10;
  // }
</script>

<div class="button" on:click={handler}>{caption}</div>
