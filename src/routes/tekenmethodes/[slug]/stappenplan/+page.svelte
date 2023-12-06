<script>

    export let data;
    console.log(data);

    let stappenplanButton;

    // Function to toggle the "toon" class on the "stappen" element
    function toonStappenplan() {
        const stappenElement = document.getElementById("stappen");
        stappenElement.classList.toggle("toon");
    }

    // This function will be called when the Svelte component is mounted
    function setup() {
        stappenplanButton = document.getElementById("stappenplanbutton");
        stappenplanButton.addEventListener("click", toonStappenplan);
    }

    // This function will be called when the Svelte component is unmounted
    function teardown() {
        stappenplanButton.removeEventListener("click", toonStappenplan);
    }
</script>

<!-- <Header /> -->

<body class="page">
    <header>
        <section>
            <a href="/">
                <img class="logo" src="/assets/vtHBO-v1.0-Logo_1.svg" alt="" />
            </a>
        </section>

        <section class="navheader">
            <nav>
                <ul>
                    <a href="/over">
                        <li>Over</li>
                    </a>
                    <li>Blog</li>
                    <!-- <li>
                        <img src="/assets/account.svg" alt="" />
                    </li> -->
                </ul>
            </nav>
        </section>
    </header>

    <section>
        <a href="/tekenmethodes">
            <p class="line">
                <img class="arrows-line" src="/assets/arrows.svg" alt="" />
                Overzicht <strong>tekenmethodes</strong>
            </p>
        </a>
    </section>

    <main class="detail-main">
        <section class="navmain">
            <section>
                <h1 class="h1-detail">
                    {#each data.methods as method}
                        {method.title}
                    {/each}
                </h1>
            </section>

            {#each data.methods as method}
                <nav>
                    <ul>
                        <a href="/tekenmethodes/{method.slug}">
                            <li>
                                <h2 class="h2-detail">Beschrijving</h2>
                            </li>
                        </a>
                        <li>
                            <h2 class="bold">Stappenplan</h2>
                        </li>
                        <a href="/tekenmethodes/{method.slug}/voorbeelden">
                            <li>
                                <h2 class="h2-detail">Voorbeelden</h2>
                            </li>
                        </a>
                        <a
                            href="/tekenmethodes/{method.slug}/form?id={method.id}"
                        >
                            <li>
                                <h2 class="h2-detail">Feedback</h2>
                            </li>
                        </a>
                    </ul>
                </nav>
            {/each}
        </section>

        {#each data.methods as method}
            <img class="template-url" src={method?.template?.url} alt="" />
        {/each}

        <section class="flex-s">
            <section class="full-b">
                <section class="tags-b">
                    <img class="icon" src="/assets/icon1.svg" alt="" />
                    {#each data.methods as method}
                        <h2 class="tag">
                            {@html JSON.stringify(method.categories)}
                        </h2>
                    {/each}
                </section>

                <section class="tags-b">
                    <img class="icon" src="/assets/icon2.svg" alt="" />
                    <h2 class="tag">
                        {#each data.methods as method}
                            {method.material}
                        {/each}
                    </h2>
                </section>

                <section class="tags-b">
                    <img class="icon" src="/assets/icon3.svg" alt="" />
                    <h2 class="tag">
                        {#each data.methods as method}
                            {method.duration}
                        {/each}
                    </h2>
                </section>

                <section class="tags-b">
                    <img class="icon" src="/assets/icon4.svg" alt="" />
                    <h2 class="tag">Marco:)</h2>
                </section>

                <div class="buttondeel">
                    <h4>Stappenplan</h4>
                    <button id="stappenplanbutton" on:click={toonStappenplan}>
                        <img
                            src="/assets/pijl-hexagon-naar-beneden.svg"
                            alt="Pijl naar beneden"
                        />
                    </button>
                </div>
                <div id="stappen" class="stappen">
                    <ol class="tobiashaha">
                        {#each data.methods as method}
                            <li>
                                <h4>{@html JSON.stringify(method.steps)}</h4>
                                <div class="step-description">
                                    <!-- {method.description.html} -->
                                </div>
                            </li>
                        {/each}
                    </ol>
                </div>
            </section>
        </section>
    </main>
</body>

<!-- <Footer /> -->
