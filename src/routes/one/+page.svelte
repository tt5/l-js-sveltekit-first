<script lang="ts">
  import { applyAction, enhance } from "$app/forms";
  import { useLocalStorage } from "$lib/index.svelte";
  export let data;
  export let form;

  let count = useLocalStorage("count", 0);
  let obj = useLocalStorage("obj", { a: 1, b: 2 });
</script>

<button onclick={() => count.value++}>
  {count.value}
  {obj.value.a}
</button>

<form
  method="POST"
  action="?/create"
  use:enhance={({ formElement}) => {
    return async ({ result, update }) => {
      if (result.type === 'success') {
        formElement.reset()
      }

      if (result.type === 'failure') {
        await applyAction(result)
      }
      update()
    };
  }}
>
  <label for="name">Name</label>
  <input type="text" name="name" value={form?.name ?? ""} />
  <button>Add</button>
  {#if form?.error}
    {form?.message}
  {/if}
</form>

{#each data.data as datum}
  <form method="POST" action="?/delete" use:enhance>
    {datum.name}
    <input type="hidden" name="id" value={datum.id} />
    <button>Delete</button>
  </form>
{/each}
