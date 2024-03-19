const canvas = document.querySelector("#canvas");


function makeGrid(size)
{
    for(let i=0; i<size; ++i)
    {
        const height = document.createElement("div");
        height.setAttribute("class","gridHeight")
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


makeGrid(20);

const size = document.querySelectorAll(".size-option");

size.forEach( (size) => 
{
    size.addEventListener("click", () =>
    {   
        const children = document.querySelectorAll(".gridHeight");
        children.forEach((child =>
        {
            canvas.removeChild(child);
        }))
        makeGrid(size.value);
    });
})

const gridElement = document.querySelectorAll(".gridElement");

gridElement.forEach((element) =>
{
    element.addEventListener("hover",)
});
