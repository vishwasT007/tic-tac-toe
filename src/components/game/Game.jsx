import { useState } from "react";
import Board from "../board/Board";
const GRID_SIZE = 3;
const INITIAL_BOARD = Array(GRID_SIZE * GRID_SIZE).fill(null);
const WINNING_LINES = [
  [0, 1, 2], // row
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // cols
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonal
  [2, 4, 6],
];

function Game() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [nextPlayerTurn, setNextPlayerTurn] = useState(true);
  const [isWinner, setIsWinner] = useState(null);

  function checkWinner(board) {
    for (let line of WINNING_LINES) {
      // destructure
      const [a, b, c] = line; // a = 0, b = 1, c = 2
      // 'X' && 'X' === 'O' (FALSE) && 'X' === 'null' (false) ----all become false
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    // Check if cell is already filled or already winner
    if (board[index] || isWinner) {
      console.log("Cell already taken! Ignoring click.");
      return; // Exit early
    }

    // Update the board
    const newBoard = [...board];
    newBoard[index] = nextPlayerTurn ? "X" : "O"; // jaise hi update kiya -> updated array setBoard ko Bhej diya

    // check for winning
    const winner = checkWinner(newBoard);
    console.log(winner);
    setBoard(newBoard);

    if (winner) {
      setIsWinner(winner);
    } else if (newBoard.every((cell) => cell !== null)) {
      setIsWinner("DRAW");
    } else {
      setNextPlayerTurn((previousState) => !previousState);
    }
  }

  function resetGame() {
    setBoard(INITIAL_BOARD);
    setNextPlayerTurn(true);
    setIsWinner(null);
  }

  return (
    <div>
      <Board board={board} onClick={handleClick} isWinner={isWinner} />
      <div>
        {isWinner === "DRAW" ? (
          <p>It is a draw</p>
        ) : isWinner ? (
          <p>Player {isWinner} wins</p>
        ) : (
          <p>Next Turn: {nextPlayerTurn ? "X" : "O"}</p>
        )}
      </div>
      {isWinner && <button onClick={resetGame}>Restart Game</button>}
    </div>
  );
}

export default Game;
