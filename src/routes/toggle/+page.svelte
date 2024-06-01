<script>
    import { onMount } from "svelte";

    let color = false;
    let blackHole = false;

    onMount(() => {
        const handleKeyDown = (event) => {
            if (event.key === "r") {
                color = false;
                blackHole = false;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    function handleClick() {
        if (color) {
            blackHole = true;
        } else {
            color = true;
        }
    }

    let mouseX = 0;
    let mouseY = 0;

    function handleMouseMove(event) {
        mouseX = (event.clientX / window.innerWidth) * 100;
        mouseY = (event.clientY / window.innerHeight) * 100;
    }

    let stars = Array(500)
        .fill()
        .map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 3 + 1,
        }));

    function updateStars() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }
        stars = stars.map((star) => {
            const dx = mouseX - star.left;
            const dy = mouseY - star.top;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 10) {
                star.left += dx / 100;
                star.top += dy / 100;
            }

            return star;
        });
        if (typeof window !== "undefined") {
            window.requestAnimationFrame(updateStars);
        }
    }

    if (typeof window !== "undefined") {
        updateStars();
    }
</script>

<body role="application" on:mousemove={handleMouseMove}>
    <div id="container">
        <label class="switch">
            <input type="checkbox" on:click={handleClick} />
            <span class="slider round"></span>
        </label>
        <a class="layoutLink" href="/layout">Click here for other page</a>

        {#if color}
            <div class="splash"></div>
            <div class="splash2"></div>
            <div class="splash3"></div>
            <div class="splash4"></div>
        {/if}

        {#if blackHole}
            <div class="blackHole"></div>
            {#each stars as star (star.id)}
                <div
                    class="star"
                    style="top: {star.top}%; left: {star.left}%; width: {star.size}px; height: {star.size}px"
                ></div>
            {/each}
        {/if}
    </div>
</body>

<style>
    :root {
        --color-pink: #ee82ee;
        --color-green: #00ff1a;
        --color-orange: #feb47b;
        --color-purple: #ff00ff;
        --color-cyan: #00ffff;
        --color-gold: #ffd700;
        --color-light-green: #adff2f;
        --color-red-orange: #ff4500;
        --color-dodger-blue: #1e90ff;
        --color-deep-pink: #ff1493;
        --color-deep-sky-blue: #00bfff;
        --color-tomato: #ff6347;
        --color-chartreuse: #7fff00;
        --color-dark-orange: #ff8c00;
        --color-indigo: #4b0082;
        --color-white: #fff;
        --color-light-grey: #ccc;
        --color-blue: #2196f3;
        --color-black: rgba(0, 0, 0, 1);
        --color-black-70: rgba(0, 0, 0, 0.7);
        --color-black-50: rgba(0, 0, 0, 0.5);
        --color-black-30: rgba(0, 0, 0, 0.3);
    }

    body {
        margin: 0;
        animation: colorChange 10s infinite linear;
        /* background-color: rgb(220, 222, 203); */
    }

    .splash,
    .splash2,
    .splash3,
    .splash4 {
        width: 100%;
        height: 100%;

        background: radial-gradient(var(--color-pink) 22%, #0000 0),
            linear-gradient(to right, var(--color-green), var(--color-orange));
        background-repeat: no-repeat;
        filter: blur(20px) contrast(50);
        box-shadow: 0 0 0 50px var(--color-white);
        position: absolute;
        z-index: 0;
        align-items: center;

        mix-blend-mode: color-burn;
        animation-timing-function: ease-in-out;
    }

    .splash {
        background:
            repeating-conic-gradient(var(--color-purple) 0 1%, #0000 0 11%),
            repeating-conic-gradient(#0000 0 7%, var(--color-cyan) 0 9%) 50% /
                100% 500%,
            repeating-conic-gradient(#0000 0 5%, var(--color-gold) 0 7%) 50% /
                500% 800%;
        animation: ripple 5s infinite;
    }

    .splash2 {
        background:
            repeating-conic-gradient(#0000 0 7%, var(--color-light-green) 0 9%)
                50% / 800% 1200%,
            repeating-conic-gradient(#0000 0 11%, var(--color-red-orange) 0 13%)
                50% / 1200% 700%,
            repeating-conic-gradient(
                    #0000 0 11%,
                    var(--color-dodger-blue) 0 13%
                )
                50% / 700% 900%;
        animation: ripple 10s infinite;
    }

    .splash3 {
        background:
            repeating-conic-gradient(var(--color-deep-pink) 0 1%, #0000 0 11%),
            repeating-conic-gradient(
                    #0000 0 7%,
                    var(--color-deep-sky-blue) 0 9%
                )
                50% / 100% 500%,
            repeating-conic-gradient(#0000 0 5%, var(--color-tomato) 0 7%) 50% /
                500% 800%;
        animation: ripple2 5s infinite;
    }

    .splash4 {
        background:
            repeating-conic-gradient(#0000 0 7%, var(--color-chartreuse) 0 9%)
                50% / 800% 1200%,
            repeating-conic-gradient(
                    #0000 0 11%,
                    var(--color-dark-orange) 0 13%
                )
                50% / 1200% 700%,
            repeating-conic-gradient(#0000 0 11%, var(--color-indigo) 0 13%) 50% /
                700% 900%;
        animation: ripple2 10s infinite;
    }

    .blackHole {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 200vw;
        height: 200vh;
        background: radial-gradient(
            circle,
            var(--color-black) 70%,
            var(--color-black-70) 80%,
            var(--color-black-50) 85%,
            var(--color-black-30) 90%,
            transparent 100%
        );
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        z-index: 9999;
        animation: blackHole 5s forwards;
        box-shadow:
            0 0 10px 2px rgba(255, 255, 255, 0.1),
            0 0 20px 5px rgba(255, 255, 255, 0.2),
            0 0 50px 10px rgba(255, 255, 255, 0.3),
            0 0 100px 20px rgba(255, 255, 255, 0.5);
    }

    .blackHole::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: inherit;
        animation: swirl 15s infinite linear;
    }

    .star {
        position: absolute;
        background: var(--color-white);
        border-radius: 50%;
        animation: twinkle 2s infinite;
        z-index: 9999;
    }

    #container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }

    .switch {
        position: relative;
        z-index: 1;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--color-light-grey);
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: var(--color-blue);
    }

    input:focus + .slider {
        box-shadow: 0 0 10px var(--color-blue);
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    .layoutLink {
        position: absolute;
        bottom: 20px;
        right: 20px;
        color: var(--color-black);
        text-decoration: none;
        font-size: 1.5rem;
        z-index: 1;
        font-family: sans-serif;
    }

    @keyframes ripple {
        0%,
        100% {
            transform: scale(1.5) rotate(0deg);
        }
        10%,
        90% {
            transform: scale(0.8) rotate(-36deg);
        }
        20%,
        80% {
            transform: scale(0.6) rotate(-72deg);
        }
        30%,
        70% {
            transform: scale(0.4) rotate(-108deg);
        }
        40%,
        60% {
            transform: scale(0.2) rotate(-144deg);
        }
    }

    @keyframes ripple2 {
        0%,
        100% {
            transform: scale(1) rotate(0deg);
        }
        20%,
        80% {
            transform: scale(1.2) rotate(36deg);
        }
        40%,
        60% {
            transform: scale(1.4) rotate(72deg);
        }
        60%,
        40% {
            transform: scale(1.6) rotate(108deg);
        }
        80%,
        20% {
            transform: scale(1.8) rotate(144deg);
        }
    }

    @keyframes twinkle {
        0% {
            transform: scale(0.5);
        }
        50% {
            transform: scale(1);
        }
        100% {
            transform: scale(0.5);
        }
    }

    @keyframes blackHole {
        0% {
            transform: translate(-50%, -50%) scale(0);
        }
        33% {
            transform: translate(-50%, -50%) scale(0.3);
        }
        66% {
            transform: translate(-10%, -10%) scale(0.6);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @keyframes swirl {
        0%,
        100% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(360deg);
        }
    }

    @keyframes colorChange {
        0% {
            background-color: rgb(220, 222, 203);
        }
        50% {
            background-color: rgb(203, 220, 222);
        }
        100% {
            background-color: rgb(220, 222, 203);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .splash,
        .splash2,
        .splash3,
        .splash4 {
            animation: none;
        }
        .slider.round,
        .slider.round:before {
            -webkit-transition: none;
            transition: none;
        }
        @keyframes blackHole {
            0%,
            100% {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
</style>
