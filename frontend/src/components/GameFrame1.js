import React from 'react';
import GameBoard1 from './GameBoard1';
import GameDetails1 from './GameDetails1';
import './GameFrame1.css';

const GameFrame1 = props => {
  return (
    <div id="divCenter" style={{width: props.type=="Single"? "468px": "930px"}}>
      <GameBoard1 left="10px" top="-2px" status={props.gamedetails.status} //{props.status} 
      statusHandler={props.statusHandler} keyControls={props.keyControls} current = {props.current}
      //gameOver={props.gameOver}
      />
      <GameDetails1 left="305px"  
      score = {props.gamedetails.score} 
      level = {props.gamedetails.level} 
      lines = {props.gamedetails.completed_lines} 
      next = {props.next}
      />
      {props.type=="Multi" &&  (
      <React.Fragment>
        <GameBoard1 left="470px" top="-1132px" current = {props.current}/> //status=props.enemy_status gameOver=props.enemy_gameOver
        <GameDetails1 left="765px" //showNext = props.showNext 
        score = {props.gamedetails.score} //props.score
        level = {props.gamedetails.level} //props.level
        lines = {props.gamedetails.completed_lines} //props.lines
        next = {props.next}
        />
      </React.Fragment>
      )
      }
    </div>
  );
}

export default GameFrame1;