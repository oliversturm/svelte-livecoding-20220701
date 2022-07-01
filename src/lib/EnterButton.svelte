<script>
  import { getContext } from 'svelte';
  import { contextKey, placeholder } from './calculatorStore';

  const { value0, stack } = getContext(contextKey);

  const enter = () => {
    stack.push($value0);
    $value0 = placeholder;
  };
</script>

<div class="button" on:click={enter}>Enter</div>
