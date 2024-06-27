<script>
  export let news = null;
  $: selectedNews = null;
</script>

{#if relativeNews == null }
  <div class = "flex flex-col">
    {#each news as elem (elem.id)}
      <button 
        class = "btn btn-outline btn-info text-right text-lg text-white mt-2 mx-4 justify-start font-bold"
        on:click = {selectedNews = elem}
      >
        {elem.data.title}
        {relativeNews}
      </button>
    {/each}
  </div>
{:else}
    <button on:click = {selectedNews = null} class="btn">Back to News</button>
    <p>News: {selectedNews.data.title}</p>
{/if}