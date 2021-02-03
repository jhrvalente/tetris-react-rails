import React from 'react';
import ImgPalace from './ImgPalace';
import Score from './Score';
import Level from './Level';
import Lines from './Lines';
import Next from './Next';
import './GameDetails.css';

const GameDetails = props => {
  return (
    <div id="divRight">
      <Next showNext = {props.showNext} />
      <ImgPalace/>
      <Score score = {props.score} />
      <Level level = {props.level} />
      <Lines lines = {props.lines} />
  	</div>
  );
};

export default GameDetails;