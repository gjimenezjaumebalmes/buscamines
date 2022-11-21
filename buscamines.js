var columna;
let matrix = [];

var body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "white"; //Color de fons de pantalla
//Creem la funció creataula
function CreaTaula() {
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

let mina = [];

//Creem la funció inicialitzaMines
function inicialitzaMines() {
    let numMines = 0;
    let nMines = document.getElementById("NumeroMines").valueAsNumber;
    let X = document.getElementById("X").valueAsNumber;
    let Y = document.getElementById("Y").valueAsNumber;
    for (let a = 0; a < X; a++) {
        mina[a] = [];
        for (let b = 0; b < Y; b++) {
            mina[a][b] = 0;
        }
    }
    //Bucle while que genera aleatoriament la posició de les mines.
    while (numMines < nMines){
        let fila = Math.floor(Math.random() * Y);
        let columna = Math.floor(Math.random() * X);
        if (mina[fila][columna] == 0){
            mina[fila][columna] = 1;
            numMines++;
        }
    }
    for (let a = 0; a < X; a++) {
        for (let b = 0; b < Y; b++) {
            if (mina[a][b] == 1) {
                matrix[a][b].style.backgroundColor = "red"; //Color de les mines
            }
        }
    }

}
//Generem la funcio coordenades
function coordenadas(event) {
    let x = event.target.id.split(' ')[1];
    let y = event.target.id.split(' ')[0];

    if (event.target.tagName == "TD") {
        console.log(event.target.id);
    }
    if (mina[x][y] == 1) {
        return alert("MINA");
    }
    else {
        return console.log("SALVAT");
    }
}
