import React from 'react';
import './Level1.css';

const Level1 = props => {
  return (
    <div id="levelDiv">
      <div id="levelHeader">
        <p id="plevelHeader">LEVEL</p>
        <p id="levelDisplay">{props.level}</p>
      </div>
    </div>
  );
};

export default Level1;