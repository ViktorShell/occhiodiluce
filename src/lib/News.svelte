<script>
  export let news = null;
  let currentNews = "newsList"
  $: selectedNews = currentNews;
</script>

{#if selectedNews == "newsList" }
  <div class = "flex flex-col">
    {#each news as elem (elem.id)}
      <button 
        class = "btn btn-outline btn-info text-right text-lg text-white mt-2 mx-4 justify-start font-bold"
        on:click = {() => currentNews = elem}
      >
        {elem.data.title}
      </button>
    {/each}
  </div>
{:else}
    <button on:click = { () => currentNews = "newsList"} class="btn">Back to News</button>
    <div class="prose mx-4">
      {@html currentNews.data.text}
    </div>
{/if}