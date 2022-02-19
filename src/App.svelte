<script lang="ts">
  import { getGifs } from "~/lib";
  const onSubmitHandler = () => {};
</script>

<h1>Gif Expert App</h1>

<form class="form" on:submit|preventDefault={onSubmitHandler}>
  <label for="search">
    Search for gifs 🤞
    <input type="text" id="search" name="search" />
  </label>

  <button type="submit">Submit</button>
</form>

<pre>
    Aqui van los datos
</pre>
