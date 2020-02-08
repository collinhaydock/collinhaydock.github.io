const board = document.querySelector(".board");
const resetButton = document.getElementById('reset');
const player1 = "X";
const player2 = "O";
const player = player1;
function addPiece(e) {
    console.log(e.target);
    e.target.innerHTML = player;
if (player === player1) player = player2; 
else player = player1;
}