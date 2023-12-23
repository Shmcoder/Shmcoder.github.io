
var TicTacToe = {
    init: function() {
        this.symbols = ["X", "O"];
        this.squares = Array.from(document.querySelectorAll(".square"));
        this.turnIndicator = document.querySelector(".turnIndicator");
        this.button = document.querySelector(".newGame");
        this.board = document.querySelector(".board");
        this.winningSets = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ];
        this.addEventListeners();
        this.newGame();
    },

    addEventListeners: function() {
        var ttt = this;
        this.squares.forEach(function(x) {
            x.addEventListener("click",function() {
                ttt.play(this);
            }, false)
        })
        this.button.addEventListener("click", function() {
            ttt.newGame();
        }, false);
    },

    newGame: function() {
        this.activePlayer = 0;
        this.gameOver = false;
        this.squares.forEach(function (x) {
            x.classList.remove(TicTacToe.symbols[0]);
            x.classList.remove(TicTacToe.symbols[1]);
        })
        this.board.classList.remove("gameOver");
        this.setTurnIndicator();
    },

    setTurnIndicator: function() {
        this.turnIndicator.innerText = this.symbols[this.activePlayer] + "'s turn."
    },

    play: function(el) {
        if (!this.gameOver && el.classList.length == 1) {
            el.classList.add(this.symbols[this.activePlayer]);
            if (this.checkWin()) {
                this.turnIndicator.innerText = this.symbols[this.activePlayer] + " wins! 🥳";
                this.endGame();
            }
            else if (this.checkDraw()) {
                this.turnIndicator.innerText = "It's a draw❗";
                this.endGame();
            }
            else {
                this.activePlayer = 1 - this.activePlayer;
                this.setTurnIndicator();
            }
        }
    },

    checkWin: function() {
        var ttt = this;
        return this.winningSets.some(function (x) {
            return x.every(function(i) {
                return Array.from(ttt.squares[i].classList).indexOf(ttt.symbols[ttt.activePlayer]) > -1;
            })
        })
    },

    checkDraw: function() {
        
        return this.squares.every(function (x) {
            return x.classList.length > 1;
        })
    },

    endGame: function() {
        this.gameOver = true;
        this.board.classList.add("gameOver");
    }
}
TicTacToe.init();