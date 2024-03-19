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
makeGrid(2);