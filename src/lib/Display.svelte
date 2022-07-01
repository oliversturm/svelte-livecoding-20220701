<script>
  import { getContext } from 'svelte';
  import { contextKey } from './calculatorStore';

  const {
    stack: { value1, value2, value3, value4 },
    value0,
    hexValue0,
    octValue0,
    binValue0,
  } = getContext(contextKey);
</script>

<div class="outer">
  <div class="main">
    <div class="stack">
      <div>{$value4}</div>
      <div>{$value3}</div>
      <div>{$value2}</div>
      <div>{$value1}</div>
    </div>
    <div class="value0">{$value0}</div>
  </div>
  <div class="footer">
    <div class="footercell">{$hexValue0}</div>
    <div class="footercell">{$octValue0}</div>
    <div class="footercell">{$binValue0}</div>
  </div>
</div>

<style>
  .outer {
    background-color: bisque;
    font-family: monospace;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 1rem;
    overflow: hidden;
  }
  .value0 {
    font-size: 48pt;
    text-align: right;
  }
  .main {
    display: grid;
    align-items: center;
    grid-template-columns: max-content auto;
    width: 100%;
  }
  .stack {
    font-size: 9pt;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }
  .footercell {
    font-size: 10pt;
  }
</style>
