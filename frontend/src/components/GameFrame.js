import React from 'react';
import BorderedGameBoard from './BorderedGameBoard';
import GameDetails from './GameDetails';
import './GameFrame.css';

const GameFrame = props => {
  return (
    <div id="divCenter">
      <BorderedGameBoard status={props.status} statusHandler={props.statusHandler} keyControls={props.keyControls} gameOver={props.gameOver}/>
      <GameDetails showNext = {props.showNext} score = {props.score} level = {props.level} lines = {props.lines}/>
    </div>
  );
}

export default GameFrame;