<section>
  <h1 class="title">Artikelen</h1>
  <div class="cards">
    <section class="cardyellow">
      <img
        class="imgtekenouders"
        src="/afbeelding_cover .webp"
        alt=" illustratie teken met ouders"
      />
      <h1>Tekenen en spelen met kinderen (en hun ouders)</h1>
      <p>
        Toen ik klein was, verwonderde ik me over de wereld om me heen en maakte
        volop gebruik van mijn fantasie. Maar als ik nu de nieuwsgierigheid van
        mijn achtjarige zoon zie, vraag ik me soms af waar mijn eigen
        verwondering, creativiteit en concentratie gebleven zijn.
      </p>
    </section>

    <section class="cardscolordarkblue">
      <img
        class="imgsamentekenen"
        src="/Samen_tekenen_lachen.webp"
        alt=" illustratie samen tekenen"
        loading="lazy"
      />
      <h1>Het ontstaan van de tekenmethode Tekenen, spelen delen</h1>
      <p>
        Tijdens mijn master ontwierp ik een methode met ‘verbinding’ als
        centraal thema. In eerste instantie wilde ik ouders en kinderen
        creatiever met elkaar laten communiceren, maar de methode bleek ook in
        andere contexten en met andere doelgroepen te werken.
      </p>
    </section>
    <section class="cardyellow">
      <img
        class="imgportret"
        src="/portret.webp"
        alt=" portret"
        loading="lazy"
      />
      <h1>Interview met docent Oskar Maarleveld</h1>
      <p>
        Interview met docent tekenen en vakdidactiek Oskar Maarleveld,
        seniordocent vakdidactiek aan de Breitner academie en docent tekenen,
        ckv en theater aan het Fons Vitae Lyceum in Amsterdam.
      </p>
    </section>
  </div>

  <div class="cards2">
    <section class="cardscolordarkblue">
      <img src="/Docent.webp" alt="illustratie docent" loading="lazy" />
      <h1>3 redenen waarom Visual Thinking waardevol is in het onderwijs</h1>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a
        ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh
        ultricies vehicula ut id elit. Integer posuere.
      </p>
    </section>

    <section class="cardyellow">
      <img
        class="imgsketchnotes"
        src="/sketchnotes.webp"
        alt="illustratie sketchnotes "
        loading="lazy"
      />
      <h1>Tips bij het gebruik van pijlen in je sketchnotes</h1>
      <p>
        vCras mattis consectetur purus sit amet fermentum. Integer posuere erat
        a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh
        ultricies vehicula ut id elit. Integer posuere.
      </p>
    </section>
    <section class="cardscolordarkblue">
      <img
        class="imginterview"
        src="/Interview .webp"
        alt="illustratie Interview met Selma Koopman "
        loading="lazy"
      />
      <h1>Interview met Selma Koopman van de Betekenaar</h1>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a
        ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh
        ultricies vehicula ut id elit. Integer posuere.
      </p>
    </section>
  </div>
</section>

<style>
  .cardscolordarkblue {
    width: 14em;
    height: 29em;
    border-radius: 0.5em;
    border: 4px solid var(--vtDarkBlue);
    padding: 0.9em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .cardyellow {
    width: 14em;
    height: 29em;
    border-radius: 0.5em;
    border: 4px solid var(--vtYellow);
    padding: 0.9em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .cards,
  .cards2 {
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
    justify-content: center;
    align-items: center;
    gap: 5em;
    margin: 8em;
  }

  .cards2 {
    margin-top: 1em;
  }

  .cards {
    margin-top: 9em;
  }

  h1 {
    position: relative;
    font-size: larger;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    margin-left: 0.4em;
  }

  .title {
    font-size: xxx-large;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
    top: 1.5em;
    left: 2.4em;
  }

  p {
    font-family: var(--vtSecondaryFont);
    margin-left: 0.5em;
    line-height: 1.5em;
    font-size: 16px;
    margin-top: -1em;
  }

  img {
    width: auto;
    height: 11em;
    margin-top: 0em;
    left: 1em;
    margin-left: 0em;
  }

  .imgsketchnotes {
    margin-left: 1.5em;
  }

  .imginterview {
    height: 12em;
    margin-left: -0.5em;
  }

  .imgtekenouders {
    margin-left: -0.8em;
    height: 11.1em;
  }

  .imgsamentekenen {
    margin-left: -0.7em;
    height: 11.5em;
  }

  .imgportret {
    height: 12em;
    margin-left: -0.5em;
  }

  @media only screen and (max-width: 60rem) {
    .cards,
    .cards2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .cards {
      margin-bottom: -6em;
      margin-top: 20em;
    }

    h1 {
      position: relative;
      font-size: larger;
      font-family: var(--vtPrimaryFont);
      margin-left: 0.5em;
    }

    .title {
      font-size: x-large;
      font-family: var(--vtPrimaryFont);
      position: absolute;
      left: 7.2em;
      top: 0em;
    }

    img {
      width: auto;
      height: 11em;
      position: absolute;
      right: 54.1em;
      margin-top: -34em;
    }

    .imgtekenouders {
      left: 5em;
      top: 38em;
    }
  }
</style>
