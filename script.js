import java.util.Arrays
import java.util.Scanner

class Game {
    private val board = Array(3) { CharArray(3) { ' ' } }
    //layout of board
    private var currentPlayer = 'X'
    // x as first player

    fun startGame() {
        println("start")
        printBoard()
        //print the board

        var gameOver = false
            //false caus not over yet
        while (!gameOver) {
            //while until game over
            if (currentPlayer == '0') {

            }
            else { val (row, col) = getPlayerMove()

            //get coordinates of player
            if (isValidMove(row, col)) {
                //if move is valid
                board[row][col] = currentPlayer
                //update board by placing currentplayer (x, 0)
                printBoard()
                if (isWinningMove(row, col)) {
                    //checks if current move results in win
                    println("$currentPlayer wins")
                    gameOver = true
                    //if yes end loop
                } else if (isBoardFull()) {
                    //if not but board full
                    println("unentschiden")
                    gameOver = true
                } else {
                    //switch player
                    currentPlayer = if (currentPlayer == 'X') 'O' else 'X'
                }
            } else {
                println("Invalid move")
            }

        }
            }
    }


    private fun printBoard() {
        println("  0 1 2")
        //boRD LAYOUT
        for (i in board.indices) {
            //go over each outher indices of the board
            print("$i ")
            //prins brow index on each iteratiuion followed by spoace
            for (j in board[i].indices) {
                //same for each cell
                print("${board[i][j]} ")
                //same for each cell
            }
            println()
        }
    }

    private fun getPlayerMove(): Pair<Int, Int> {
        val input: String
        if (currentPlayer == 'X') {
            println("Player $currentPlayer turn. Enter choice ('0 1'): ")
            input = readLine().toString()

        } else {
            input = (0..2).random().toString() + ' ' + (0..2).random().toString()
        }
        val (row, col) = input?.split(" ") ?.map { it.toIntOrNull() ?: -1 } ?: listOf(-1, -1)

        //split input in 2, one for collum one for row.
        //?turn to number, or -1
        return row to col
    }

    private fun isValidMove(row: Int, col: Int): Boolean {
        return row in 0..2 && col in 0..2 && board[row][col] == ' '
        //checks if within bounds and empty
    }

    private fun isWinningMove(row: Int, col: Int): Boolean {
        return (board[row][0] == currentPlayer && board[row][1] == currentPlayer && board[row][2] == currentPlayer ||
                board[0][col] == currentPlayer && board[1][col] == currentPlayer && board[2][col] == currentPlayer ||
                board[0][0] == currentPlayer && board[1][1] == currentPlayer && board[2][2] == currentPlayer ||
                board[0][2] == currentPlayer && board[1][1] == currentPlayer && board[2][0] == currentPlayer)
        //logic

    }

    private fun isBoardFull(): Boolean {
        for (row in board) {
            for (cell in row) {
                if (cell == ' ') return false
                //checks empty
            }
        }
        return true
    }
}

fun main() {
    val game = Game()
    game.startGame()
}

