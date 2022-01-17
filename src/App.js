import React, { useEffect, useState } from 'react';
import { Modal, Board, BoardHeader } from './components';
import { INITIAL_BOARD_STATE, WINNING_COMBINATIONS } from './utils';
import './App.scss';

function App() {
  const [boardItems, setBoardItems] = useState(INITIAL_BOARD_STATE);
  const [hasFirstMove, setFirstMove] = useState(false);
  const [isGameOver, setGameOver] = useState(false);
  const [isPlayerXTurn, setPlayerXTurn] = useState(true);
  const [modalMessage, setModalMessage] = useState('');

  const getAllSelectedItems = () =>
    boardItems.filter((item) => !!item.isSelected).map((item) => item.index);

  const getPlayerIndexes = (player) => {
    return boardItems
      .filter(({ value }) => value === player)
      .map(({ index }) => index);
  };

  const checkWin = (playerSelectedIndexes) => {
    return WINNING_COMBINATIONS.some((combination) =>
      combination.every((comboIndex) =>
        playerSelectedIndexes.includes(comboIndex)
      )
    );
  };

  const onResetGame = () => {
    setBoardItems(INITIAL_BOARD_STATE);
    setGameOver(false);
    setPlayerXTurn(true);
  };

  const onBoardItemClick = (boardItem) => {
    setFirstMove(true);
    const { index } = boardItem;
    const isAlreadySelected = getAllSelectedItems().includes(index);

    if (isAlreadySelected) {
      return;
    }

    const updatedItems = boardItems.map((item) => {
      if (item.index === index) {
        return {
          ...item,
          isSelected: true,
          value: isPlayerXTurn ? 'x' : 'o',
        };
      }

      return item;
    });

    setBoardItems(updatedItems);
  };

  useEffect(() => {
    if (!hasFirstMove) {
      return;
    }

    const player = isPlayerXTurn ? 'x' : 'o';
    const playerSelectedItems = getPlayerIndexes(player);
    const hasWinner = checkWin(playerSelectedItems);
    const isDraw = getAllSelectedItems().length === 9 && !hasWinner;

    if (hasWinner) {
      setModalMessage(`Player ${player.toUpperCase()} Wins!`);
      setGameOver(true);
      return;
    }

    if (isDraw) {
      setModalMessage(`It's a draw!`);
      setGameOver(true);
      return;
    }

    setPlayerXTurn((turn) => !turn);
  }, [boardItems]);

  return (
    <div className="App">
      <BoardHeader player={isPlayerXTurn ? 'X' : 'O'} />
      <Board
        boardItems={boardItems}
        onBoardItemClick={onBoardItemClick}
        isPlayerXTurn={isPlayerXTurn}
      />
      {
        <Modal
          isVisible={isGameOver}
          title={modalMessage}
          onResetGame={onResetGame}
        />
      }
    </div>
  );
}

export default App;
