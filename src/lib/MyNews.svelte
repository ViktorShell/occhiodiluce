<script>
    import { user } from './auth-store';
    import { article } from './modify_article';
    import { renderPage } from './renderPage';
    import { doc, deleteDoc } from 'firebase/firestore';
    import { db } from './db';
    export let news;

    let getMyNews = () => {
        let list_news = [];
        news.forEach(e => {
            if(e.data.author_uid === $user.user.uid)
                list_news.push(e);
        });
        return list_news;
    }
    let mynews = getMyNews();

    let handleArticle = (elem) => {
        let up_article = {
            id: elem.id,
            title: elem.data.title,
            text: elem.data.text
        }
        article.update(() => up_article);
        renderPage.update(() => "pagePubblica")
    }

    let handlerDelete = async (elem) => {
        await deleteDoc(doc($db, "news", elem.id))
        .catch((error) => console.log(error));
        const index = news.indexOf(elem);
        if (index > -1)
            news.splice(index, 1);
            news = [...news];
    }
</script>

<div class = "flex flex-col ">
    {#each mynews as elem (elem.id)}
        <div class = "flex justify-between">
            <p class = "text-lg font-bold flex-start">{elem.data.title}</p>
            <div class = "mx-4 mt-2">
                <button 
                class = "btn btn-success mx-4"
                on:click = { () => handleArticle(elem) }> Modify </button>
                <button
                class = "btn btn-error "
                on:click = { () => handlerDelete(elem) }> Elimina </button>
            </div>
        </div>
    {/each}
</div>