<section class="blogbutton1">
  <button>Lees meer</button>
  <button class=" extrabutton1">Lees meer</button>
  <button class=" extrabutton2">Lees meer</button>
</section>

<section class="blogbutton2">
  <button>Lees meer</button>
  <button class=" extrabutton4">Lees meer</button>
  <button class=" extrabutton3">Lees meer</button>
</section>

<style>
  button {
    font-family: var(--vtPrimaryFont);
    font-weight: bold;
    color: var(--vtDarkBlue);
    border-radius: 0.3em;
    background-color: var(--vtRed-50);
    border: none;
    height: 3em;
    width: 7em;
    margin-top: -2em;
  }

  button:hover {
    background-color: var(--vtYellow);
  }

  .blogbutton1 {
    position: relative;
    display: flex;
    top: -49em;
    flex-direction: inherit;
    left: 8em;
    gap: 17em;
  }

  .blogbutton2 {
    position: relative;
    display: flex;
    top: -10.5em;
    left: 8em;
    gap: 17em;
  }

  .extrabutton2,
  .extrabutton1 {
    margin-left: -0.5em;
  }

  .extrabutton3 {
    margin-left: -1.1em;
  }

  .extrabutton4 {
    margin-left: -0.5em;
  }
</style>
