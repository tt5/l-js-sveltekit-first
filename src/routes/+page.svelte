<script lang="ts">
  import {useLocalStorage} from '$lib/index.svelte'

  let count = useLocalStorage('count', 0)
  let obj = useLocalStorage('obj', {a:1,b:2})

</script>

<button onclick={() => count.value++}>
  {count.value}
  {obj.value}
</button>

