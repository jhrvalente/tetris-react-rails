import React from 'react';
import './Lines1.css';

const Lines1 = props => {
  return (
    <div id="linesDiv">
			<div id="linesHeader">
				<p id="plinesHeader">LINES</p>
				<p id="linesDisplay">{props.lines}</p>
			</div>
		</div>
  );
};

export default Lines1;