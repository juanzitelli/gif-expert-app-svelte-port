<script lang="ts">
  import Gif from "./../components/Gif.svelte";
  import type { Gif as GifType } from "./../_types";
  export let category: string;
  export let gifs: GifType[];
</script>

<h2>{category}</h2>
<section>
  {#each gifs as gif (gif.id)}
    <Gif {...gif} />
  {/each}
</section>
<hr />
