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
    grid = [];
    for (var i = 0; i < 9; ++i) {
        grid.push(document.getElementById(i + 1));
    }
   
    //Registreer hier de onClick event voor de reset knop    
    document.getElementById('reset').onclick = function () {
        for (var i = 0; i < 9; ++i) {
            grid[i].innerHTML = '+';
            grid[i].classList.remove('btn-primary');
            grid[i].classList.remove('btn-info');
        };
    };
};
var butCap = 'o';
var clicked = [];
var int 
function Clickbut(i) {
    if (grid[i].innerHTML != '+') return;
    if (butCap=== 'o') {
        butCap = 'x';
        grid[i].classList.add('btn-primary');
    }else {
        butCap = 'o';
        grid[i].classList.add('btn-info');
    };
   
    grid[i].innerHTML = butCap;
     if (checkRows(butCap)) {
        alert(butCap + " is the winner")
        if (butCap ==='o') {
            document.getElementById('o_win').innerHTML++
        }else
        {
            document.getElementById('x_win').innerHTML++
        }
        
    } else {
        if (checkCols(butCap)) {
            alert(butCap + " is the winner")
            if (butCap === 'o') {
                document.getElementById('o_win').innerHTML++
            } else {
                document.getElementById('x_win').innerHTML++
            }
        };
    };
};
function checkRows(sign) {
    var int = 0;
    for (var i = 0; i < 3; i++) {
        if (grid[i].innerHTML === sign) {
            int = int + 1;
        }
    }
    if (int === 3) {
        return true
    }
    var int = 0;
    for (var i = 1; i < 6; i++) {
        if (grid[i].innerHTML === sign) {
            int = int + 1;
        }
    }
    if (int === 3) {
        return true
    }
    var int = 0;
    for (var i = 2; i < 9; i++) {
        if (grid[i].innerHTML === sign) {
            int = int + 1;
        }
    }
    if (int === 3) {
        return true
    }
    return false
};

function checkCols(sign) {
    var int = 0;
    for (var i = 0; i < 9; i+=3) {
        if (grid[i].innerHTML === sign) {
            int = int + 1;
        }
    }
    if (int === 3) {
        return true
    }
    var int = 0;
    for (var i = 1; i < 9; i += 3) {
        if (grid[i].innerHTML === sign) {
            int = int + 1;
        }
    }
    if (int === 3) {
        return true
    }
    var int = 0;
    for (var i = 2; i < 9; i += 3) {
        if (grid[i].innerHTML === sign) {
            int = int + 1;
        }
    }
    if (int === 3) {
        return true
    }
    return false
};
function checkDiagonaal(sign) {
    var int = 0;
    for (var i = 0; i < 9; i += 3) {
        if (grid[i].innerHTML === sign) {
            int = int + 1;
        }
    }
    if (int === 3) {
        return true
    }
    var int = 0;
    for (var i = 1; i < 9; i += 3) {
        if (grid[i].innerHTML === sign) {
            int = int + 1;
        }
    }
    if (int === 3) {
        return true
    }
    var int = 0;
    for (var i = 2; i < 9; i += 3) {
        if (grid[i].innerHTML === sign) {
            int = int + 1;
        }
    }
    if (int === 3) {
        return true
    }
    return false
};