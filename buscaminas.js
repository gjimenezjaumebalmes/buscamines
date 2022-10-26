let matrix = [];
let rows = document.querySelector("tbody").children
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}

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
}

function matriuBinaria(matrix) {
    let matrix2 = []
    for (var i = 0; i < matrix.length; i++) {
        let rows = [];
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j].style.backgroundColor == "red") {
                rows.push(1);
                // matrix2[i][j].innerText = 1;
            }
            else {
                rows.push(0);
                // matrix2[i][j].innerText = 0;
            }
        }
        matrix2.push(rows); 
    }
   
    return matrix2;
}

function paintCheckerboard() {
    let rows = document.querySelector("tbody").children
    let matrix = []
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children)
    }
  //  erase();
    for (let i = 0; i < matrix.length; i++ ) { // filas
        if (i%2==0) {
            for (let j = 0; j < matrix[i].length; j+=2) { // columnas
                matrix[i][j].style.backgroundColor = "red";
            }
        }
        else {
            for (let j = 1; j < matrix[i].length; j+=2) { // columnas
                matrix[i][j].style.backgroundColor = "red";
            }
        }
    }
}

function paintAll() {
  //  erase();
    let rows = document.querySelector("tbody").children
    let matrix = []
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children)
    }
    for (let i = 0; i < matrix.length; i++ ) { // filas
        for (let j = 0; j < matrix[i].length; j++) { // columnas
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}

