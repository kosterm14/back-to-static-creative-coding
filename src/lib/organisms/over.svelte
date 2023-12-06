<main>
    <h1>Over het platform</h1>

    <section>
        <p>
            “Hoe kan ik studenten meer laten tekenen en ze laten inzien dat een
            tekening een heel geschikt communicatiemiddel is?” vroeg Charley
            Muhren, docent aan de HvA en ontwerper van de tekenmethode Tekenen,
            spelen, delen, zich af voordat ze aan dit platform begon.
        </p>
        <p>
            Ze ontving een Comeniusbeurs voor haar plan om een platform te
            ontwikkelen waarmee studenten al aan het begin van hun studie zouden
            leren om tekenen te gebruiken als communicatiemiddel en heeft de
            afgelopen anderhalf jaar onderzocht welke tekenmethodes geschikt
            zouden zijn voor studenten en docenten om te gebruiken tijdens hun
            studie. Door de werkvormen te categoriseren aan de hand van
            leerdoelen die weer gekoppeld zijn aan de taxonomie van
            ‘Betekenisvol leren’ (Dee Fink, 2003), kunnen zowel studenten als
            docenten gemakkelijk zoeken in welke situatie en met welk doel een
            tekenmethode te gebruiken is.
        </p>
        <p>
            In de kennisclips wordt uitgelegd waarom tekenen voor bepaalde
            doelen goed te gebruiken is en wat de resultaten van de methodes
            kunnen zijn.
        </p>
        <p>
            In de mini-cursussen worden de basisprincipes van ‘visual thinking’
            uitgelegd en wordt verwezen naar andere visual thinkers en bronnen.
        </p>
        <em>Concept en onderzoek:</em> Charley Muhren<br />
        <em>Design research, interaction- en webdesign:</em> Elias Poolman
        <br />
        <em>Visuele identiteit en webdesign:</em> Ramon Boers <br />
        <em>Webdevelopment:</em> t.b.a.
    </section>
</main>

<section class="yellow-wrapped">
    <section class="yellow" />
    <section class="yellow2" />
    <section class="yellow3" />
    <section class="yellow4" />
</section>

<style>
    .yellow-wrapped {
        display: grid;
        grid-template-columns: auto;
        margin-top: 1%;
        justify-content: center;
        transform: scaleX(-1);
        margin-top: -6em;
        margin-left: -15rem;
        align-items: center;
    }

    .yellow,
    .yellow2,
    .yellow3,
    .yellow4 {
        width: 80px;
        height: 70px;
        clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
        );
        transform: rotate(90deg);
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        margin-top: -14%;
    }

    .yellow {
        background: var(--vtYellow);
    }

    .yellow2 {
        background: rgb(255, 213, 97);
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 2;
        /* margin-top: -7%; */
    }

    .yellow3 {
        background: rgb(255, 213, 97);
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 3;
        margin-top: -7%;
    }

    .yellow4 {
        background: var(--vtYellow);
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 3;
        margin-top: -7%;
    }

    main {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 5rem;
    }

    h1 {
        font-size: 3.157rem;
        font-family: var(--vtPrimaryFont);
        color: var(--vtDarkBlue);
    }

    section {
        width: 50%;
    }

    em {
        font-weight: bold;
        font-style: normal;
    }

    p,
    em {
        font-size: 1rem;
        font-family: var(--vtSecondaryFont);
        line-height: 1.5rem;
        color: var(--vtDarkBlue);
    }
</style>
