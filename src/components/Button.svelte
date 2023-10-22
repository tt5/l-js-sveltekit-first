<script>
  export let bg = 'white';
  export let text = 'black';
</script>

<button style="background: {bg}; color: {text}">
  <slot />
</button>
