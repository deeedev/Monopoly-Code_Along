    var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];

    const player1_Button = document.getElementById('player-1');
    const player2_Button = document.getElementById('player-2');


//click event listner to accomodate click on player-1 button

player1_Button.addEventListener('click', rollDice_1);

//array to store player's information & data
var player1 = ["ProGrad", 0, 1000];
var player2 = ["FacePrep", 0, 1000];

//function to create Dice//

function rollDice_1() {
    let position1 = Math.floor((Math.random() * 6) + 1);
    console.log("player one rolls", position1);
    changePosition_1(player1[1], position1);
}

//function to channge position of the player 1 once the dice will thrown//

function changePosition_1(old, currentPos) {
    var newPos = old + currentPos;
    player1[1] = newPos;
    console.log("New Position:", player1[1]);
    updateMoney_1(player1[1]);
}

//function to update the remaining money once the player reach to new position//

function updateMoney_1(p1) {
    var updateMoney = 0;
    if (p1 < board.length) {
        updateMoney = player1[2] - board[p1 - 1];
    }
    else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    console.log("Money Left:", updateMoney);
}

//to accomodate the click event of player to..

player2_Button.addEventListener('click', rollDice_2);

//roll dice function for player2 to generate number between 1-6

function rollDice_2() {
    let position2 = Math.floor((Math.random() * 6) + 1);
    console.log("player two position", position2)
    changePosition_2(player2[1], position2);
}

/*function to change the position of the player to which takes arguments as
current position and new position*/

function changePosition_2(old, currentPos) {
    let newPos = old + currentPos;
    player2[1] = newPos;
    console.log("New Pos:", player2[1]);
    updateMoney_2(player2[1]);
}

/*function to update the remaining mover for player2. It takes argument as updated
 position of the player 2*/

function updateMoney_2(p2) {
    var updateMoney = 0;
    if (p2 < board.length) {
        updateMoney = player2[2] - board[p2 - 1];
    }
    else {
        p2 = p2 % 15;
        updateMoney = player2[2] - board[p2 - 1];
    }
    console.log(updateMoney);
}