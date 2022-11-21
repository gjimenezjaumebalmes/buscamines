var columna;
let matrix = [];

var body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "white"; //Color de fons de pantalla
//Creem la funció inicialitzaJoc
/*
Exercici 1

Crea una funció anomenada inicialitzaJoc associada amb un botó; de tal manera que quan premis el botó es creï una taula amb les dimensions especificades en els inputs.
*/
function inicialitzaJoc() {
    /*// Generem les variables x - y*/
    let x = document.getElementById("X").valueAsNumber;
    let y = document.getElementById("Y").valueAsNumber;
    /*Generem les variables tabla tblBody*/
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    /*Bucle for on generem la taula*/
    for (var i = 0; i < y; i++) {
        var fila = document.createElement("tr");
        for (var j = 0; j < x; j++) {
        /*Especifiquem els valors de la taula , color , mida de la cuadricula*/
            columna = document.createElement("TD");
            columna.textContent = ' ';
            columna.style.border = "2x solid"; //mida del cuadrat
            columna.style.color = "grey"; //color
            columna.style.width = "50px"; //alçada
            columna.style.height = "50px"; //allargada
            columna.setAttribute("id",  j + " " + i);

            fila.appendChild(columna);
        }
        tblBody.appendChild(fila);
    }

    tabla.appendChild(tblBody);

    body.appendChild(tabla);
    //Color de fons de la cuadricula
    tblBody.style.backgroundColor = "grey";
    //Posició de la cuadricula
    tabla.style.marginLeft = "220px";

    let rows = document.querySelector("tbody").children
    //Bucle generador
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children)
    }
    tblBody.addEventListener("click", coordenadas);
}

function paintAll() {
    for (let i =0; i < matrix.length ; i++) { // files
        for (let j = 0; j < matrix[i].length ;j++ ) { // columnes
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}


function paintCheckerboard() {

    for (let i = 0; i < matrix.length; i+=2) {
        for (let j = 0; j < matrix[i].length; j+=2) {

            matrix[i][j].style.backgroundColor = "red";
        }
    }
    for (let y = 1; y < matrix.length; y+=2) {
        for (let e = 1; e < matrix[y].length; e+=2) {
            matrix[y][e].style.backgroundColor = "red";
        }
    }
    let rows = document.querySelector("tbody").children

    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children)
    }

}

/*Exercici 2*/
function matriuBinaria(matrix) {
    var matrix2 = [];
    for (var i = 0; i < matrix.length; i++) {
        var fila = [];
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j].style.backgroundColor == "red") { //Pintem els 0 de vermell
                fila.push(1);
            } else {
                fila.push(0);
            }
        }
        matrix2.push(fila);
    }
    return matrix2;
}