import React from 'react';
import './modal.scss';

export const Modal = ({
  isVisible,
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
