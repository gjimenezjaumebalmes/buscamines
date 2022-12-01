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
