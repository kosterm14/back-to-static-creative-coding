<script>
  export let data;
</script>

<!-- {#each data.categories as category}
  {category.title}
  <p>{@html category.content.html}</p>
  {category.knowledgeClip.url}
{/each} -->

<main>
  {#each data.categories as category}
    <article class="category">
      <h2>{category.title}</h2>
      <p>{@html category.content.html}</p>

      <aside>
        <button>
          <button onclick="myFunction()">Previous</button>
        </button>

        <a href={category.knowledgeClip.url}>{category.knowledgeClip.url}</a>
        <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/yr-rRMElLFg" frameborder="0" allowfullscreen></iframe> -->

        <button>
          <button onclick="myFunction()">Next</button>
        </button>
      </aside>

      <!-- <section class="yellow-wrapped">
      <section class="yellow" />
      <section class="yellow2" />
      <section class="yellow3" />
      <section class="yellow4" />
    </section> -->
    </article>
  {/each}
</main>

<style>
  :root {
    /* Visual Thinking: Primary Colors: Zie kleuren styleguide of eventueel Figma designs voor gebruik! */

    --vtDarkBlue: #090940;
    --vtLightBlue: #67c5d1;
    --vtYellow: #feb51e;
    --vtRed: #f96c4f;
    --vtWhite: #ffffff;

    /* Visual Thinking: Primary Colors Lichtere versies, ongeveer 80%, 50%, 30% en 10% opacity van de originele kleuren ^
    Zie kleuren styleguide of eventueel Figma designs voor gebruik!  */

    --vtDarkBlue-80: #3a3a66;
    --vtDarkBlue-50: #6b6b8c;
    --vtDarkBlue-30: #9d9db3;
    --vtDarkBlue-10: #ceced9;

    --vtLightBlue-80: #85d1da;
    --vtLightBlue-50: #a4dce3;
    --vtLightBlue-30: #c2e8ed;
    --vtLightBlue-10: #e1f3f6;

    --vtYellow-80: #fec44b;
    --vtYellow-50: #fed378;
    --vtYellow-30: #ffe1a5;
    --vtYellow-10: #fff0d2;

    --vtRed-80: #fa8972;
    --vtRed-50: #fba795;
    --vtRed-30: #fdc4b9;
    --vtRed-10: #fee2dc;

    --vtPrimaryFont: "rigid-square", sans-serif;
    --vtSecondaryFont: "yrsa", serif;
  }

  /* Clip styling */

  /* Header styling */

  h1 {
    font-size: 3.157rem;
    font-family: var(--vtPrimaryFont);
    color: var(--vtDarkBlue);
  }

  h2 {
    font-size: 2rem;
    font-family: var(--vtPrimaryFont);
    line-height: 1.5rem;
    color: var(--vtDarkBlue);
    margin-left: 1.5em;
    margin-right: 1.5em;
  }

  .h1-detail {
    padding-left: 6.7rem;
    max-width: 30rem;
    max-height: 6rem;
  }

  .h2-detail,
  .bold {
    font-size: 1rem;
    font-weight: 400;
    font-family: var(--vtPrimaryFont);
    color: var(--vtSec-DarkBlue);
  }

  .bold {
    font-weight: 800;
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 0.5rem;
  }

  h3 {
    font-size: 1.2rem;
    font-family: var(--vtSecondaryFont);
    line-height: 1.5rem;
  }

  /* Kennisclip teksten */

  p {
    text-align: left;
    text-transform: none;
    line-height: 1.5rem;
    margin-left: 3em;
    margin-right: 3em;
    font-family: var(--vtPrimaryFont);
    font-size: 1em;
  }
  /* Arrow buttons */

  button {
    display: inline-block;
    /* padding: 10px 10px; */
    font-size: 10px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: var(--vtDarkBlue);
    color: #ffffff;
    border: 2px solid var(--vtDarkBlue);
  }

  /* Hexagon */

  .yellow-wrapped {
    display: grid;
    grid-template-columns: auto;
    margin-top: 1%;
    justify-content: center;
    margin-right: -13em;
    margin-top: -3em;
  }

  .yellow,
  .yellow2,
  .yellow3,
  .yellow4 {
    width: 80px;
    height: 70px;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transform: rotate(90deg);
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    margin-top: -14%;
  }

  .yellow {
    background: var(--vtYellow);
  }
  .yellow2 {
    background: rgb(255, 213, 97);
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    margin-top: -7%;
  }

  .yellow3 {
    background: rgb(255, 213, 97);
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 3;
    margin-top: -7%;
  }

  .yellow4 {
    background: var(--vtYellow);
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 3;
    margin-top: -7%;
  }
</style>
