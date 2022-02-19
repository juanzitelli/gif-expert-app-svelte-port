<script lang="ts">
  export let error: boolean;
  export let onSubmitHandler: svelte.JSX.EventHandler<
    SubmitEvent,
    HTMLFormElement
  >;

  import Divider from "./ui/Divider.svelte";

  const onChangeHandler = () => {
    if (error) {
      error = false;
    }
  };
</script>

<form
  class="flex flex-col md:items-start rounded-md border p-5"
  on:submit|preventDefault={onSubmitHandler}
>
  <label for="search" class="font-bold">
    Search for gifs 🤞
    <input
      class="block w-full md:w-auto rounded p-1 border"
      type="text"
      id="search"
      name="search"
      on:input={onChangeHandler}
    />
  </label>
  {#if error}
    <p class="text-red-400">Something went wrong trying to fetch gifs 😔</p>
  {/if}
  <Divider variant="md" />
  <button
    class="bg-green-300 rounded-md font-bold hover:bg-green-700 sm:px-4 sm:py-2"
    type="submit">Submit</button
  >
</form>
