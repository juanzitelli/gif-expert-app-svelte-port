<script lang="ts">
  import { v4 as uuidv4 } from "uuid";
  import Category from "./components/Category.svelte";
  import type { Category as CategoryType } from "./_types";
  import { getGifs } from "./lib";
  import SearchForm from "./components/SearchForm.svelte";
  import Divider from "./components/ui/Divider.svelte";

  let categories: CategoryType[] = [];

  const onSubmitHandler: svelte.JSX.EventHandler<
    SubmitEvent,
    HTMLFormElement
  > = (event) => {
    const formData = new FormData(event.currentTarget);
    const category = formData.get("search") as string;

    if (category.trim().length < 3) return;

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

<div class="container mx-auto p-10">
  <h1 class="text-3xl font-bold animate-pulse">Gif Expert App</h1>
  <Divider variant="lg" />

  <SearchForm {onSubmitHandler} />
  <Divider variant="lg" />

  {#if categories.length > 0}
    <section>
      <h2 class="text-2xl font-bold">Results</h2>
      {#each categories as category (category.id)}
        <Category {...category} />
        <Divider variant="md" />
      {/each}
    </section>
  {/if}
</div>
