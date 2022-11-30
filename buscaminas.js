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
            celda.style.border = "1px solid grey";
            celda.style.width = "20px";
            celda.style.height = "20px";
            celda.style.textAlign = "center";
            celda.style.fontWeight = "bold";
            //celda.setAttribute("id", j + " " + i); // asginamos ID
            celda.setAttribute("id", j); // asginamos ID X
            celda.setAttribute("class", i); // asginamos CLASS Y
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
    // asignamos funcion CLICK para tbody celda
    tbody.addEventListener("click", minasAlrededor); 
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
    if (nMinas <= (rows*columns)){
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

// function paintNeighbours() {
//     let inputX = document.getElementById("inputX").valueAsNumber;
//     let inputY = document.getElementById("inputY").valueAsNumber;
//     //erase();
//         for (let i = inputY - 1; i <= inputY + 1; i++) { //  Y
//             for (let j = inputX - 1; j <= inputX + 1; j++) { //  X
//                 try {    
//                     if (i == inputY && j == inputX + 1) {
//                         for (let j = inputX; j <= inputX; j++) { // X
//                             matrix[i][j].style.backgroundColor = "white";
//                             // el test de prueba da 'incorrecto' ya que no está planteada con white en el test, pero funciona correctamente
//                         }
//                     }
//                     matrix[i][j].style.backgroundColor = "red";
//                 }
//                 catch {
//                 }
//             }
//     } 
// }

function countNeighbours(x, y) {
    let count = 0;
    for (let i = y - 1; i <= y + 1; i++) { // Y
        for (let j = x - 1; j <= x + 1; j++) { // X
            try {
                if (i==y && j==x) {
                }
                else if (matrix[i][j].style.backgroundColor == "red") {
                    count++;
                }
            }
            catch {
            }
        }
    }
    return count;
}


function minasAlrededor(event) { 
    if (event.target.tagName == "TD") {
        let inputX = parseInt(event.target.id);
        let inputY = parseInt(event.target.className);
    
        for (let i = inputY - 1; i <= inputY + 1; i++) { //  Y
            for (let j = inputX - 1; j <= inputX + 1; j++) { //  X
                try {    
                    count = countNeighbours(j, i);
                    matrix[i][j].innerText = count;
                }
                catch {
                }
            }
        }
    }
}
