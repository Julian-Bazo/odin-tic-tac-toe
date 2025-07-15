const createGame = (player1, player2) => {
    let xPoints = 0;
    let oPoints = 0;
    this.player1 = player1;
    this.player2 = player2;
    let player1Marker = "X";
    let player2Marker = "O";
    let gameBoard = [];
    gameBoard.length = 8;
    console.log(gameBoard);

    const xMove = (index) => {
        return gameBoard[index] = player1Marker;
    }

    const oMove = (index) => {
        return gameBoard[index] = player2Marker;
    }

    const printGameBoard = () => {
        console.log(gameBoard);
    }

    const givePointsX = () => {
        xPoints++;
        if (xPoints === 3) {
            return endGame()
        }
        else {
            return `${player1} has scored a point!\n\n${reportScore()}`;
        }
    }

    const givePointsO = () => {
        oPoints++;
        if (oPoints === 3) {
            return endGame()
        }
        else {
            return `${player2} has scored a point!\n\n${reportScore()}`;
        }
    }

    const reportScore = () => {
        return `The score is currently: \n ${player1}: ${xPoints} | ${player2}: ${oPoints}`;
    }

    const endGame = () => {
        if (xPoints === 3) {
            return `${player1} wins!\n\nFinal Score: ${player1}: ${xPoints} | ${player2}: ${oPoints}`;
        }
        if (oPoints === 3) {
            return `${player2} wins!\n\nFinal Score: ${player1}: ${xPoints} | ${player2}: ${oPoints}`;
        }
    }

    const resetGame = () => {
        xPoints = 0;
        oPoints = 0;
        gameBoard = [];
        gameBoard.length = 8;
    }

    return {
        givePointsX, 
        givePointsO, 
        reportScore,
        endGame,
        resetGame,
        xMove,
        oMove,
        printGameBoard
    };
}


// Test code
const game = createGame("Mark", "Bob");
console.log(game.givePointsO());
console.log(game.givePointsO());
console.log(game.givePointsX());
console.log(game.givePointsX());
console.log(game.givePointsO());
console.log(game.givePointsX());
game.resetGame();
console.log(game.reportScore());
console.log(game.givePointsO());
console.log(game.givePointsO());

console.log(game.xMove(3));
console.log(game.oMove(8));
console.log(game.printGameBoard());

game.resetGame();
console.log(game.printGameBoard());

