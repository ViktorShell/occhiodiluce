<script>
    import EyeSVG from '../assets/eye.svg';
    import PageButton from '../lib/PageButton.svelte'
    import { user } from './auth-store.js';

    $: username = ($user != null) ? $user.user.email.substring(0, $user.user.email.indexOf("@")) : "user";

    let logoutHandler = () => {
        user.update((n) => null);
    }
</script>

<div class = "navbar bg-base-300 flex justify-between">
    <div>
        <img src = {EyeSVG} width = "50px" height = "50px" alt="" class = "mr-2">
        <PageButton text = "News" renderPageProp = "pageNews" />
        <PageButton text = "Pubblica" renderPageProp = "pagePubblica" />
        <PageButton text = "My News" renderPageProp = "pageMyNews" />
        <PageButton text = "Come Lavoriamo" renderPageProp = "pageComeLavoriamo" />
    </div>

    <div>
        {#if $user == null}
            <PageButton text = "Login" renderPageProp = "pageLogin" />
        {:else}
            <p class="text-sm font-semibold pr-3">{username}<p>
            <button id="logout" on:click = {logoutHandler}>Logout</button>
        {/if}
        <PageButton text = "Register" renderPageProp = "pageRegister" />
    </div>
</div>

<style>
  #logout {
    border: none;
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
  }

  #logout:hover {
    text-decoration: underline;
  }
</style>