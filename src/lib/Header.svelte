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
        <PageButton text = "News" pageRender = "pageNews" on:renderPage />
        <PageButton text = "Pubblica" pageRender = "pagePubblica" on:renderPage />
        <PageButton text = "My News" pageRender = "pageMyNews" on:renderPage />
        <PageButton text = "Come Lavoriamo" pageRender = "pageComeLavoriamo" on:renderPage />
    </div>

    <div>
        {#if $user == null}
            <PageButton text = "Login" pageRender = "pageLogin" on:renderPage />
        {:else}
            <p class="text-sm font-semibold pr-3">{username}<p>
            <PageButton text = "Logout" pageRender = "pageLogout" on:renderPage = {logoutHandler} />
        {/if}
        <PageButton text = "Register" pageRender = "pageRegister" on:renderPage />
    </div>

</div>