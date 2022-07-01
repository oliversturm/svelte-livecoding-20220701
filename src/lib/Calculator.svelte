<script>
  import { setContext } from 'svelte';
  import BinOpButton from './BinOpButton.svelte';

  import { contextKey, getCalculatorValues } from './calculatorStore';

  import CharButton from './CharButton.svelte';
  import Display from './Display.svelte';
  import EnterButton from './EnterButton.svelte';

  const calculatorValues = getCalculatorValues();
  setContext(contextKey, calculatorValues);
</script>

<div class="calculator">
  <Display />
  <div class="keys">
    <CharButton char="7" />
    <CharButton char="8" />
    <CharButton char="9" />
    <BinOpButton op="plus" />

    <CharButton char="4" />
    <CharButton char="5" />
    <CharButton char="6" />
    <BinOpButton op="minus" />

    <CharButton char="1" />
    <CharButton char="2" />
    <CharButton char="3" />
    <BinOpButton op="multiply" />

    <div />
    <CharButton char="0" />
    <CharButton char="." />
    <BinOpButton op="divide" />

    <div />
    <div />
    <div />
    <EnterButton />
  </div>
</div>

<style>
  .calculator {
    width: 450px;
  }
  .keys {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
  .keys :global(.button) {
    background-color: darkred;
    color: white;
    border: 2px solid gray;
    margin: 3px;
    text-align: center;
    font-weight: bold;
    padding: 2px;
    cursor: pointer;
  }
</style>
