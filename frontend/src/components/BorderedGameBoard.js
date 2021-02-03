import React from 'react';
import GameBoard from './GameBoard';
import './BorderedGameBoard.css';

const BorderedGameBoard = props => {
  return (
    <div id="divLeft">
      <GameBoard status={props.status} statusHandler={props.statusHandler} keyControls={props.keyControls} gameOver={props.gameOver}/>
    </div>
  );
}

export default BorderedGameBoard;