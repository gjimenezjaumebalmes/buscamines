let matrix = [];
let rows = document.querySelector("tbody").children
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}
let minas = [];

function createTable (){
    let rows = document.getElementById("inputX").valueAsNumber;
    let columns = document.getElementById("inputY").valueAsNumber;
    let body = document.getElementsByTagName("body")[0];
    let divv = document.createElement("div");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    

    for (let i = 0; i < columns; i++) {
        let filaActual = document.createElement("tr");
        
        for (let j = 0; j < rows; j++) {
            let celda = document.createElement("td");
            filaActual.appendChild(celda);
            celda.style.border = "1px solid";
            celda.style.width = "12%";
            celda.innerHTML = "&nbsp";
          //  celda.setAttribute("id",  j + " " + i);
        }
    tbody.appendChild(filaActual);
    }
    table.appendChild(tbody);
    divv.appendChild(table);
    body.appendChild(divv);


    rows = document.querySelector("tbody").children
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children);
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

        for (let i = 0; i < columns; i++) {
            minas[i] = [];
            for (let j = 0; j < rows; j++) {
                minas[i][j] = 0;
            }
        }

        while (minasRepartidas<nMinas){
            let fila = Math.floor(Math.random() * rows);
            let columna = Math.floor(Math.random() * columns);
           
            if (minas[fila][columna] == 0){
                minas[fila][columna] = 1;
                //contador para minas repartidas
                minasRepartidas++;
            }
        }

        for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if (minas[i][j] == 1) {
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
}


