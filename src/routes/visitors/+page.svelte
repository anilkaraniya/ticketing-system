<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>Visitors</title>
</svelte:head>

<div>
  {#if data.visitors && data.visitors.length > 0}
    {#each data.visitors as visitor}
      <div class="todo-container column">
        <p class="title">{visitor.name}</p>
        <p class="description">{visitor.email}</p>
      </div>
    {/each}
  {:else}
    <p class="empty-message">There are no visitors. Create come visitor!</p>
  {/if}
</div>
