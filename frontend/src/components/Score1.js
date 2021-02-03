import React from 'react';
import './Score1.css';

const Score1 = props => {
  return (
    <div id="scoreDiv">
      <div id="scoreHeader">
        <p id="pscoreHeader">SCORE</p>
        <p id="scoreDisplay">{props.score}</p>
      </div>
    </div>
  );
};

export default Score1;