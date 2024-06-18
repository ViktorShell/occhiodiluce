<script>
  import { initializeApp } from 'firebase/app';
  import { getAuth } from 'firebase/auth';
  import Header from './lib/Header.svelte'
  import Footer from './lib/Footer.svelte'
  import Login from './lib/Login.svelte'
  import Register from './lib/Register.svelte'

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

  let pageToRender = "pageNews";
  let handlePages = (event) => pageToRender = event.detail.text;
</script>

<main>
  <Header on:renderPage = {handlePages}/>
  {#if pageToRender == "pageLogin"}
    <Login auth = {auth}/>
  {/if}
  {#if pageToRender == "pageRegister"}
    <Register auth = {auth}/>
  {/if}
  <Footer/>
</main>