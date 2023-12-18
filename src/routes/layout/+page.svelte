<script>
    let tiles = Array(10);
</script>

<body>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1700 1100">
        <path
            class="animatePurple"
            d="M0 50 L1500 50 C 1700,50 1700,318 1500,318 L400 318 Q195,310 200,550 L200, 1000"
            stroke="var(--color-linePurple)"
            stroke-width="15"
            fill="transparent"
        />
        <path
            class="animateGreen"
            d="M0 70 L1500 70 C 1673,70 1673,298 1500,298 L400 298 Q180,290 180,530 L180, 1000"
            stroke="var(--color-lineGreen)"
            stroke-width="15"
            fill="transparent"
        />
        <path
            class="animateYellow"
            d="M0 90 L1500 90 C 1646,90 1646,278 1500,278 L400 278 Q160,275 160,510 L160, 1000"
            stroke="var(--color-lineYellow)"
            stroke-width="15"
            fill="transparent"
        />
        <path
            class="animateOrange"
            d="M0 110 L1500 110 C 1619,110 1619,258 1500,258 L400 258 Q140,260 140,490 L140, 1000"
            stroke="var(--color-lineOrange)"
            stroke-width="15"
            fill="transparent"
        />
        <path
            class="animateRed"
            d="M0 130 L1500 130 C 1592,130 1592,238 1500,238 L400 238 Q125,245 120,470 L120, 1000"
            stroke="var(--color-lineRed)"
            stroke-width="15"
            fill="transparent"
        />
    </svg>

    <main>
        <img src="assets/retrogirl.png" alt="" />
        <section class="container">
            {#each tiles as tile}
                <section class="tile"></section>
            {/each}
        </section>
    </main>
</body>

<style>
    :root {
        --color-background: #fbebd1;
        --color-linePurple: #7c1936;
        --color-lineGreen: #0c7e79;
        --color-lineYellow: #fcb438;
        --color-lineOrange: #f2723a;
        --color-lineRed: #c32227;

        --color-planetSun: #ffa500;
        --color-planetMoon: #808080;
        --color-planetEarth: #3838fb;
    }

    body {
        background: var(--color-background);
        overflow: hidden;
    }

    .animatePurple,
    .animateGreen,
    .animateYellow,
    .animateOrange,
    .animateRed {
        stroke-dasharray: 4000;
        stroke-dashoffset: 4000;
    }

    .animatePurple {
        animation: draw 2.4s linear forwards;
    }

    .animateGreen {
        animation: draw 2.3s linear forwards;
    }

    .animateYellow {
        animation: draw 2.2s linear forwards;
    }

    .animateOrange {
        animation: draw 2.1s linear forwards;
    }

    .animateRed {
        animation: draw 2s linear forwards;
    }

    main {
        width: 100vw;
        height: 100vh;
        margin-top: -42rem;

        display: flex;

        visibility: hidden;
        animation: loadIn 1s forwards;
        animation-delay: 2.4s;
    }

    img {
        width: 16%;
        height: 20%;

        position: absolute;
        top: 34%;
        left: 25%;

        z-index: 1;

        animation: loadIn 2s forwards;
        animation-delay: 2.4s;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-gap: 1rem;
        padding: 1rem;

        width: 30vw;
        height: 35vh;
        margin: auto;

        border-radius: 2rem;
        border: 20px solid var(--color-lineRed);
        background: var(--color-lineOrange);

        position: relative;

        margin-left: 17rem;
    }

    .tile {
        border-radius: 2rem;
        border: 3px solid var(--color-linePurple);
        background: var(--color-background);
        visibility: hidden;

        animation: loadIn 2s forwards;
    }

    .tile:nth-child(1) {
        grid-column: span 4;
        grid-row: span 2;

        animation-delay: 0.2s;
    }

    .tile:nth-child(2) {
        grid-column: span 4;
        grid-row: span 4;

        animation-delay: 0.4s;
    }

    .tile:nth-child(3) {
        grid-column: span 2;
        grid-row: span 2;

        animation-delay: 0.6s;
    }

    .tile:nth-child(4) {
        grid-column: span 2;
        grid-row: span 1;

        animation-delay: 0.8s;
    }

    .tile:nth-child(5) {
        grid-column: span 2;
        grid-row: span 1;

        animation-delay: 1s;
    }

    .tile:nth-child(6) {
        grid-column: span 2;
        grid-row: span 1;

        animation-delay: 1.2s;
    }

    .tile:nth-child(7) {
        grid-column: span 4;
        grid-row: span 3;

        animation-delay: 1.4s;
    }

    .tile:nth-child(8) {
        grid-column: span 2;
        grid-row: span 1;

        animation-delay: 1.6s;
    }

    .tile:nth-child(9) {
        grid-column: span 2;
        grid-row: span 2;

        animation-delay: 1.8s;
    }

    .tile:nth-child(10) {
        grid-column: span 4;
        grid-row: span 2;

        animation-delay: 2s;
    }

    @keyframes draw {
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes loadIn {
        0% {
            visibility: hidden;
            opacity: 0;
        }
        100% {
            visibility: visible;
            opacity: 1;
        }
    }
</style>
