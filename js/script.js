const canvas = document.querySelector("#canvas");


function makeGrid(size)
{
    for(let i=0; i<size; ++i)
    {
        const height = document.createElement("div");
        makeRow(size,height);
        canvas.appendChild(height);
    }
}

function makeRow(length, container)
{
    for(let i=0; i<length; ++i)
    {
        const line = document.createElement("div");
        line.setAttribute("class","gridElement");
        container.appendChild(line);
    }
}

function dynamicSize()
{
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    const elementSize = screenWidth / size - 20;

    const elements = document.querySelectorAll(".gridElement");
    elements.forEach((elem) => 
    {
        elem.setAttribute("style",`width:${elementSize}px; height: ${elementSize}px;`)
    })
}
let size = 5

makeGrid(size);
dynamicSize();

window.addEventListener("resize", () =>
{
    dynamicSize();
})
