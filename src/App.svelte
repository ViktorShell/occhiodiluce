<script>
  import { initializeApp } from 'firebase/app';
  import { getAuth } from 'firebase/auth';
  import { renderPage } from './lib/renderPage'
  import { user } from './lib/auth-store';
  import Header from './lib/Header.svelte'
  import Footer from './lib/Footer.svelte'
  import Login from './lib/Login.svelte'
  import Register from './lib/Register.svelte'
  import Pubblica from './lib/Pubblica.svelte'
  import News from './lib/News.svelte'
  import MyNews from './lib/MyNews.svelte'
  import ComeLavoriamo from './lib/ComeLavoriamo.svelte'
  import { getFirestore } from 'firebase/firestore';
  import { initDB } from './lib/db';

  const firebaseConfig = {
    apiKey: "AIzaSyA5aeP-yy8s80OMxbpZKCsJgjlCbKfuzbU",
    authDomain: "occhiodiluce-1418a.firebaseapp.com",
    projectId: "occhiodiluce-1418a",
    storageBucket: "occhiodiluce-1418a.appspot.com",
    messagingSenderId: "620714237789",
    appId: "1:620714237789:web:f706bc98e918332136d2b4",
    measurementId: "G-3S3JP0WNW9"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  initDB(app);
</script>

<main>
  <Header />
  {#if $renderPage == "pageLogin"}
    <Login auth = {auth}/>
  {/if}

  {#if $renderPage == "pageNews"}
    <News />
  {/if}

  {#if $renderPage == "pageMyNews"}
    {#if $user == null}
      <News />
    {:else}
      <MyNews />
    {/if}
  {/if}

  {#if $renderPage == "pageComeLavoriamo"}
    <ComeLavoriamo />
  {/if}

  {#if $renderPage == "pageRegister"}
    <Register auth = {auth}/>
  {/if}

  {#if $renderPage == "pagePubblica"}
    {#if $user == null}
      <News />
    {:else}
      <Pubblica />
    {/if}
  {/if}
  <Footer/>
</main>