<script>
  import DOMPurify from 'dompurify'; // Prevenzione XSS
  import { marked } from 'marked'; // Markdown parser
  import { user } from './auth-store';
  import { db } from './db';
  import { Timestamp, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
  import { article } from './modify_article';

  export let title = "";
  export let text = "";

  $: marktext = DOMPurify.sanitize(marked.parse(text));
  $: disabled = text == "" || title == "";

  if($article != null) {
    title = $article.title;
    text = $article.text;
  }
  else
  {
    title = text = "";
  }

  const pushArticle = async () => {
    const current_article = {
      author_uid: $user.user.uid,
      date: Timestamp.now(),
      title: title,
      text: marktext
    };

    if($article != null) {
      await deleteDoc(doc($db, "news", $article.id))
      .catch((error) => console.log(error));
    }

    await addDoc(collection($db, "news"), current_article)
    .catch((error) => { console.log(error); })

    title = text = "";
    $article = null;
  }
</script>

<div class = "flex h-screen p-4">
  <div class = "w-1/2">
    <p class = "text-lg font-bold">Titolo</p>
    <input bind:value={title} type="text" placeholder="Titolo" class = "input input-border input-accent w-full mb-4"/>
    <br>
    <p class = "text-base font-bold">Testo articolo</p>
    <textarea bind:value={text}
    class = "textarea textarea-bordere textarea-md h-1/2 w-full textarea-info mb-4"
    placeholder="Articolo"
    rows = "10"
    />
    <div class = "flex justify-between">
      <button class = "btn btn-error" on:click={() => {title = text = ""; $article.update(() => null)}}>Cancella</button>
      <button class = "btn btn-success" disabled = {disabled} on:click = {pushArticle} >Pubblica</button>
    </div>
  </div>
  <div class = "w-1/2 ml-4">
    <p class = "text-lg font-bold">Live View</p>
    <h1 class="text-lg font-bold">{title}</h1>
    <div class = "prose"> {@html marktext} </div>
  </div>
</div>