import React from 'react';
import './YellowTetrimino.css';

const YellowTetrimino = props => {
  
  const style = {
    marginLeft: props.left,
    marginTop: props.top
  };

    return (
      <React.Fragment>
        <div style={style}>
          <div className="tt4-a rect yellow">
          </div>
          <div className="tt4-b rect yellow">
          </div>
          <div className="tt4-c rect yellow">
          </div>
          <div className="tt4-d rect yellow">
          </div>
        </div>
      </React.Fragment>
    );

}

export default YellowTetrimino;