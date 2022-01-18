import React from 'react';
import './boardItem.scss';

interface IBoardItem {
  className?: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const BoardItem: React.FC<IBoardItem> = ({
  className,
  onClick,
  isSelected,
}) => {
  const classNames = ['board-item-btn', isSelected && 'isSelected', className]
    .filter(Boolean)
    .join(' ');

  return <button className={classNames} onClick={onClick}></button>;
};
