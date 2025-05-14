import styles from "./Board.module.css";
import Square from "../square/Square";
function Board({ board, onClick, isWinner }) {
  return (
    <div className={styles.gridContainer}>
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
          disabled={!!isWinner || value !== null}
        />
      ))}
    </div>
  );
}

export default Board;
