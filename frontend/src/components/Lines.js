import React from 'react';
import './Lines.css';

const Lines = props => {
  return (
    <div id="linesDiv">
			<div id="linesHeader">
				<p id="plinesHeader">LINES</p>
				<p id="linesDisplay">{props.lines}</p>
			</div>
		</div>
  );
};

export default Lines;