// Boter, kaas en eieren

var grid = [];
var who = false;
var btn_pressed = 0;
var winner = false;

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


    //Registreer hier de onClick event voor de reset knop    
};

function BtnClick(i) {
    if (who)
    {
        if (grid[i-1].innerHTML == "+") 
        {
            btn_pressed++;
            console.log(btn_pressed);

            grid[i - 1].classList.add("btn-primary");
            grid[i - 1].innerHTML = "X";
            who = false;    

            if (CheckTTT("X") )
            {
                winner = true;
                alert("X wins");

                var newval = document.getElementById("x_win").innerHTML;
                newval++;
                document.getElementById("x_win").innerHTML = newval;

                BtnReset();
            }
        }
    }
    else
    {
        if (grid[i-1].innerHTML == "+")
        {
            grid[i - 1].classList.add("btn-info");
            grid[i - 1].innerHTML = "O";
            who = true;
            btn_pressed++;
            console.log(btn_pressed);

            if (CheckTTT("O") )
            {
                winner = true;
                alert("O wins");

                var newval = document.getElementById("o_win").innerHTML;
                newval++;
                document.getElementById("o_win").innerHTML = newval;

                BtnReset();
            }
         }
    }

    if (winner == false && btn_pressed == 9)
    {
        alert("No winners");
        BtnReset();
    }
};

function BtnReset() {
    for (var i = 1; i <= 9; i++)
    {
        grid[i - 1].classList.remove("btn-primary");
        grid[i - 1].classList.remove("btn-info");
        grid[i - 1].innerHTML = "+";
    }

    winner = false;
    who = false;
    btn_pressed = 0;
}

function  CheckTTT( chk)
{
    if ((grid[0].innerHTML == chk && grid[1].innerHTML == chk && grid[2].innerHTML == chk) ||
        (grid[3].innerHTML == chk && grid[4].innerHTML == chk && grid[5].innerHTML == chk) ||
        (grid[6].innerHTML == chk && grid[7].innerHTML == chk && grid[8].innerHTML == chk) ||
        (grid[0].innerHTML == chk && grid[3].innerHTML == chk && grid[6].innerHTML == chk) ||
        (grid[1].innerHTML == chk && grid[4].innerHTML == chk && grid[7].innerHTML == chk) ||
        (grid[2].innerHTML == chk && grid[5].innerHTML == chk && grid[8].innerHTML == chk) ||
        (grid[0].innerHTML == chk && grid[4].innerHTML == chk && grid[8].innerHTML == chk) ||
        (grid[2].innerHTML == chk && grid[4].innerHTML == chk && grid[6].innerHTML == chk) 

        )   
    {
        return true;
    }
    else
    {
        return false;
    }
}



