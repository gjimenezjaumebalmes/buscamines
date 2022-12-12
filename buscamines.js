
// Matrius
//----------------------------------------
// matriu per la tarde
let matrix = [];
// matriu per les mines
let mines = [];
// matriz per les marques de les banderas
let flags = [];
//----------------------------------------
// variable mines repartides
let minesdistributed = 0;
// Variables de temps
let intervaltemps;
let minutes;
let seconds;
//----------------------------------------
// Funció comptar temps
//----------------------------------------
function comptatemps() {
    let countDownDate = new Date();
    if (countDownDate) {
        countDownDate = new Date(countDownDate);
    } else {
        countDownDate = new Date();
        localStorage.setItem('startDate', countDownDate);
    }

    // Actualitzem el contador de temps
    intervaltemps = setInterval(function () {
        // Add date
        let now = new Date().getTime();
        // Agafem la diferencia entre el temps actual i el temps de quan hem fet clic al boto
        let distance = now - countDownDate.getTime();
        // Passem el temps de milisegons a minuts i segons
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Fiquem els minuts i segons dins el html
        document.getElementById("comptatemps").innerHTML = minutes + "m " + seconds + "s ";
    }, 1000);

}
//----------------------------------------
// Funció createtable " Crear taula "
//----------------------------------------
function createTable () {
    let rows = document.getElementById("inputX").valueAsNumber;
    let columns = document.getElementById("inputY").valueAsNumber;
    let div = document.getElementById("idDIV");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    document.getElementById("comptatemps").style.display = "inline";
    document.getElementById("tempsfinal").style.display = "none";
    //Resetegem el temps i el tornem a començar
    comptatemps();
    for (let i = 0; i < columns; i++) {
        let fila = document.createElement("tr"); // Es crea la fila
        for (let j = 0; j < rows; j++) {
            let celda = document.createElement("td");  // Es crea la cela
            // Style de la taula
            celda.style.border = "2px solid dimgray";
            celda.style.width = "40px";
            celda.style.height = "40px";
            celda.style.paddingLeft = "0";
            celda.style.paddingTop = "0";
            celda.style.paddingRight = "0";
            celda.style.paddingBottom = "0";
            celda.style.textAlign = "center";
            celda.style.fontWeight = "bold";
            celda.style.fontSize = "1.2em";
            celda.style.backgroundColor = "lightgrey";
            celda.setAttribute("id", j); // Assignem coordenades X
            celda.setAttribute("class", i); // Assignem coordenades Y
            celda.addEventListener("click", minesaround); // Assignem funció click
            celda.addEventListener("contextmenu", putflag); // Assignem posar bandera
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
    for (let i = 0; i < columns; i++) {
        mines[i] = [];
        for (let j = 0; j < rows; j++) {
            mines[i][j] = 0;
        }
    }
}

//----------------------------------------
// Funcio ficar mines
//----------------------------------------
function startmines() {
    let rows = document.getElementById("inputX").valueAsNumber; // Input X
    let columns = document.getElementById("inputY").valueAsNumber; // Input Y
    let numberMines = document.getElementById("numberMines").valueAsNumber; // Numero de mines
    minesdistributed = 0;
    if (numberMines <= (rows*columns)){
        for (let i = 0; i < columns; i++) {
            mines[i] = [];
            for (let j = 0; j < rows; j++) {
                mines[i][j] = 0;
            }
        }
        while (minesdistributed < numberMines) {
            let fila = Math.floor(Math.random() * rows);
            let columna = Math.floor(Math.random() * columns);
            if (mines[fila][columna] == 0){
                mines[fila][columna] = 1;
                minesdistributed++;
            }
        }
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                if (mines[i][j] == 1) {
                    matrix[i][j].appendChild(bomba());
                    matrix[i][j].style.backgroundColor = "red";
                }
            }
        }
        for (let i = 0; i < columns; i++) {
            flags[i] = [];
            for (let j = 0; j < rows; j++) {
                flags[i][j] = "";
            }
        }
    }
}

