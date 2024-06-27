<script>
    import  albero  from '../assets/albero.webp';
    import  tecnologia  from '../assets/tecnologia.webp';
    import  esplorazione  from '../assets/esplorazione.webp';
    import  occhiovunque  from '../assets/occhiovunque.webp';
    import  ciabatte  from '../assets/ciabatte.webp';
    import  libro  from '../assets/libro.webp';
</script>

<p class = "text-3xl font-bold text-center">Come Lavoriamo</p>
<div class = "flex flex-col ">
    <div class = "flex mb-10 justify-between">
        <div class = "card bg-base-100 w-64 ml-20">
            <img src={albero} alt="" >
            <p>Cerchiamo la verità ovunque, anche nei posti più impensabili</p>
        </div>
        <div class = "card bg-base-100 w-64">
            <img src={tecnologia} alt="" width="192" height="192">
            <p>Utilizziamo le tecnologie più moderne per le nostre ricerche</p>
        </div>
        <div class = "card bg-base-100 w-64 mr-20">
            <img src={esplorazione} alt="" width="192" height="192">
            <p>Mandiamo sempre i nostri inviati ad investigare direttamente sul posto</p>
        </div>
    </div>
    <div class = "flex justify-between">
        <div class = "card bg-base-100 w-64 ml-20">
            <img src={occhiovunque} alt="" width="192" height="192">
            <p>Abbiamo occhi e orecchie ovunque per cogliere ogni informazione.</p>
        </div>
        <div class = "card bg-base-100 w-64">
            <img src={ciabatte} alt="" width="192" height="192">
            <p>Siamo costantemente pronti all'azione, anche se questo dovesse comportare l'uscire in ciabatte a metà dicembre</p>
        </div>
        <div class = "card bg-base-100 w-64 mr-20">
            <img src={libro} alt="" width="192" height="192">
            <p>Leggiamo spesso le opere del passato per capire come siamo arrivati al presente</p>
        </div>
    </div>
</div>