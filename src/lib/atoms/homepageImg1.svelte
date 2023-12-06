<section class="img-man">
    <img src="assets\man.svg" alt="" />
</section>

<style>
    .img-man {
        grid-column-start: 1;
        grid-column-end: 3;
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
        width: 60%;
    }

    /* desktop */
    @media (min-width: 55em) {
        .img-man {
            background: var(--vtGrey-50);
        }
    }

    /* tablet */
    @media (min-width: 31em) and (max-width: 55em) {
        .img-man {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 5;

            margin-left: -30%;
        }

        img {
            width: 70%;
            margin-right: 20%;
        }
    }

    /* mobile */
    @media (max-width: 31em) {
        .img-man {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 4;
        }

        img {
            width: 70%;
            /* margin-right: 40%; */
        }
    }
</style>