//----------------------------------------
// Funcio començar joc
//----------------------------------------
function startgame() {
    createTable ();
    let rows = document.getElementById("inputX").valueAsNumber;
    let columns = document.getElementById("inputY").valueAsNumber;
    let numberMines = document.getElementById("numberMines").valueAsNumber;
    minesdistributed = 0;
    if (numberMines <= (rows*columns)){
        for (let i = 0; i < columns; i++) {
            mines[i] = [];
            for (let j = 0; j < rows; j++) {
                mines[i][j] = 0;
            }
        }
        while (minesdistributed < numberMines){
            let fila = Math.floor(Math.random() * rows);
            let columna = Math.floor(Math.random() * columns);
            if (mines[fila][columna] == 0){
                mines[fila][columna] = 1;
                minesdistributed++;
            }
        }
        for (let i = 0; i < columns; i++) {
            flags[i] = [];
            for (let j = 0; j < rows; j++) {
                flags[i][j] = "";
            }
        }
    }
}
//----------------------------------------
// Funcio pintar
//----------------------------------------
function paintAllNeighbours() {
    let count;
    for (let i = 0; i < matrix.length; i++ ) {
        for (let j = 0; j < matrix[i].length; j++) {
            count = countNeighbours(j, i);
            if (mines[i][j] == 0){
                matrix[i][j].innerText = count;
            }
        }
    }
}
//----------------------------------------
// Funcio contar
//----------------------------------------
function countNeighbours(x, y) {
    let count = 0;
    for (let i = y - 1; i <= y + 1; i++) { // Y
        for (let j = x - 1; j <= x + 1; j++) { // X
            try {
                if (i==y && j==x) {
                }
                else if (mines[i][j] == 1) {
                    count++;
                }
            }
            catch {
            }
        }
    }
    return count;
}
//----------------------------------------
// Funcio mines al voltant
//----------------------------------------
function minesaround(event) {
    if (event.target.tagName == "TD") {
        let inputX = parseInt(event.target.id);
        let inputY = parseInt(event.target.className);

        for (let i = inputY - 1; i <= inputY + 1; i++) { //  Y
            for (let j = inputX - 1; j <= inputX + 1; j++) { //  X
                try {
                    count = countNeighbours(j, i);
                    if (flags[i][j] != "B") {
                        matrix[i][j].innerText = count;
                        matrix[i][j].style.backgroundColor = "whitesmoke";
                        casillasDestapadas++;
                        if (matrix[i][j].innerText == 1) {
                            matrix[i][j].style.color = "blue";
                        }
                        else if (matrix[i][j].innerText == 2) {
                            matrix[i][j].style.color = "green";
                        }
                        else if (matrix[i][j].innerText == 3) {
                            matrix[i][j].style.color = "red";
                        }
                        else if (matrix[i][j].innerText == 4 || matrix[i][j].innerText == 5 || matrix[i][j].innerText == 6
                            || matrix[i][j].innerText == 7 || matrix[i][j].innerText == 8) {
                            matrix[i][j].style.color = "darkred";
                        }
                    }
                }
                catch {
                }
            }
        }
    }
    win();
    lost();
}
// -----------------------------------------------------
// Funcio posar bandera
// -----------------------------------------------------
function putflag(event) {
    let flag = document.createElement('img');
    flag.src  = 'img/bandera.png';
    flag.style.width = "100%";
    flag.style.height = "100%";
    flag.style.display = "flex";
    if (event.target.tagName == "TD") {
        let inputX = parseInt(event.target.id);
        let inputY = parseInt(event.target.className);
        matrix[inputY][inputX].innerText = "";
        matrix[inputY][inputX].style.backgroundColor = "whitesmoke"
        matrix[inputY][inputX].removeEventListener("click", minesaround, false);
        matrix[inputY][inputX].removeEventListener("contextmenu", putflag, false);
        matrix[inputY][inputX].appendChild(flag);
        flags[inputY][inputX] = "B";
    }
}
//----------------------------------------
// Funcio bomba
//----------------------------------------
function bomba() {
    let bomba = document.createElement('img');
    bomba.src  = 'img/bomba.png';
    bomba.style.width = "100%";
    bomba.style.height = "100%";
    bomba.style.display = "flex";
    return bomba;
}
//----------------------------------------
// Funcio guanyar
//----------------------------------------
function win() {
    let win = document.getElementById("win");
    let finishGame = true;
    for (let i = 0; i < matrix.length; i++ ) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j].style.backgroundColor == "lightgrey") {
                finishGame = false;
                break;
            }
        }
    }
    if (finishGame) {
        win.style.display = "block";
        paintAllNeighbours();
        disableGameWin();
    }
}
//----------------------------------------
// Funcio Desactivar Joc
//----------------------------------------
function disableGameWin() {
    clearInterval(intervaltemps);
    let rows = document.getElementById("inputX").valueAsNumber;
    let columns = document.getElementById("inputY").valueAsNumber;
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if (mines[i][j] == 1) {
                matrix[i][j].style.backgroundColor = "red";
                matrix[i][j].style.borderColor = "darkgreen";
                matrix[i][j].innerText = "";
                matrix[i][j].removeEventListener("click", minesaround, false);
                matrix[i][j].removeEventListener("contextmenu", putflag, false);
                matrix[i][j].appendChild(bomba());
            }
            else {
                matrix[i][j].style.backgroundColor = "lightgreen";
                matrix[i][j].style.color = "darkgreen";
                matrix[i][j].style.borderColor = "darkgreen";
                matrix[i][j].removeEventListener("click", minesaround, false);
                matrix[i][j].removeEventListener("contextmenu", putflag, false);
            }
        }
    }
}

//----------------------------------------
// Funcio perdre
//----------------------------------------
function lost() {
    let inputX = parseInt(event.target.id);
    let inputY = parseInt(event.target.className);
    let lost = document.getElementById("lost");
    if (mines[inputY][inputX] == 1) {
        lost.style.display = "block";
        paintAllNeighbours();
        DisableGameLost();
    }
}

//----------------------------------------
// Funcio desactivar joc perdut
//----------------------------------------
function DisableGameLost() {
    clearInterval(intervaltemps);
    let rows = document.getElementById("inputX").valueAsNumber;
    let columns = document.getElementById("inputY").valueAsNumber;
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if (mines[i][j] == 1) {
                matrix[i][j].style.backgroundColor = "red";
                matrix[i][j].innerText = "";
                matrix[i][j].removeEventListener("click", minesaround, false);
                matrix[i][j].removeEventListener("contextmenu", putflag, false);
                matrix[i][j].appendChild(bomba());
            }
            else {
                matrix[i][j].style.backgroundColor = "black";
                matrix[i][j].style.color = "white";
                matrix[i][j].removeEventListener("click", minesaround, false);
                matrix[i][j].removeEventListener("contextmenu", putflag, false);
            }
        }

    }

}