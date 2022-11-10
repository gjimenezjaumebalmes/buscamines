let matrix = [];
let rows = document.querySelector("tbody").children
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}

let minas = [];



function createTable (){
        let rows = document.getElementById("inputX").valueAsNumber;
        let columns = document.getElementById("inputY").valueAsNumber;
        

        for (let i = 0; i < columns; i++) {
            let filaActual = document.getElementById('table').insertRow(i);
            
            for (let j = 0; j < rows; j++) {
                let celda = filaActual.insertCell(j);

                celda.innerHTML = "&nbsp";
            }
        }

        rows = document.querySelector("tbody").children
        for (var i = 0; i < rows.length; i++) {
            matrix.push(rows[i].children);
        }
       // document.getElementById('table').style.border="1";
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


