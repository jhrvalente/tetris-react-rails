import React from 'react';
import './Score.css';

const Score = props => {
  return (
    <div id="scoreDiv">
      <div id="scoreHeader">
        <p id="pscoreHeader">SCORE</p>
        <p id="scoreDisplay">{props.score}</p>
      </div>
    </div>
  );
};

export default Score;