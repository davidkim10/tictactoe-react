import React from 'react';
import './boardHeader.scss';

interface IBoardHeader {
  player: string;
}

export const BoardHeader: React.FC<IBoardHeader> = ({ player }) => {
  return (
    <header className="board-header">
      <h1 className="board-header-title">Tic-Tac-Toe!</h1>
      <p className="board-header-subtitle">Your turn Player {player}</p>
    </header>
  );
};
