<script lang="ts">
  export let variant: "sm" | "md" | "lg";

  const variantClasses = {
    sm: "m-1",
    md: "m-3",
    lg: "m-5",
  };

  $: finalVariant = variantClasses[variant];
</script>

<div class={finalVariant} />
