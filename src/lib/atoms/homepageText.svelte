<section class="h1">
    <h1>
        Visual thinking <br /> in het hbo
    </h1>
</section>

<section class="h2">
    <h2>
        Visual thinking leert studenten <br /> en docenten hun gedachten
        <br />
        en doelen te verbeelden. <br />
        Het helpt ze bij het creëren van <br /> overzicht en het overbrengen
        <br /> van hun boodschap.
    </h2>
</section>

<style>
    h1 {
        font-size: 3.157rem;
        font-family: var(--vtPrimaryFont);
        color: var(--vtDarkBlue);
    }

    .h1 {
        grid-column-start: 3;
        grid-column-end: 7;
        grid-row-start: 1;

        text-align: center;
    }

    h2 {
        font-size: 1rem;
        font-family: var(--vtSecondaryFont);
        line-height: 1.5rem;
        color: var(--vtDarkBlue);
    }

    .h2 {
        grid-column-start: 4;
        grid-column-end: 6;
        grid-row-start: 2;

        text-align: center;
        margin-top: -25%;
    }

    /* tablet */
    @media (min-width: 31em) and (max-width: 55em) {
        .h1 {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 1;

            margin-bottom: -10%;
        }

        .h2 {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 2;

            margin-bottom: 10%;
        }
    }

    /* mobile */
    @media (max-width: 31em) {
        .h1 {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 1;

            margin-bottom: -10%;
            margin-top: 10%;
        }

        .h2 {
            /* display: none; */
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 2;

            margin-bottom: 10%;
        }
    }
</style>
