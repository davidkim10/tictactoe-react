import React from 'react';
import './boardItem.scss';

export const BoardItem = ({ className, onClick, isSelected }) => {
  const classNames = ['board-item', isSelected && 'isSelected', className]
    .filter(Boolean)
    .join(' ');

  return <div className={classNames} onClick={onClick}></div>;
};
