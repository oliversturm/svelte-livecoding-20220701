<script>
  import { getContext } from 'svelte';
  import { contextKey, placeholder } from './calculatorStore';

  const { value0 } = getContext(contextKey);

  const extendValue = () => {
    value0.update((v) => {
      return `${v === placeholder ? '' : v}${char}`;
    });
  };

  export let char;

  $: {
    console.log(char);
  }
</script>

<div class="button" on:click={extendValue}>{char}</div>
