import React from 'react';
import './boardItem.scss';

interface IBoardItem {
  className?: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export const BoardItem: React.FC<IBoardItem> = ({
  className,
  onClick,
  isSelected,
}) => {
  const classNames = ['board-item', isSelected && 'isSelected', className]
    .filter(Boolean)
    .join(' ');

  return <a className={classNames} onClick={onClick}></a>;
};
