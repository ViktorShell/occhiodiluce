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

  let diffList = (list1, list2) => {
    let extract = [];
    let inside = false;

    for(let a of list1) {
      inside = false;
      for(let b of list2)
        if(a.id === b.id){
          inside = true;
          break;
        }
      if(!inside) extract.push(a);
    }
    return extract;
  }

  let news = [];

  onMount(async () => {
    initDB(app);
    let localNews = await fetchNews($db);
    let lastNews = localNews.slice();
    news = localNews;

    let flag = false;
    setInterval(async () => {
      if(flag){
        localNews = await fetchNews($db);
        let ext = diffList(localNews, lastNews);
        if(ext.length > 0)
          notify(`Sono presenti ${ext.length} nuove News`);
        lastNews = localNews;
        news = localNews; // Non sono sicuro che news continui a tenere il riferimento
      } else flag = true;
    }, 30000);
  })
</script>

<main>
  <Header />
  {#if $renderPage == "pageLogin"}
    <Login auth = {auth}/>
  {/if}

  {#if $renderPage == "pageNews"}
    <News news = {news} />
  {/if}

  {#if $renderPage == "pageMyNews"}
    {#if $user == null}
      <News news = {news} />
    {:else}
      <MyNews news = {news} />
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
      <News news = {news} />
    {:else}
      <Pubblica />
    {/if}
  {/if}
  <Footer/>
</main>