/* 
 * filename: complexScript.js
 * content: A complex script that solves a Sudoku puzzle using backtracking algorithm.
 */

// Generates a Sudoku board
function generateSudokuBoard() {
    var board = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];
    
    return board;
}

// Checks if a value is valid to be placed on a board
function isValid(board, row, col, num) {
    // Check row
    for (var i = 0; i < 9; i++) {
        if (board[row][i] === num) {
            return false;
        }
    }
    
    // Check column
    for (var j = 0; j < 9; j++) {
        if (board[j][col] === num) {
            return false;
        }
    }
    
    // Check 3x3 subgrid
    var subgridRow = Math.floor(row / 3) * 3;
    var subgridCol = Math.floor(col / 3) * 3;
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            if (board[subgridRow + x][subgridCol + y] === num) {
                return false;
            }
        }
    }
    
    return true;
}

// Solves the Sudoku puzzle using backtracking
function solveSudoku(board) {
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (var num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board)) {
                            return true;
                        }
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

// Prints the Sudoku board
function printSudokuBoard(board) {
    for (var row = 0; row < 9; row++) {
        var rowString = "";
        for (var col = 0; col < 9; col++) {
            rowString += board[row][col] + " ";
        }
        console.log(rowString);
    }
}

// Main execution
function main() {
    var sudokuBoard = generateSudokuBoard();
    
    console.log("Initial Sudoku Board:");
    printSudokuBoard(sudokuBoard);
    
    if (solveSudoku(sudokuBoard)) {
        console.log("Solution to Sudoku Puzzle:");
        printSudokuBoard(sudokuBoard);
    } else {
        console.log("No solution found for Sudoku Puzzle.");
    }
}

// Run the main execution
main();