<script>
  export let data;
  const {product} = data
</script>

{#await product}
<p>loading</p>
{:then product}
<h1>{product.title}</h1>
{/await}
