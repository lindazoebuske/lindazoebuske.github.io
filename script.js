<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe Spiel</title>
    <style>
        .cell {
            width: 100px;
            height: 100px;
            display: inline-block;
            border: 1px solid black;
            font-size: 48px;
            text-align: center;
            line-height: 100px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Tic Tac Toe Spiel</h1>
    <div id="board-container"></div>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const boardContainer = document.getElementById('board-container');
            const ROWS = 3;
            const COLS = 3;
            let currentPlayer = 'X';
            let board = Array.from({ length: ROWS }, () => Array(COLS).fill(' '));

            // Funktion zum Rendern des Spielfelds
            function renderBoard() {
                boardContainer.innerHTML = '';
                for (let i = 0; i < ROWS; i++) {
                    for (let j = 0; j < COLS; j++) {
                        const cell = document.createElement('div');
                        cell.className = 'cell';
                        cell.dataset.row = i;
                        cell.dataset.col = j;
                        cell.textContent = board[i][j];
                        cell.addEventListener('click', handleCellClick);
                        boardContainer.appendChild(cell);
                    }
                    boardContainer.appendChild(document.createElement('br'));
                }
            }

            // Funktion zum Behandeln von Klicks auf Zellen
            function handleCellClick(event) {
                const row = parseInt(event.target.dataset.row);
                const col = parseInt(event.target.dataset.col);
                if (board[row][col] === ' ') {
                    board[row][col] = currentPlayer;
                    renderBoard();
                    if (checkWin(row, col)) {
                        alert(currentPlayer + ' wins!');
                        resetGame();
                    } else if (checkDraw()) {
                        alert('Unentschieden!');
                        resetGame();
                    } else {
                        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    }
                }
            }

            // Funktion zum Überprüfen auf einen Gewinn
            function checkWin(row, col) {
                const symbol = board[row][col];
                // Überprüfen Sie horizontal, vertikal und diagonal
                return (
                    checkLine(row, col, 0, 1, symbol) || // horizontal
                    checkLine(row, col, 1, 0, symbol) || // vertikal
                    checkLine(row, col, 1, 1, symbol) || // diagonal
                    checkLine(row, col, 1, -1, symbol)   // diagonal
                );
            }

            // Hilfsfunktion zum Überprüfen einer Linie (horizontal, vertikal, diagonal)
            function checkLine(row, col, dRow, dCol, symbol) {
                for (let i = 0; i < 3; i++) {
                    const r = row + i * dRow;
                    const c = col + i * dCol;
                    if (r < 0 || r >= ROWS || c < 0 || c >= COLS || board[r][c] !== symbol) {
                        return false;
                    }
                }
                return true;
            }

            // Funktion zum Überprüfen auf ein Unentschieden
            function checkDraw() {
                for (let row of board) {
                    for (let cell of row) {
                        if (cell === ' ') {
                            return false;
                        }
                    }
                }
                return true;
            }

            // Funktion zum Zurücksetzen des Spiels
            function resetGame() {
                currentPlayer = 'X';
                board = Array.from({ length: ROWS }, () => Array(COLS).fill(' '));
                renderBoard();
            }

            // Spiel initialisieren
            renderBoard();
        });
    </script>
</body>
</html>

