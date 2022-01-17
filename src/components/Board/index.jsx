import React from 'react';
import { BoardItem } from '../BoardItem';
import './board.scss';

export const Board = ({
  boardItems = [],
  onBoardItemClick = () => null,
  isPlayerXTurn = false,
}) => {
  return (
    <div id="board" className={`board ${isPlayerXTurn ? 'x' : 'o'}`}>
      {boardItems?.map((item, key) => (
        <BoardItem
          key={key}
          isSelected={item.isSelected}
          className={item.value}
          onClick={() => onBoardItemClick(item)}
        />
      ))}
    </div>
  );
};
