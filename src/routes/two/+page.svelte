<script>
  export let data;
  const { products } = data;
</script>

<h1>Shop</h1>
{#await products}
  <p>loading</p>
{:then products}
  {#each products as product}
    <h2>
      <a href="/two/{product.id}" data-svelte-prefetch>
        {product.title}
      </a>
    </h2>
    <p>{product.description}</p>
  {/each}
{/await}
