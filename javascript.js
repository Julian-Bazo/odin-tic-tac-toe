const createGame = (player1, player2) => {
    let xPoints = 0;
    let oPoints = 0;
    this.player1 = player1;
    this.player2 = player2;
    let player1Marker = "X";
    let player2Marker = "O";

    const givePointsX = () => {
        xPoints++;
        if (xPoints === 3) {
            return endGame()
        }
        else {
            return `${player1} has scored a point!`, reportScore();
        }
    }

    const givePointsO = () => {
        oPoints++;
        if (oPoints === 3) {
            return endGame()
        }
        else {
            return `${player2} has scored a point!` && reportScore();
        }
    }

    const reportScore = () => {
        return `The score is currently: \n ${player1}: ${xPoints} | ${player2}: ${oPoints}`;
    }

    const endGame = () => {
        if (xPoints === 3) {
            return `${player1} wins!\nFinal Score: ${player1}: ${xPoints} | ${player2}: ${oPoints}`;
        }
        if (oPoints === 3) {
            return `${player2} wins!\nFinal Score: ${player1}: ${xPoints} | ${player2}: ${oPoints}`;
        }
    }

    return {
        givePointsX, 
        givePointsO, 
        reportScore,
        endGame
    };
}

const game = createGame("Mark", "Bob");
console.log(game.givePointsO());
console.log(game.givePointsO());
console.log(game.givePointsX());
console.log(game.givePointsX());
console.log(game.givePointsO());
console.log(game.givePointsX());

