<script lang="ts">
  import Divider from "./ui/Divider.svelte";

  export let onSubmitHandler: svelte.JSX.EventHandler<
    SubmitEvent,
    HTMLFormElement
  >;
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
    />
  </label>
  <Divider variant="md" />
  <button
    class="bg-green-300 rounded-md font-bold hover:bg-green-700 sm:px-4 sm:py-2"
    type="submit">Submit</button
  >
</form>
