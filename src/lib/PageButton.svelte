<script>
  import { renderPage } from './renderPage';
  export let text;
  export let renderPageProp;
  export function handleClick() {
    renderPage.update(() => renderPageProp)
  }
</script>

<button on:click = {handleClick}>
   {text}
</button>

<style>
  button {
    border: none;
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
  }

  button:hover {
    text-decoration: underline;
  }
</style>