// Boter, kaas en eieren

function Player(name) {
    this.name = name;
    this.wins = 0;
}

function ticTacToe() {
    var grid = [];
    
    var player1 = new Player('O');
    var player2 = new Player('X');

    var currentPlayer = player1;

    for (var i = 0; i < 9; ++i) {
        var element = document
            .getElementById(i + 1);

        element.onclick = buttonClicked;            
        grid.push(element);        
    }

    function buttonClicked() {
        var state = this.innerHTML;
        if (state === '+') {
            this.innerHTML = currentPlayer.name;
            this.classList.add((currentPlayer === player1) ? 'btn-primary' : 'btn-info');

            currentPlayer = (currentPlayer === player1) ? player2 : player1;
            hasWon(player1); hasWon(player2);
        }
    }

    document.getElementById('reset').onclick = reset;
    function reset() {
        currentPlayer = player1;
        for (var i = 0; i < 9; ++i) {
            grid[i].innerHTML = '+';
            grid[i].classList.remove('btn-primary');
            grid[i].classList.remove('btn-info');
        }
    }
    
    function hasWon(player) {
        var start = 0;
        var playerName = player.name;

        for (var i = 0; i < 3; ++i) {
            start = i * 3;
            if (grid[start].innerHTML === playerName &&
                grid[start + 1].innerHTML  === playerName &&
                grid[start + 2].innerHTML === playerName) {
                gameOver();
            }

            start = i;
            if (grid[start].innerHTML === playerName &&
                grid[start + 3].innerHTML === playerName &&
                grid[start + 6].innerHTML === playerName) {
                gameOver();
            }
        }

        if (grid[0].innerHTML === playerName &&
            grid[4].innerHTML === playerName &&
            grid[8].innerHTML === playerName) {
            gameOver();
        }

        if (grid[2].innerHTML === playerName &&
            grid[4].innerHTML === playerName &&
            grid[6].innerHTML === playerName) {
            gameOver();
        }

        function gameOver() {
            alert(player.name + ' heeft gewonnen');

            player.wins++;
            updateStats();
            reset();
        }
    }    

    function updateStats() {
        document.getElementById('o_win').innerHTML = player1.wins;
        document.getElementById('x_win').innerHTML = player2.wins;
    }
};

