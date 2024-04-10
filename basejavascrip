document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const resetButton = document.getElementById("resetButton");
    let currentPlayer = 'X';
    let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            const index = parseInt(cell.getAttribute("data-index"));
            if (gameBoard[index] === ' ' && !checkWinner()) {
                gameBoard[index] = currentPlayer;
                cell.textContent = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    resetButton.addEventListener("click", () => {
        gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        cells.forEach(cell => {
            cell.textContent = "";
        });
        currentPlayer = 'X';
    });

    function checkWinner() {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (gameBoard[a] !== ' ' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                alert(`${gameBoard[a]} wins!`);
                return true;
            }
        }

        if (!gameBoard.includes(' ')) {
            alert("Draw!");
            return true;
        }

        return false;
    }
});
