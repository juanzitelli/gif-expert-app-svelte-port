<script lang="ts">
  import Gif from "./../components/Gif.svelte";
  import type { Gif as GifType } from "./../_types";
  import Divider from "./ui/Divider.svelte";
  export let category: string;
  export let gifs: GifType[];
</script>

<h3 class="text-xl font-bold text-gray-500">Category: "{category}"</h3>
<Divider variant="sm" />
<article class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
  {#each gifs as gif (gif.id)}
    <Gif {...gif} />
  {/each}
</article>
