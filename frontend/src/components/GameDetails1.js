import React from 'react';
import Next from './Next';
import ImgPalace1 from './ImgPalace1';
import Score1 from './Score1';
import Level1 from './Level1';
import Lines1 from './Lines1';
import './GameDetails1.css';

const GameDetails1 = props => {
  const style = {
    marginLeft: props.left
  };

  return (
    <div className="divRight" style={style}>
      {props.next && <Next next={props.next}/>}
      <ImgPalace1/>
      <Score1 score = {props.score} />
      <Level1 level = {props.level} />
      <Lines1 lines = {props.lines} />
  	</div>
  );
};

export default GameDetails1;