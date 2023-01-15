
const container = document.querySelector(".container");

for (i = 0; i<4; i++)
{
    const div_row = document.createElement("div");    
    div_row.classList.add("row");
    div_row.setAttribute("id", `row${i+1}`);
    container.appendChild(div_row);

    for (j = 1; j<=4; j++)
    {
        const div_cell = document.createElement("div");
        div_cell.classList.add("cell");
        div_cell.setAttribute("id", `cell${i*4+j}`);
        div_row.appendChild(div_cell);
    }
}