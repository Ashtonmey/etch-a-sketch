
// add event listener to the button

const button = document.querySelector("button");
button.addEventListener('click', setGridSize);

// set the default grid size to 4

gridSize = 4;
saturation = 100;

// call function to build the initial grid of the default size

buildGrid();

// build grid fuction

function buildGrid()
{

const container = document.querySelector(".container");

for (i = 0; i<gridSize; i++)
{
    const div_row = document.createElement("div");    
    div_row.classList.add("row");
    div_row.classList.add("grid-element");
    div_row.setAttribute("id", `row${i+1}`);
    container.appendChild(div_row);

    for (j = 1; j<=gridSize; j++)
    {
        const div_cell = document.createElement("div");
        div_cell.classList.add("cell");
        div_cell.classList.add("grid-element");
        div_cell.setAttribute("id", `cell${i*4+j}`);        
        div_cell.setAttribute(`style`, `height: ${800/gridSize}px; background-color: hsl(${Math.round(Math.random()*360)},100%,90%);`);                    
        div_row.appendChild(div_cell);
        div_cell.addEventListener('mouseover', function(e) {        
        let cellColor = this.style.backgroundColor;
        this.setAttribute(`style`, `height: ${800/gridSize}px; background-color: ${changeColor(cellColor)}`);
        });
    }
}
return;
}



function setGridSize()
{
    gridSize = prompt("Enter the grid size required.");
    if (gridSize > 100) { gridSize = 100;}

    const container = document.querySelector(".container");
    container.textContent="";

    buildGrid();
    return;
}

function changeColor (cellColor)
{
    console.log(cellColor);
    let colors = cellColor.replace("rgb(","").replace(")","").split(',');
    console.log(colors[2]);
    let r = +colors[0]-60;
    let g = +colors[1]-60;
    let b = +colors[2]-60;
    cellColor = `rgb(${r},${g},${b})`;
    return cellColor;
}