import React from 'react';
import GameFrame1 from '../components/GameFrame1';
import GameBoard1 from '../components/GameBoard1';
import MainNavigation from '../components/MainNavigation';

const MultiPlayerPage = props => {
  return (
    <React.Fragment>
      <MainNavigation/>
      <GameFrame1
          type="Multi"
          status={props.status} 
          statusHandler = {props.startGameHandler} 
          keyControls = {props.keyControls} 
          showNext={props.showNext} 
          score = {props.score}
          level = {props.level}
          lines = {props.lines}
          gameOver = {props.gameOver} 
          enemy_gameOver = {props.enemy_gameOver} 
          enemy_status = {props.enemy_status}
        />
      </React.Fragment>
  );
}

export default MultiPlayerPage;