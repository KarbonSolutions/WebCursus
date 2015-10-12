// Boter, kaas en eieren
var grid = [];
var cnt = 0

function ticTacToe() {    
    // Registreer hier onClick events voor de negen knopjes:
    // 
    // Tips:
    // Voeg de css class 'o' toe om een O te tonen. Evt. ook 'btn-primary'.
    // Voeg de css class 'x' toe om een X te tonen. Evt. ook 'btn-info'.
    // Vergeet niet te controleren of er al eerder is geklikt op de button. Kijk naar de aanwezigheid van css class 'o' of 'x'.
    // Houd een interne administratie bij om te bepalen of er iemand heeft gewonnen.

    // de negen knopjes in een array als cadeautje
    for (var i = 0; i < 9; ++i) {
        grid.push(document.getElementById(i + 1));
    }
    //grid[0].classList.add("btn-primary");
    //grid[0].innerHTML= "X";

};   
   
function checkKey(button) {

    if (document.getElementById(button).innerHTML !== "+") {
        // Cell already used
        return;
    };

    if (cnt >= 8) {
        //game over
        alert("Game Over \n There are no winners")
        resetGame();
        return;
    }

    // adjust button value to grid value
    button--;

    if (cnt % 2 == 0) {
        var selectclass = "btn-primary";
        var Sign = "X";
    } else {
        var selectclass = "btn-info";
        var Sign = "O";
    }

    grid[button].classList.add(selectclass);
    grid[button].innerHTML = Sign ;

    cnt++;
    //recalc org button number
    button++;

    var answ = checkTicTacToe(button);

    if (answ) {
        // We have a winner
        console.log("We have a winner")
        var winner =0;
        if (Sign === "X"){
            winner = parseInt(document.getElementById("x_win").innerHTML) ;
            winner++
            document.getElementById("x_win").innerHTML = winner;
            
        } else {
            var winner = parseInt( document.getElementById("o_win").innerHTML) ;
            winner++
            document.getElementById("o_win").innerHTML = winner;
        }
        alert("WE HAVE A WINNER \n AND THE WINNER IS :" + Sign);
        resetGame();
    }


};
//Registreer hier de onClick event voor de reset knop  

function resetGame() {
    cnt = 0;
    for (var i = 0; i < 9;i++) {
        grid[i].classList.remove("btn-primary");
        grid[i].classList.remove("btn-info");
        grid[i].innerHTML = "+";
    }
}

function checkTicTacToe(button) {
    var nrow;
    var ncol;
    var ndiag;

    switch (button) {
        
        case 1:
        case 4:
        case 7:
            ncol = 1;        
            break;

        case 2:
        case 5:
        case 8:
            ncol = 2;        
            break;
        
        default:
            ncol = 3;
            break;
    }

    switch (button) {

        case 1:
        case 2:
        case 3:
            nrow = 1;        
            break;

        case 4:
        case 5:
        case 6:
            nrow = 2;        
            break;
        
        default :
            nrow = 3;
            break;
    }

    switch (button) {
        case 1:
        case 9:
            ndiag = 1;
            break;
        case 3:
        case 7:
            ndiag = 3;
            break;

        case 5:
            ndiag = 10;
            break;
        default:
            ndiag = -1;
            break;
    }


    var answ =  checkColumn(ncol);
    if (!answ) {
        // if not tictactoe then check row
        answ = checkRow(nrow);
    }
    if (!answ) {
        // if not tictactoe then check row
        answ = checkDiagn(ndiag);
    }

    return answ
}


function checkColumn(ncol) {
    ncol--;


    return (grid[ncol].innerHTML === grid[ncol+3].innerHTML && grid[ncol+3].innerHTML === grid[ncol+6].innerHTML && grid[ncol].innerHTML === grid[ncol+6].innerHTML);

}

function checkRow(nrow) {
    nrow--
    nrow *= 3 


    return (grid[nrow].innerHTML === grid[nrow + 1].innerHTML && grid[nrow + 1].innerHTML === grid[nrow + 2].innerHTML && grid[nrow].innerHTML === grid[nrow + 2].innerHTML);

}

function checkDiagn(diag) {


    if (diag < 0) {
        // no diag check
        return false;
    } else if (diag == 1) {
        // checks 1-> 9
        return (grid[0].innerHTML === grid[4].innerHTML && grid[4].innerHTML === grid[8].innerHTML && grid[0].innerHTML === grid[8].innerHTML);


    } else if (diag == 3) {
        //checks 3->7
        return (grid[2].innerHTML === grid[4].innerHTML && grid[4].innerHTML === grid[6].innerHTML && grid[2].innerHTML === grid[6].innerHTML);

    } else {
        // diag is 5, two checks 1-> 9 and 3->7
        var answ = (grid[0].innerHTML === grid[4].innerHTML && grid[4].innerHTML === grid[8].innerHTML && grid[0].innerHTML === grid[8].innerHTML);
        if (!answ) {
            answ =(grid[2].innerHTML === grid[4].innerHTML && grid[4].innerHTML === grid[6].innerHTML && grid[2].innerHTML === grid[6].innerHTML);
        }
        return answ;
    }

}
