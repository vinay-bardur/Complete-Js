let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let scoreX = document.querySelector("#score-x");
let scoreO = document.querySelector("#score-o");
let turn0 = true;
let gameActive = true;
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Add event listener to each box
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerText === "" && gameActive) {
            box.innerText = turn0 ? "X" : "O";
            turn0 = !turn0;
            checkWin();
        }
    });
});

// Reset the game
resetBtn.addEventListener("click", resetGame);

function checkWin() {
    let winner = null;
    winConditions.forEach((condition) => {
        const [a, b, c] = condition;
        if (
            boxes[a].innerText &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText
        ) {
            winner = boxes[a].innerText;
            gameActive = false;
            updateScores(winner);
        }
    });

    if (!winner && Array.from(boxes).every((box) => box.innerText)) {
        // Draw condition
        resetBoard();
    }
}

function updateScores(winner) {
    if (winner === "X") {
        scoreX.innerText = parseInt(scoreX.innerText) + 1;
    } else if (winner === "O") {
        scoreO.innerText = parseInt(scoreO.innerText) + 1;
    }
    resetBoard();
}

function resetBoard() {
    boxes.forEach((box) => {
        box.innerText = "";
    });
    gameActive = true;
    turn0 = true;
}

function resetGame() {
    resetBoard();
    scoreX.innerText = "0";
    scoreO.innerText = "0";
}
