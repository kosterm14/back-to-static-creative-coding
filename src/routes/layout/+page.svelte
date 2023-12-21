<script>
    let tiles = Array(10);
</script>

<body>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1700 1100">
        <path
            id="racePath"
            class="animatePurple"
            d="M0 50 L1500 50 C 1700,50 1700,318 1500,318 L400 318 Q195,310 200,550 L200, 1000"
            stroke="var(--color-linePurple)"
            stroke-width="15"
            fill="transparent"
        />

        <image
            href="assets/car2.svg"
            id="raceCar"
            x="0"
            y="-80"
            height="100px"
            width="100px"
        >
            <animateMotion
                xlink:href="#raceCar"
                dur="100s"
                repeatCount="indefinite"
                rotate="auto"
            >
                <mpath xlink:href="#racePath" />
            </animateMotion>
        </image>

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
        <img class="girl1" src="assets/retrogirl.png" alt="" />
        <section class="container">
            {#each tiles as tile}
                <section class="tile"></section>
            {/each}
        </section>
    </main>

    <section>
        <img class="girl2" src="assets/retrogirl2.png" alt="" />

        <img class="blue" src="assets/vinylBlue.svg" alt="" />
        <img class="orange" src="assets/vinylOrange.svg" alt="" />
        <img class="gray" src="assets/vinylGray.svg" alt="" />

        <img class="jukebox" src="assets/jukebox.svg" alt="" />

        <div class="music">
            <div class="noot-1">&#9835; &#9833;</div>
            <div class="noot-2">&#9833;</div>
            <div class="noot-3">&#9839; &#9834;</div>
            <div class="noot-4">&#9834;</div>
            <div class="noot-5">&#9835; &#9833;</div>
        </div>
    </section>
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

    .animateGreen,
    .animateYellow,
    .animateOrange,
    .animateRed {
        animation:
            loadInLines 2s cubic-bezier(0.2, 1, 0.8, 1) forwards,
            animate 2s ease-in-out infinite;
        visibility: hidden;
    }

    .animatePurple {
        animation: draw 3s linear forwards;
    }

    .animateGreen {
        /* animation: draw 3s linear forwards; */
        animation-delay: 1.8s;
    }

    .animateYellow {
        /* animation: draw 2.8s linear forwards; */
        animation-delay: 2.2s;
    }

    .animateOrange {
        /* animation: draw 2.6s linear forwards; */
        animation-delay: 2.6s;
    }

    .animateRed {
        /* animation: draw 2.4s linear forwards; */
        animation-delay: 3s;
    }

    main {
        width: 100vw;
        height: 100vh;
        margin-top: -43rem;
        margin-left: -3rem;

        display: flex;

        visibility: hidden;
        animation: loadIn 1s forwards;
        animation-delay: 3.2s;
    }

    .girl1 {
        /* width: 16%; */
        height: 20%;

        position: absolute;
        top: 31.5%;
        left: 25%;

        z-index: 1;

        animation: loadIn 2s forwards;
        animation-delay: 3.2s;
    }

    .girl2 {
        height: 55%;

        position: absolute;
        bottom: 8%;
        right: 5%;

        z-index: 1;

        animation: loadIn 2s forwards;
        animation-delay: 6s;

        visibility: hidden;
    }

    .blue,
    .orange,
    .gray {
        position: absolute;
        bottom: 60%;
        right: 13%;
        width: 5%;
    }

    .gray {
        animation:
            loadIn 2s forwards,
            syzygal1 9s infinite,
            move 9s cubic-bezier(0.47, 0, 0.745, 0.715) infinite;
        animation-delay: 7s, 0s, 0s;

        visibility: hidden;
    }

    .gray:hover {
        filter: drop-shadow(0 0 0.75rem var(--color-planetMoon));
        animation-play-state: paused;
    }

    .orange {
        animation:
            loadIn 2s forwards,
            syzygal2 9s infinite,
            move 9s cubic-bezier(0.47, 0, 0.745, 0.715) infinite;
        animation-delay: 7s, 0s, 0s;

        visibility: hidden;
    }

    .orange:hover {
        filter: drop-shadow(0 0 0.75rem var(--color-planetSun));
        animation-play-state: paused;
    }

    .blue {
        animation:
            loadIn 2s forwards,
            syzygal3 9s infinite,
            move 9s cubic-bezier(0.47, 0, 0.745, 0.715) infinite;
        animation-delay: 7s, 0s, 0s;

        visibility: hidden;
    }

    .blue:hover {
        filter: drop-shadow(0 0 0.75rem var(--color-planetEarth));
        animation-play-state: paused;
    }

    .jukebox {
        position: absolute;
        bottom: 7%;
        right: 23%;
        width: 13%;

        animation: loadIn 2s forwards;
        animation-delay: 8s;

        visibility: hidden;

        /* z-index: 1; */
    }

    #raceCar {
        animation: loadIn 2s forwards;
        animation-delay: 5s;
        visibility: hidden;
    }

    #raceCar:hover {
        filter: drop-shadow(0 0 0.75rem var(--color-linePurple));
    }

    .music {
        position: absolute;
        bottom: 7%;
        right: -15%;

        display: block;
        margin: auto;
        width: 50%;
        min-width: 300px;
        height: 300px;
        border: 0px solid #000;

        animation: loadIn 2s forwards;
        animation-delay: 9s;
        visibility: hidden;
    }

    .noot-1,
    .noot-2,
    .noot-3,
    .noot-4,
    .noot-5 {
        position: absolute;
        animation: notes 5s infinite linear;
        font-size: 35px;
        opacity: 0;
    }

    .noot-1:hover,
    .noot-2:hover,
    .noot-3:hover,
    .noot-4:hover,
    .noot-5:hover {
        animation-play-state: paused;
    }

    .noot-1:hover {
        filter: drop-shadow(0 0 0.75rem var(--color-linePurple));
    }

    .noot-2:hover {
        filter: drop-shadow(0 0 0.75rem var(--color-lineGreen));
    }

    .noot-3:hover {
        filter: drop-shadow(0 0 0.75rem var(--color-lineYellow));
    }

    .noot-4:hover {
        filter: drop-shadow(0 0 0.75rem var(--color-lineOrange));
    }

    .noot-5:hover {
        filter: drop-shadow(0 0 0.75rem var(--color-lineRed));
    }

    .noot-1 {
        color: var(--color-linePurple);
        top: 60px;
        left: 0;
        animation-delay: 0.5s;
    }

    .noot-2 {
        color: var(--color-lineGreen);
        top: 30px;
        left: 10%;
        animation-delay: 1s;
    }

    .noot-3 {
        color: var(--color-lineYellow);
        top: 90px;
        left: 20%;
        animation-delay: 1.5s;
    }

    .noot-4 {
        color: var(--color-lineOrange);
        top: 40px;
        left: 30%;
        animation-delay: 2s;
    }

    .noot-5 {
        color: var(--color-lineRed);
        top: 50px;
        left: 40%;
        animation-delay: 2.5s;
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
        border: 20px solid var(--color-linePurple);

        position: relative;

        margin-left: 17rem;

        animation: boxShadow 1s forwards;
        animation-delay: 4s;
        transition: ease-in-out 0.2s;
    }

    .tile {
        border-radius: 2rem;
        border: 3px solid var(--color-linePurple);
        background: var(--color-background);
        visibility: hidden;

        animation: loadIn 2s forwards;
    }

    .tile:hover {
        background: var(--color-lineRed);
        scale: 1.1;
    }

    .tile:nth-child(1) {
        grid-column: span 4;
        grid-row: span 2;

        animation-delay: 0.4s;
    }

    .tile:nth-child(2) {
        grid-column: span 4;
        grid-row: span 4;

        animation-delay: 0.6s;
    }

    .tile:nth-child(3) {
        grid-column: span 2;
        grid-row: span 2;

        animation-delay: 0.8s;
    }

    .tile:nth-child(4) {
        grid-column: span 2;
        grid-row: span 1;

        animation-delay: 1.6s;
    }

    .tile:nth-child(5) {
        grid-column: span 2;
        grid-row: span 1;

        animation-delay: 1.8s;
    }

    .tile:nth-child(6) {
        grid-column: span 2;
        grid-row: span 1;

        animation-delay: 2s;
    }

    .tile:nth-child(7) {
        grid-column: span 4;
        grid-row: span 3;

        animation-delay: 2.2s;
    }

    .tile:nth-child(8) {
        grid-column: span 2;
        grid-row: span 1;

        animation-delay: 2.4s;
    }

    .tile:nth-child(9) {
        grid-column: span 2;
        grid-row: span 2;

        animation-delay: 2.6s;
    }

    .tile:nth-child(10) {
        grid-column: span 4;
        grid-row: span 2;

        animation-delay: 2.8s;
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

    @keyframes loadInLines {
        to {
            stroke-dashoffset: 0;
            visibility: visible;
        }
    }

    @keyframes boxShadow {
        0% {
            box-shadow: none;
        }
        100% {
            background: var(--color-lineOrange);
            box-shadow:
                10px 10px 0px 0px var(--color-lineGreen),
                20px 20px 0px 0px var(--color-lineYellow),
                30px 30px 0px 0px var(--color-lineOrange),
                40px 40px 0px 0px var(--color-lineRed);
        }
    }

    @keyframes syzygal1 {
        0%,
        100% {
            transform: translateX(-30%);
        }
        50% {
            transform: translateX(-300%);
        }
    }

    @keyframes syzygal2 {
        0%,
        100% {
            transform: translateX(-10%);
        }
        50% {
            transform: translateX(-150%);
        }
    }

    @keyframes syzygal3 {
        0%,
        100% {
            transform: translateX(-10%);
        }
        50% {
            transform: translateX(0%);
        }
    }

    @keyframes move {
        0%,
        100% {
            scale: 1;
        }
        50% {
            scale: 1.2;
        }
    }

    @keyframes notes {
        0% {
            transform: scale(1) translate(0, 0);
            opacity: 0;
        }
        50% {
            opacity: 1;
            transform: scale(1.5) translate(70%, -90%);
        }
        80% {
            opacity: 1;
            transform: scale(1.5) translate(140%, -180%);
        }
        100% {
            transform: scale(1.5) translate(140%, -180%);
            opacity: 0;
        }
    }

    .animateGreen,
    .animateYellow,
    .animateOrange,
    .animateRed {
        will-change: stroke-dashoffset, visibility;
    }

    .animatePurple {
        will-change: stroke-dashoffset;
    }

    main,
    .girl1,
    .girl2,
    .blue,
    .orange,
    .gray,
    .jukebox,
    #raceCar,
    .tile,
    .music {
        will-change: visibility, opacity;
    }

    .gray:hover,
    .orange:hover,
    .blue:hover,
    #raceCar:hover,
    .tile:hover {
        will-change: filter;
    }

    .gray,
    .blue,
    .orange {
        will-change: transform, animation-play-state;
    }

    .container {
        will-change: box-shadow;
    }

    .noot-1,
    .noot-2,
    .noot-3,
    .noot-4,
    .noot-5 {
        will-change: transform, opacity;
    }

    .noot-1:hover,
    .noot-2:hover,
    .noot-3:hover,
    .noot-4:hover,
    .noot-5:hover {
        will-change: filter, animation-play-state;
    }
</style>
