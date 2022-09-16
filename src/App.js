import React, { useEffect, useState } from 'react';
import './style.css';
export function Box(props) {
  const { row, column, boxClick, text } = props;
  return (
    <button className="box" onClick={() => boxClick(row, column)}>
      {text}
    </button>
  );
}

export default function App() {
  const players = {
    player_1: 'X',
    player_2: 'Y',
  };
  const [playerTurn, updatePlayerTurn] = useState(players.player_1);

  const [gameBoard, updateBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const checkGameFinished = () => {
    for (let i = 0; i < gameBoard.length; i++) {
      const rows = gameBoard[i];
      const isValidRow = rows.every((ele) => {
        return ele != '';
      });
      if (!isValidRow) {
        return false;
      }
    }
    return true;
  };

  const verticalCheck = () => {
    const [r1, r2, r3] = gameBoard;
    console.log(r1, r2, r3);
    for (let i = 0; i < 3; i++) {
      if (r1[i] && r2[i] && r3[i] && r1[i] === r2[i] && r2[i] === r3[i]) {
        return true;
      }
    }
    return false;
  };

  const horizontalCheck = () => {
    const [r1, r2, r3] = gameBoard;
    console.log(r1, r2, r3);
    for (let i = 0; i < 3; i++) {
      if (r1[i] && r2[i] && r3[i] && r1[i] === r2[i] && r2[i] === r3[i]) {
        return true;
      }
    }
    return false;
  };

  const checkWinner = () => {
    //vertical check
    if (verticalCheck()) {
      console.log('vertical winner');
    }
  };

  useEffect(() => {
    //logic checking winner losing or game is finished
    if (checkGameFinished()) {
      checkWinner();
    }

    //finished -> all items in the array are filled
    // winner - >
    // vertical
    // horizontal
    // diagonal check
    // Player 1 =  X
    // Player 2 = Y
  }, [gameBoard]);

  const togglePlayerTurn = () => {
    updatePlayerTurn(
      playerTurn === players.player_1 ? players.player_2 : players.player_1
    );
  };

  const updateGameBoard = (row, column) => {
    const grid = gameBoard;
    if (grid[row][column]) return;
    grid[row][column] = playerTurn;
    updateBoard([...grid]);
    togglePlayerTurn();
  };

  return (
    <div>
      {gameBoard.map((row, rowIndex) => {
        return (
          <div className="row">
            {row.map((value, columnIndex) => {
              return (
                <Box
                  boxClick={updateGameBoard}
                  row={rowIndex}
                  column={columnIndex}
                  text={value}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
