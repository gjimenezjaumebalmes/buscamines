let matrix = [];
let minas = [];

function createTable (){
    let rows = document.getElementById("inputX").valueAsNumber;
    let columns = document.getElementById("inputY").valueAsNumber;
    let div = document.getElementById("idDIV");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    // creamos la tabla
    for (let i = 0; i < columns; i++) {
        let fila = document.createElement("tr"); // se crea la FILA
        for (let j = 0; j < rows; j++) {
            let celda = document.createElement("td");  // se crea la CELDA
            celda.style.border = "1px solid";
            celda.style.width = "12%";
            celda.innerHTML = "&nbsp";
            celda.setAttribute("id",  j + " " + i); // asginamos ID
            fila.appendChild(celda);
        }
        tbody.appendChild(fila);
    }
    table.appendChild(tbody);
    div.appendChild(table);

    rows = document.querySelector("tbody").children
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children);
    }
    // asignamos funcion CLICK para celda
    tbody.addEventListener("click", coordenadaCelda); 
    // inicializamos la matriz todo a 0
    for (let i = 0; i < columns; i++) {
        minas[i] = [];
        for (let j = 0; j < rows; j++) {
            minas[i][j] = 0;
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

function inicialitzaMines() {
    let rows = document.getElementById("inputX").valueAsNumber;
    let columns = document.getElementById("inputY").valueAsNumber;
    let nMinas = document.getElementById("nMinas").valueAsNumber;
    let minasRepartidas = 0;
    // inicializamos la matriz todo a 0
    for (let i = 0; i < columns; i++) {
        minas[i] = [];
        for (let j = 0; j < rows; j++) {
            minas[i][j] = 0;
        }
    }
    // repartimos minas en matriz minas[]
    while (minasRepartidas < nMinas){
        let fila = Math.floor(Math.random() * rows);
        let columna = Math.floor(Math.random() * columns);
        
        if (minas[fila][columna] == 0){
            minas[fila][columna] = 1;
            //contador para minas repartidas
            minasRepartidas++;
        }
    }
    // pintamos las minas en la tabla matrix[]
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if (minas[i][j] == 1) {
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
}

function coordenadaCelda(event) {
    if (event.target.tagName == "TD") {
        console.log(event.target.id);
    }
    if (minas[event.target.id[2]][event.target.id[0]] == 1) {
        return console.log("HAY MINA");
    }
    else {
        return console.log("NO HAY MINA");
    }
}