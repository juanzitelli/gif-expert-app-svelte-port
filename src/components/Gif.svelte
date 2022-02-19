<script lang="ts">
  export let title: string;
  export let url: string;
</script>

<article>
  <h4>{title}</h4>
  <img height="100" width="100" src={url} alt={title} />
</article>
