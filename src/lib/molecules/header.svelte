<script>
</script>

<section>
  <body>
    <label>
      <input type="checkbox" />
      <span class="menu"> <span class="hamburger" /> </span>

      <nav class="nav-menu">
        <ul class="ul-1">
          <a href="/tekenmethodes"><li>Tekenmethodes</li></a>
          <a href="/kennisclips"><li>Kennisclips</li></a>
        </ul>
        <a href="/">
          <img
            src="assets\vtHBO-v1.0-Logo_1.svg"
            class="visual-thinking-logo"
            alt="visual-thinking-logo">
        </a>

        <ul class="ul-2">
          <a href="/over"><li>Over</li></a>
          <a href="/artikelen"><li>Artikelen</li></a>
        </ul>
        <section class="yellow-wrapped">
          <section class="yellow" />
          <section class="yellow2" />
          <section class="yellow3" />
          <section class="yellow4" />
        </section>
      </nav>
    </label>
  </body>
</section>

<style>
  body {
    margin: 0;
    padding: 0;
    box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.1);
  }

  a {
    color: var(--vtDarkBlue);
    text-decoration: none;
    cursor: pointer;
  }

  a:link {
    text-decoration: none;
  }

  .nav-menu {
    padding: 2em;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 10px;
    justify-items: center;
  }

  img {
    margin-left: -1em;
  }

  ul {
    list-style-type: none;
    display: flex;
    color: var(--vtDarkBlue);
    font-family: var(--vtPrimaryFont);
    font-weight: 700;
  }

  .ul-1 {
    grid-column: 2;
  }

  .ul-1,
  .ul-2 {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .ul-1 li,
  .ul-2 li {
    margin-right: 20px;
  }

  .visual-thinking-logo {
    grid-column: 3 / span 1;
    justify-self: center;
    max-width: 100px;
    height: auto;
  }

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

  @media (width>580px) {
    input {
      display: none;
    }

    /* label {
            display: none;
		} */

    a:link {
      text-decoration: none;
      font-family: var(--vtPrimaryFont), sans-serif; 
      font-weight: 700;
    }

    nav {
      background-color: rgb(255, 252, 249);
      padding: 2em;
    }
  }

  @media (width<580px) {
    /* nav {
      display: none;
    } */

    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    body {
      font-size: 1.2em;
      line-height: 1.6;
      overflow-x: hidden;
      background-color: rgb(255, 255, 255);
    }

    .yellow-wrapped {
      display: none;
    }

    label .menu {
      position: fixed;
      right: -100px;
      top: -120px;
      z-index: 100;
      width: 200px;
      height: 200px;
      background: #ffffff;
      border-radius: 50% 50% 50% 50%;
      -webkit-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      box-shadow:
        0 0 0 0 #fff,
        0 0 0 0 #fff;
      cursor: pointer;
    }

    label .hamburger {
      position: absolute;
      top: 150px;
      left: 50px;
      width: 30px;
      height: 2px;
      background: #000000;
      display: block;
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
    }

    label .hamburger:after,
    label .hamburger:before {
      -webkit-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: #000000;
    }

    label .hamburger:before {
      top: -10px;
    }

    label .hamburger:after {
      bottom: -10px;
    }

    label input {
      display: none;
    }

    label input:checked + .menu {
      box-shadow:
        0 0 0 100vw #fff,
        0 0 0 100vh #fff;
      border-radius: 0;
    }

    label input:checked + .menu .hamburger {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    label input:checked + .menu .hamburger:after {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      bottom: 0;
    }

    label input:checked + .menu .hamburger:before {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      top: 0;
    }

    label input:checked + .menu + ul {
      opacity: 1;
    }

    label ul {
      z-index: 200;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: 0.25s 0.05s ease-in-out;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    li {
      margin-bottom: 1em;
      display: block;
      color: #000000;
      text-decoration: none;
    }
  }
</style>
