let matrix = [];

//Creem la funció creataula
function creataula (){
    let rows = document.getElementById("inputX").valueAsNumber;
    let columns = document.getElementById("inputY").valueAsNumber;
    let div = document.getElementById("idDIV");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    /*Bucle for on generem la taula*/
    for (let i = 0; i < columns; i++) {
        let fila = document.createElement("tr"); // Es crea la fila
        for (let j = 0; j < rows; j++) {
            let celda = document.createElement("td");  // Es crea la cela
            celda.style.border = "2px solid";  //mida del cuadrat
            celda.style.width = "50px";
            celda.style.height = "50px";
            celda.style.color = "black"; //color
            celda.style.textAlign = "center";
            celda.style.fontWeight = "bold";
            celda.textContent = ' ';
            celda.style.color = "c7c7c7"; //color
            celda.setAttribute("id", j);
            celda.setAttribute("class", i);
            fila.appendChild(celda);
        }

        tbody.appendChild(fila);
    }

    table.appendChild(tbody);
    div.appendChild(table);
    //Color de fons de la cuadricula
    tbody.style.backgroundColor = "grey";
    //Posició de la cuadricula
    table.style.marginLeft = "220px";
    rows = document.querySelector("tbody").children
    //Bucle generador
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children);
    }

    tbody.addEventListener("click", minesdelcostat);

    for (let i = 0; i < columns; i++) {
        mines[i] = [];
        for (let j = 0; j < rows; j++) {
            mines[i][j] = 0;
        }
    }
}

function matriuBinaria(matrix) {
    let matrix2 = []
    for (var i = 0; i < matrix.length; i++) {
        let rows = [];
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j].style.backgroundColor == "red") {
                rows.push(1);
            }
            else {
                rows.push(0);
            }
        }
        matrix2.push(rows);
    }
    return matrix2;
}


function coordenadaCelda(event) {
    if (event.target.tagName == "TD") {
        console.log(event.target.id);
    }
    if (mines[event.target.id[2]][event.target.id[0]] == 1) {
        return console.log("HAY MINA");
    }
    else {
        return console.log("NO HAY MINA");
    }

}
