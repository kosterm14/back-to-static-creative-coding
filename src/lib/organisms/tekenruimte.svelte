<script>

    import { onMount } from "svelte";
    onMount(() => {
        const canvas = document.getElementById("drawing-board");
        const toolbar = document.getElementById("toolbar");
        const ctx = canvas.getContext("2d");
        const canvasOffsetX = canvas.offsetLeft;
        const canvasOffsetY = canvas.offsetTop;
        canvas.width = window.innerWidth - canvasOffsetX;
        canvas.height = window.innerHeight - canvasOffsetY;
        let isPainting = false;
        let lineWidth = 5;
        let startX;
        let startY;
        toolbar.addEventListener("click", (e) => {
            if (e.target.id === "clear") {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        });
        toolbar.addEventListener("change", (e) => {
            if (e.target.id === "stroke") {
                ctx.strokeStyle = e.target.value;
            }
            if (e.target.id === "lineWidth") {
                lineWidth = e.target.value;
            }
        });
        const draw = (e) => {
            if (!isPainting) {
                return;
            }

            const x = e.clientX - canvas.getBoundingClientRect().left;
            const y = e.clientY - canvas.getBoundingClientRect().top;

            ctx.lineWidth = lineWidth;
            ctx.lineCap = "round";
            ctx.lineTo(x, y);
            ctx.stroke();
        };
        canvas.addEventListener("mousedown", (e) => {
            isPainting = true;
            startX = e.clientX;
            startY = e.clientY;
        });
        canvas.addEventListener("mouseup", (e) => {
            isPainting = false;
            ctx.stroke();
            ctx.beginPath();
        });
        canvas.addEventListener("mousemove", draw);
    });

    console.log();
</script>

<main>
    <div class="labeltekst"><h1>Teken hier!</h1></div>
    <section class="container">
        <div id="toolbar">
            <h3>Kleurenpalet</h3>
            <label for="stroke">Kleur</label>
            <input id="stroke" name="stroke" type="color" />
            <label for="lineWidth">Pen dikte:</label>
            <input id="lineWidth" name="lineWidth" type="number" value="5" />
            <button id="clear">Wissen</button>
        </div>
        <div class="drawing-board">
            <canvas id="drawing-board" />
        </div>
    </section>
</main>


<style>
    .labeltekst {
        font-family: var(--vtPrimaryFont);
        margin: auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
      font-family: var(--vtPrimaryFont);  
      height: 100%;
      display: flex;
    }

    .drawing-board{
        border-radius: 25px;
        border: 1.5px #090940 solid;
        margin: 0.5em;
        cursor: url('cursor-img.jpg');
    }

    #toolbar {
        font-weight: 800;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        width: 15%;
        height: 50%;
        background-color: #feb51e;
        border-radius: 25px;
        gap: 0.3em;
        margin: 0.5em;
    }

    #toolbar input {
        width: 50%;
        border-radius: 4px;
        margin: 0;
    }

    #toolbar input:active{
        transform: translateY(1px);
        
    }

    #stroke{
        border: none;
        background: none;
        border-radius: 4px;
        
    }

    #lineWidth{
        border: none;
        border-radius: 4px;
    }
    #toolbar button {
        background-color: #090940;
        border: none;
        border-radius: 4px;
        color: white;
        padding: 2px;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        width: 50%;
    }

    #toolbar button:hover{
        color: #feb51e;

    }

    #toolbar button:active{
        transform: translateY(1px);

    }

    h3{
        margin: 0.5em;
    }


    @media screen and (max-width: 900px) {
      #toolbar{
        width: 50%;
      }

    }



</style>
