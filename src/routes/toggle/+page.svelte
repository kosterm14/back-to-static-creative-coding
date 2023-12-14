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

        background: radial-gradient(#ee82ee 22%, #0000 0),
            linear-gradient(to right, #00ff1a, #feb47b);
        background-repeat: no-repeat;
        filter: blur(20px) contrast(50);
        box-shadow: 0 0 0 50px #fff;
        position: absolute;
        z-index: 0;
        align-items: center;

        mix-blend-mode: color-burn;
        animation-timing-function: ease-in-out;
    }

    .splash {
        background:
            repeating-conic-gradient(#ff00ff 0 1%, #0000 0 11%),
            repeating-conic-gradient(#0000 0 7%, #00ffff 0 9%) 50% / 100% 500%,
            repeating-conic-gradient(#0000 0 5%, #ffd700 0 7%) 50% / 500% 800%;
        animation: ripple 5s infinite;
    }
    .splash2 {
        background:
            repeating-conic-gradient(#0000 0 7%, #adff2f 0 9%) 50% / 800% 1200%,
            repeating-conic-gradient(#0000 0 11%, #ff4500 0 13%) 50% / 1200%
                700%,
            repeating-conic-gradient(#0000 0 11%, #1e90ff 0 13%) 50% / 700% 900%;
        animation: ripple 10s infinite;
    }
    .splash3 {
        background:
            repeating-conic-gradient(#ff1493 0 1%, #0000 0 11%),
            repeating-conic-gradient(#0000 0 7%, #00bfff 0 9%) 50% / 100% 500%,
            repeating-conic-gradient(#0000 0 5%, #ff6347 0 7%) 50% / 500% 800%;
        animation: ripple2 5s infinite;
    }
    .splash4 {
        background:
            repeating-conic-gradient(#0000 0 7%, #7fff00 0 9%) 50% / 800% 1200%,
            repeating-conic-gradient(#0000 0 11%, #ff8c00 0 13%) 50% / 1200%
                700%,
            repeating-conic-gradient(#0000 0 11%, #4b0082 0 13%) 50% / 700% 900%;
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
            rgba(0, 0, 0, 1) 70%,
            rgba(0, 0, 0, 0.7) 80%,
            rgba(0, 0, 0, 0.5) 85%,
            rgba(0, 0, 0, 0.3) 90%,
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
        background: #fff;
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
        background-color: #ccc;
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
        background-color: #2196f3;
    }

    input:focus + .slider {
        box-shadow: 0 0 10px #2196f3;
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

    @keyframes ripple {
        0%,
        100% {
            transform: scale(1) rotate(0deg);
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
