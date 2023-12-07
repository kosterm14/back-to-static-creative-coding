<script>
    import { onMount, onDestroy } from "svelte";

    import Header from "$lib/molecules/header.svelte";
    import Footer from "$lib/molecules/footer.svelte";
    import Homepage from "$lib/organisms/homepage.svelte";

    let loading = true;

    function handleKeyDown(event) {
        if (event.key === "L" || event.key === "l") {
            loading = true;
            setTimeout(() => {
                loading = false;
            }, 3000); // Adjust the delay as needed
        }
    }

    onMount(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("keydown", handleKeyDown);

            if (sessionStorage.getItem("alreadyLoaded")) {
                loading = false;
            } else {
                sessionStorage.setItem("alreadyLoaded", "true");
                setTimeout(() => {
                    loading = false;
                }, 3000); // Adjust the delay as needed
            }
        }
    });

    onDestroy(() => {
        if (typeof window !== "undefined") {
            window.removeEventListener("keydown", handleKeyDown);
        }
    });
</script>

{#if loading}
    <div class="container">
        <div class="row">
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
        </div>
        <div class="row altline2">
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
        </div>
        <div class="row line2">
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
        </div>
        <div class="row altline3">
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon"></div>
            <div class="hexagon"></div>
            <div class="hexagon"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
        </div>
        <div class="row line3">
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon"></div>
            <div class="hexagon"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
        </div>
        <div class="row altline4">
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
        </div>
        <div class="row line4">
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
        </div>
        <div class="row altline5">
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
        </div>
        <div class="row line5">
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
        </div>
        <div class="row">
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
        </div>
        <div class="row">
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
        </div>
        <div class="row">
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
            <div class="hexagon2"></div>
        </div>
    </div>
{:else}
    <Header />
    <Homepage />
    <Footer />
{/if}

<style>
    .container {
        position: relative;
        overflow: hidden;
        height: 100vh;
        animation: blur 3s linear infinite;
        /* background-color: hsl(60, 100%, 50%); */
        background: radial-gradient(circle, transparent, var(--vtDarkBlue) 40%);
    }

    .container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, transparent, var(--vtYellow) 90%);
    }

    @keyframes blur {
        0% {
            opacity: 100%;
        }
        50% {
            opacity: 75%;
        }
        100% {
            opacity: 0%;
        }
    }

    .row {
        display: inline-flex;
        margin-left: -50px;
        margin-top: -32px;
        overflow: hidden;
    }
    .row:nth-child(even) {
        margin-left: 1px;
    }
    .hexagon {
        position: relative;
        height: 110px;
        width: 100px;
        background-color: var(--vtYellow);
        margin: 1px;
        clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
        );
    }

    .hexagon2 {
        position: relative;
        height: 110px;
        width: 100px;
        background: white;
        background-color: var(--vtDarkBlue);
        margin: 1px;
        clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
        );
    }

    .hexagon:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        pointer-events: none;
        background-color: var(--vtYellow);
    }

    .hexagon {
        transition: 0s;
        background-color: var(--vtYellow);
        /* cursor: alias; */
    }
</style>
