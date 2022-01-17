import React from 'react';
import './modal.scss';

interface IModal {
  isVisible: boolean;
  title: string;
  onResetGame: React.MouseEventHandler<HTMLButtonElement>;
}

export const Modal: React.FC<IModal> = ({
  isVisible = false,
  title = 'Thanks for playing!',
  onResetGame,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal">
      <h2 className="modal-title">{title}</h2>
      <button onClick={onResetGame}>Reset Game</button>
    </div>
  );
};

export default Modal;
