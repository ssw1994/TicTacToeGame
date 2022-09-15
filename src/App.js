import React, { useEffect, useState } from 'react';
import './style.css';
export function Box({ row, column, boxClick, text }) {
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

  useEffect(() => {
    //logic checking winner losing or game is finished
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

  const updateGameBoard = (row, column) => {};

  return (
    <div>
      {gameBoard.map((row, rowIndex) => {
        return (
          <div className="row">
            {row.map((value, columnIndex) => {
              return <Box />;
            })}
          </div>
        );
      })}
    </div>
  );
}
