<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import Category from "./components/Category.svelte";
  import type { Category as CategoryType } from "./_types";
  import { getGifs } from "./lib";

  let categories: CategoryType[] = [];

  const onSubmitHandler: svelte.JSX.EventHandler<
    SubmitEvent,
    HTMLFormElement
  > = (event) => {
    const formData = new FormData(event.currentTarget);
    const category = formData.get("search") as string;

    getGifs({ category }).then((data) => {
      categories = [
        ...categories,
        {
          id: uuidv4(),
          category,
          gifs: data,
        },
      ];
    });
  };
</script>

<h1>Gif Expert App</h1>

<form on:submit|preventDefault={onSubmitHandler}>
  <label for="search">
    Search for gifs 🤞
    <input type="text" id="search" name="search" />
  </label>
  <button type="submit">Submit</button>
</form>

{#each categories as category (category.id)}
  <Category {...category} />
  <hr />
{/each}
