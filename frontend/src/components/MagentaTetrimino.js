import React from 'react';
import './MagentaTetrimino.css';

const MagentaTetrimino = props => {

  const style = {
    marginLeft: props.left,
    marginTop: props.top
  };

  switch(props.orientation){
    
    case 'up': 
      return (
        <React.Fragment>
          <div style={style}>
            <div className="tt1-a rect magenta">
            </div>
            <div className="tt1-b rect magenta">
            </div>
            <div className="tt1-c rect magenta">
            </div>
            <div className="tt1-d rect magenta">
            </div>
          </div>
        </React.Fragment>
      );
    case 'right':
      return (
        <React.Fragment>
          <div style={style}>
            <div className="tt6-a rect magenta">
            </div>
            <div className="tt6-b rect magenta">
            </div>
            <div className="tt6-c rect magenta">
            </div>
            <div className="tt6-d rect magenta">
            </div>
          </div>
        </React.Fragment>
      );
  }
}

export default MagentaTetrimino;