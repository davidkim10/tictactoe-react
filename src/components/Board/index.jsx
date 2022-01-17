import React, { useEffect, useState } from 'react';
import { INITIAL_BOARD_STATE, WINNING_COMBINATIONS } from '../../utils';
import { BoardHeader } from '../BoardHeader';
import { BoardItem } from '../BoardItem';
import { Modal } from '../Modal';
import './board.scss';

export const Board = () => {
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
    <>
      <BoardHeader player={isPlayerXTurn ? 'X' : 'O'} />
      <main id="board" className={`board ${isPlayerXTurn ? 'x' : 'o'}`}>
        {boardItems?.map((item, key) => (
          <BoardItem
            key={key}
            isSelected={item.isSelected}
            className={item.value}
            onClick={() => onBoardItemClick(item)}
          />
        ))}
      </main>
      <Modal
        isVisible={isGameOver}
        title={modalMessage}
        onResetGame={onResetGame}
      />
    </>
  );
};
