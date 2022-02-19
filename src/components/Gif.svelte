<script lang="ts">
  import Divider from "./ui/Divider.svelte";

  export let title: string;
  export let url: string;
</script>

<div>
  <h4 class="text-lg font-bold">{title}</h4>
  <Divider variant="sm" />
  <img class="rounded-lg" src={url} alt={title} />
</div>
