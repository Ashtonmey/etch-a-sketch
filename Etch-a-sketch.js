
// add event listener to the button

const button = document.querySelector("button");
button.addEventListener('click', setGridSize);

// set the default grid size to 4

gridSize = 4;

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
        div_cell.classList.add("gird-element");
        div_cell.setAttribute("id", `cell${i*4+j}`);
        div_cell.setAttribute(`style`, `height: ${800/gridSize}px;`);
        div_row.appendChild(div_cell);
        div_cell.addEventListener('mouseover', function(e) {
        this.classList.add("seen");
        });
    }
}
return;
}

function setGridSize()
{
    gridSize = prompt("Enter the grid size required.");

    const container = document.querySelector(".container");
    container.textContent="";

    buildGrid();
    return;
}