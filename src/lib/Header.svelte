<script>
    import EyeSVG from '../assets/eye.svg';
    import PageButton from '../lib/PageButton.svelte'
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
        <PageButton text = "Login" pageRender = "pageLogin" on:renderPage />
        <PageButton text = "Register" pageRender = "pageRegister" on:renderPage />
    </div>

</div>