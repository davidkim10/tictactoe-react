import React from 'react';
import './boardHeader.scss';

export const BoardHeader = ({ player }) => {
  return (
    <div className="board-header">
      <h1 className="board-header-title">Tic Tac Toe!</h1>
      <p className="board-header-subtitle">Your turn Player {player}</p>
    </div>
  );
};
