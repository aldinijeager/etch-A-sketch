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
draw();
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
        draw();
    });
})

function draw()
{
    const gridElement = document.querySelectorAll(".gridElement");
    let color = "blue";
    gridElement.forEach((element) =>
    {
        element.addEventListener("mouseover",(e) => 
        {
            const colorButtons = document.querySelectorAll(".color-option");

            colorButtons.forEach( (button) => 
            {
                button.addEventListener("click", () => 
                {
                    color = button.value;
                })
            });
            console.log(color);
            element.setAttribute("style",`backGround:${color}`);
        });
    });
}

function selectColor()
{
    
}
