<script>
  export let data;
  let {products} = data
</script>

{#each products as product}
  <h2>{product.title}</h2>
  <p>{product.description}</p>
{/each}
