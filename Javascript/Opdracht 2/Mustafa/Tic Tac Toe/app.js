// Boter, kaas en eieren

function ticTacToe() {    
    // Registreer hier onClick events voor de negen knopjes:
    // 
    // Tips:
    // Voeg de css class 'btn-primary' toe voor speler O.
    // Voeg de css class 'btn-info' toe voor speler X.
    // Vergeet niet te controleren of er al eerder is geklikt op de button. Kijk naar de aanwezigheid van css class 'o' of 'x'.
    // Houd een interne administratie bij om te bepalen of er iemand heeft gewonnen.

    var turnX = true;
    var grid = [];
    var scoreX = document.getElementById('x_win');
    var scoreO = document.getElementById('o_win');
    // de negen knopjes in een array als cadeautje
    for (var i = 0; i < 9; ++i) {
        grid.push(document.getElementById(i + 1));
        
        function click(i) {
            return function () {
                var btn = grid[i];

                if (btn.innerHTML === '+') {
                    if (turnX) {
                        btn.classList.add('btn-primary');
                        btn.innerHTML = 'X';
                    } else {
                        btn.classList.add('btn-info');
                        btn.innerHTML = 'O';
                    }
                    turnX = !turnX;
                }

                var winner;
                if (hasWon('X')) {
                    scoreX.innerHTML = parseInt(scoreX.innerHTML) + 1;
                    winner = 'X';
                } else if (hasWon('O')) {
                    scoreO.innerHTML = parseInt(scoreO.innerHTML) + 1;
                    winner = 'O';
                }

                if (winner !== undefined) {
                    alert(winner + ' is the winner!');
                    reset();
                }
            };
        };

        grid[i].onclick = click(i);
    }

    //Registreer hier de onClick event voor de reset knop
    function reset() {
        turnX = true;
        for (var i = 0; i < 9; ++i) {
            grid[i].classList.remove('btn-primary');
            grid[i].classList.remove('btn-info');
            grid[i].innerHTML = '+';
        }
    }
    document.getElementById('reset').onclick = reset;

    function hasWon(sign) {
        return checkRows(sign) || checkCols(sign) || checkDiag(sign);
    }

    function checkRows(sign) {
        for (var r = 0; r < 3; ++r) {
            var count = 0;

            for (var c = 0; c < 3; ++c) {
                if (grid[r * 3 + c].innerHTML === sign) {
                    count++;
                }
            }

            if (count === 3) { return true;}
        }

        return false;
    }

    function checkCols(sign) {
        for (var c = 0; c < 3; ++c) {
            var count = 0;

            for (var r = 0; r < 3; ++r) {
                if (grid[r * 3 + c].innerHTML === sign) {
                    count++;
                }
            }

            if (count === 3) { return true; }
        }
        return false;
    }

    function checkDiag(sign) {
        var count1 = 0;
        var count2 = 0;

        for (var i = 0; i < 3; ++i) {
            if (grid[0 + i * 4].innerHTML === sign) { count1++; }
            if (grid[2 + i * 2].innerHTML === sign) { count2++; }
        }

        return count1 === 3 || count2 === 3;
    }
};