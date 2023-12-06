<script>
    export let data;
    console.log(data);
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
                    <a href="/blog">
                        <li>Blog</li>
                    </a>
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
                        {method?.title}
                    {/each}
                </h1>
            </section>

            {#each data.methods as method}
                <nav>
                    <ul>
                        <li>
                            <h2 class="bold">Beschrijving</h2>
                        </li>
                        <a href="/tekenmethodes/{method.slug}/stappenplan">
                            <li>
                                <h2 class="h2-detail">Stappenplan</h2>
                            </li>
                        </a>
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

        <section class="flex-b">
            {#each data.methods as method}
                <img class="template-url" src={method?.template?.url} alt="" />
            {/each}

            <h3 class="text">
                {#each data.methods as method}
                    {@html method?.description.html}
                {/each}
            </h3>
        </section>
    </main>
</body>
