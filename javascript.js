const createGame = (player1, player2) => {
    let xPoints = 0;
    let oPoints = 0;
    this.player1 = player1;
    this.player2 = player2;
    let player1Marker = 'X';
    let player2Marker = 'O';
    let gameBoard = [];
    gameBoard.length = 8;

    const xMove = (index) => {
        gameBoard[index] = player1Marker;
        pointChecker();
    }

    const oMove = (index) => {
        gameBoard[index] = player2Marker;
        pointChecker();
    }

    const pointChecker = () => {

        // Player 1 Checks
        if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
            givePointsX();
            resetGameBoard();
        }

        if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
            givePointsX();
            resetGameBoard();
        }

        if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
            givePointsX();
            resetGameBoard();
        }

        if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
            givePointsX();
            resetGameBoard();
        }

        if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
            givePointsX();
            resetGameBoard();
        }

        if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
            givePointsX();
            resetGameBoard();
        }

        if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
            givePointsX();
            resetGameBoard();
        }

        if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
            givePointsX();
            resetGameBoard();
        }

        // Player 2 Checks
        if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
                givePointsO();
                resetGameBoard();
        }

        if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
            givePointsO();
            resetGameBoard();
        }

        if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
            givePointsO();
            resetGameBoard();
        }

        if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
            givePointsO();
            resetGameBoard();
        }

        if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
            givePointsO();
            resetGameBoard();
        }

        if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
            givePointsO();
            resetGameBoard();
        }

        if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
            givePointsO();
            resetGameBoard();
        }

        if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
            givePointsO();
            resetGameBoard();
        }
    }

    // REMOVE later
    const printGameBoard = () => {
        console.log(gameBoard);
    }

    const givePointsX = () => {
        xPoints++;
        if (xPoints >= 3) {
            endGame();
            resetGame();
        }
        else {
            return `${player1} has scored a point!\n\n${reportScore()}`;
        }
    }

    const givePointsO = () => {
        oPoints++;
        if (oPoints >= 3) {
            endGame();
            resetGame();
        }
        else {
            return `${player2} has scored a point!\n\n${reportScore()}`;
        }
    }

    const reportScore = () => {
        return `The score is currently: \n ${player1}: ${xPoints} | ${player2}: ${oPoints}`;
    }

    const endGame = () => {
        if (xPoints >= 3) {
            return console.log(`${player1} wins!\n\nFinal Score: ${player1}: ${xPoints} | ${player2}: ${oPoints}`);
        }
        if (oPoints >= 3) {
            return `${player2} wins!\n\nFinal Score: ${player1}: ${xPoints} | ${player2}: ${oPoints}`;
        }
    }

    const resetGameBoard = () => {
        gameBoard = [];
        gameBoard.length = 8
        return gameBoard;
    }

    const resetGame = () => {
        xPoints = 0;
        oPoints = 0;
    }

    return {
        givePointsX, 
        givePointsO, 
        reportScore,
        endGame,
        resetGame,
        xMove,
        oMove,
        printGameBoard,
        pointChecker,
    };
}

// DOM Manipulation
const utilitiesContainer = document.querySelector(".utilities-container");
const submitButton = document.querySelector(".submit-button");
const nameP1 = document.querySelector(".p1");
const nameP2 = document.querySelector(".p2");
const nameForm = document.querySelector(".name-form");

submitButton.addEventListener("click", () => {
    event.preventDefault();
    let player1 = nameP1.value.toString();
    let player2 = nameP2.value.toString();
    const realGame = createGame(player1, player2);
    nameForm.style.display = "none";
    const gameAnnouncer = document.createElement("p")
    gameAnnouncer.classList.add("announcer");
    gameAnnouncer.textContent = `${player1}'s turn!`;
    utilitiesContainer.appendChild(gameAnnouncer);
    console.log(realGame.reportScore());

    let turnChecker = true;

    const gameBoardGrid = document.querySelectorAll(".tile");
    let gameBoardArray = Array.from(gameBoardGrid);
    gameBoardArray.map((tile) => {
        tile.addEventListener("click", () => {
            if (turnChecker === true) {
                tile.textContent = "X";
                turnChecker = false;
                gameAnnouncer.textContent = `${player2}'s turn!`
            }
            else {
                tile.textContent = "O";
                turnChecker = true;
                gameAnnouncer.textContent = `${player1}'s turn!`
            }

        })
    })
})



// Test code
// const game = createGame("Mark", "Bob");

// game.xMove(0);
// game.xMove(3);
// game.printGameBoard();
// game.xMove(6);
// console.log(game.reportScore());

// game.xMove(0);
// game.xMove(3);
// game.printGameBoard();
// game.xMove(6);
// console.log(game.reportScore());

// game.xMove(0);
// game.xMove(3);
// game.printGameBoard();
// game.xMove(6);
// console.log(game.reportScore());

// game.xMove(0);
// game.xMove(3);
// game.printGameBoard();
// game.xMove(6);
// console.log(game.reportScore());

// game.oMove(0);
// game.oMove(1);
// game.printGameBoard();
// game.oMove(2);

// console.log(game.reportScore());
// game.printGameBoard();

