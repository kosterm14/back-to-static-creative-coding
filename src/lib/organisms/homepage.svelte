<script>
    import HomepageText from "$lib/atoms/homepageText.svelte";

    import HomepageImg1 from "$lib/atoms/homepageImg1.svelte";
    import HomepageImg2 from "$lib/atoms/homepageImg2.svelte";

    import HomepageHexBlue from "$lib/atoms/homepageHexBlue.svelte";
    import HomepageHexYellow from "$lib/atoms/homepageHexYellow.svelte";
    import HomepageHexLightBlue from "$lib/atoms/homepageHexLightBlue.svelte";
    import HomepageHexRed from "$lib/atoms/homepageHexRed.svelte";
    import HomepageHexGray1 from "$lib/atoms/homepageHexGray1.svelte";
    import HomepageHexGray2 from "$lib/atoms/homepageHexGray2.svelte";
</script>

<div class="grid-container">
    <HomepageText />

    <HomepageImg1 />
    <HomepageImg2 />

    <HomepageHexBlue />
    <HomepageHexYellow />
    <HomepageHexGray1 />
    <HomepageHexLightBlue />
    <HomepageHexRed />
    <HomepageHexGray2 />
</div>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: auto;
        margin-top: 5%;
        margin-bottom: 5%;
        justify-content: center;
    }

    /* tablet */
    @media (min-width: 31em) and (max-width: 55em) {
        .grid-container {
            margin-top: 0%;
        }
    }

    /* mobile */
    @media (max-width: 31em) {
        .grid-container {
            margin-top: -7%;
            justify-content: normal;
        }
    }
</style>
