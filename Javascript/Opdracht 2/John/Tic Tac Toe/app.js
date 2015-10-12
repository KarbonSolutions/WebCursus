// Boter, kaas en eieren

function ticTacToe() {    
    // Registreer hier onClick events voor de negen knopjes:
    // 
    // Tips:
    // Voeg de css class 'o' toe om een O te tonen. Evt. ook 'btn-primary'.
    // Voeg de css class 'x' toe om een X te tonen. Evt. ook 'btn-info'.
    // Vergeet niet te controleren of er al eerder is geklikt op de button. Kijk naar de aanwezigheid van css class 'o' of 'x'.
    // Houd een interne administratie bij om te bepalen of er iemand heeft gewonnen.

    // de negen knopjes in een array als cadeautje
    var grid = [];
    for (var i = 0; i < 9; ++i) {
        grid.push(document.getElementById(i + 1));

    }

    //grid[0].classList.add("x");
    //grid[0].innerHTML = "X";
    //grid[0].classList.add("o");
    //grid[0].innerHTML = "O";
    //Registreer hier de onClick event voor de reset knop    

    grid_clicked = [];
    for (var i = 0; i < 9; ++i) {
        grid_clicked.push(document.getElementById(i + 1));
    }
};

LastGamer = "O"
EndGame = false;

function ButtonClicked(i) {
    if (EndGame == false) {

        if (grid_clicked[i-1].innerHTML == "+")
        {
            if (LastGamer == "O") {
                LastGamer = "X"
                grid_clicked[i - 1].classList.add("btn-primary");
                grid_clicked[i - 1].innerHTML = "O";
            } else {
                LastGamer = "O"
                grid_clicked[i - 1].classList.add("btn-info");
                grid_clicked[i - 1].innerHTML = "X";
            };
        };

        var Winner=" ";
        Winner = CheckWinner();

        if (Winner != " ") {
            EndGame = true;
            if (Winner == "O") {
                document.getElementById("o_win").innerHTML++
            }
            if (Winner == "X") {
                document.getElementById("x_win").innerHTML++
            }
            document.getElementById("reset").innerHTML = "start again";
            alert("And the winner is: " + Winner)
            ButtonReset()
        }
    }

}

function ButtonReset() {
    for (var i = 0; i < 9; ++i) {
        grid_clicked.push(document.getElementById(i + 1));
        grid_clicked[i].classList.remove("btn-primary");
        grid_clicked[i].classList.remove("btn-info");
        grid_clicked[i].innerHTML = "+";
    }
    EndGame = false;
    document.getElementById("reset").innerHTML = "Restart"
}

function CheckWinner() {
    var Winner = " ";
    var GameID="X"
    Winner = CheckRows(GameID);
    if (Winner == " ") {
        Winner = CheckColumns(GameID);
    }
    if (Winner == " ") {
        Winner = CheckDiagonals(GameID);
    }
    if (Winner != " ") {
        return Winner
    }

    GameID = "O";
    Winner = CheckRows(GameID);
    if (Winner == " ") {
        Winner = CheckColumns(GameID);
    }
    if (Winner == " ") {
        Winner = CheckDiagonals(GameID);
    }
    return Winner;
}

function CheckRows(GameID) {
    var i = 0;
    for (var i = 0; i<7; i = i+3) {
        if ((grid_clicked[i].innerHTML == GameID) && (grid_clicked[i + 1].innerHTML == GameID) && (grid_clicked[i + 2].innerHTML == GameID)) {
            return GameID;
        }
    }
    return " ";
}
function CheckColumns(GameID) {
    var i = 0;

    for (i = 0; i<3; i++) {
        if ((grid_clicked[i].innerHTML == GameID) && (grid_clicked[i + 3].innerHTML == GameID) && (grid_clicked[i + 6].innerHTML == GameID)) {
            return GameID;
        }
    }
   return " ";
}

function CheckDiagonals(GameID) {
    var i = 0;

    if ((grid_clicked[0].innerHTML == GameID) && (grid_clicked[4].innerHTML == GameID) && (grid_clicked[8].innerHTML == GameID)) {
        return GameID;
    }
    if ((grid_clicked[2].innerHTML == GameID) && (grid_clicked[4].innerHTML == GameID) && (grid_clicked[6].innerHTML == GameID)) {
        return GameID;
    }
    return " ";
}