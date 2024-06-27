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
  import { initDB, fetchNews, db } from './lib/db';
  import { onMount } from 'svelte';
  import eye from './assets/eye.svg';

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


  const notify = (text) => {
    // Notifica
    if("Notification" in window) {
      Notification.requestPermission().then((perm) => {
        if(perm === "granted")
          new Notification("Occhio di Luce", {
            lang: "it",
            body: text,
            icon: eye
          });
      })
    }
  }

  let news = [];
  onMount(async () => {
    initDB(app);
    let localNews = await fetchNews($db);
    let lastNews = localNews.slice(); 
    let flag = false;

    setInterval(async () => {
      if(flag)
      {
        let extract = []
        localNews = await fetchNews($db);
        localNews.forEach((x, i) => lastNews.forEach((y, j) => {if(x == y) extract.push(x)}));
        console.log(extract.length)
        console.log("QUI")
        if(extract.length > 0)
        {
          console.log("Notifica");
        }
      } else flag = true;
      lastNews = localNews.splice();
    }, 10000);

    //lastNews.pop();
    //let extract = localNews.find(e => !lastNews.includes(e))
    //console.log("Excrat", extract);
  })
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