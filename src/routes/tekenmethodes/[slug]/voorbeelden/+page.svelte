<script>

    export let data;
    // console.log(data);
</script>

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
              <img src="/assets/account.svg" alt="">
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
                        <a href="/tekenmethodes/{method.slug}/stappenplan">
                            <li>
                                <h2 class="h2-detail">Stappenplan</h2>
                            </li>
                        </a>
                        <li>
                            <h2 class="bold">Voorbeelden</h2>
                        </li>
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

        <section class="carousel">
            <button class="carousel-button-left">
                <img src="/assets/arrows.svg" alt="" />
            </button>
            <section class="carousel-container">
                <ul class="carousel-list">
                    {#each data.methods as method}
                        <li class="carousel-slide current-slide">
                            <img
                                class="carousel-img"
                                src={JSON.stringify(method.steps)}
                                alt=""
                            />
                        </li>
                    {/each}
                </ul>
            </section>
            <button class="carousel-button-right">
                <img src="/assets/arrows.svg" alt="" />
            </button>
        </section>
    </main>
</body>

<!-- <Footer /> -->
