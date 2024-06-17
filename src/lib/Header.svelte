<script>
    import { initializeApp } from 'firebase/app';
    import EyeSVG from '../assets/eye.svg';
    import { getAuth } from 'firebase/auth';
    import Login from '../lib/Login.svelte'
    import Register from '../lib/Register.svelte'

    const firebaseConfig = {
        apiKey: "",
        authDomain: "occhiodiluce-1418a.firebaseapp.com",
        projectId: "occhiodiluce-1418a",
        storageBucket: "occhiodiluce-1418a.appspot.com",
        messagingSenderId: "620714237789",
        appId: "1:620714237789:web:f706bc98e918332136d2b4",
        measurementId: "G-3S3JP0WNW9"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    export let renderPage = "NewsPage"
</script>

<div class = "navbar bg-base-300 flex justify-between">
    <div>
        <img src={EyeSVG} width = "50px" height = "50px" alt="">
        <a class = "link link-hover text-light mx-3" on:click = {() => renderPage = "NewsPage"}> News </a>
        <a class = "link link-hover text-light mx-3" on:click = {() => renderPage = "PubblicaPage"}> Pubblica </a>
        <a class = "link link-hover text-light mx-3" on:click = {() => renderPage = "MyNewsPage"}> My News </a>
        <a class = "link link-hover text-light mx-3" on:click = {() => renderPage = "ComeLavoriamoPage"}> Come Lavoriamo </a>
    </div>

    <div>
        <a class = "link link-hover text-light mx-2" on:click = {() => renderPage = "LoginPage"}> Login </a>
        <a class = "link link-hover text-light mx-2" on:click = {() => renderPage = "RegisterPage"}> Register </a>
    </div>

</div>

{#if renderPage == "LoginPage"}
    <Login auth = {auth}/>
{/if}

{#if renderPage == "RegisterPage"}
    <Register/>
{/if}