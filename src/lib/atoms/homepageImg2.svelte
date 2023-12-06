<section class="img-pencil">
    <img src="assets\pencil.svg" alt="" />
</section>

<style>
    .img-pencil {
        grid-column-start: 7;
        grid-column-end: 9;
        grid-row-start: 1;

        z-index: 1;
        display: grid;
        text-align: center;
        justify-items: center;
        align-content: center;

        width: 300px;
        height: 275px;
        clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
        );
        transform: rotate(90deg);
    }

    img {
        transform: rotate(270deg);
        width: 20%;
    }

    /* desktop */
    @media (min-width: 55em) {
        .img-pencil {
            background: var(--vtGrey-50);
        }
    }

    /* tablet */
    @media (min-width: 31em) and (max-width: 55em) {
        .img-pencil {
            grid-column-start: 3;
            grid-column-end: 5;
            grid-row-start: 5;

            margin-left: 20%;
        }

        img {
            width: 20%;
            margin-right: 20%;
        }
    }

    /* mobile */
    @media (max-width: 31em) {
        .img-pencil {
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 5;
        }

        img {
            width: 20%;
            margin-right: 20%;
        }   
    }
</style>
