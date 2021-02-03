import React from 'react';
import './OrangeTetrimino.css';

const OrangeTetrimino = props => {

  const style = {
    marginLeft: props.left,
    marginTop: props.top
  };

  switch(props.orientation){
    
    case 'right': 
      return (
        <React.Fragment>
          <div style={style}>
            <div className="tt2-a rect orange">
            </div>
            <div className="tt2-b rect orange">
            </div>
            <div className="tt2-c rect orange">
            </div>
            <div className="tt2-d rect orange">
            </div>
          </div>
        </React.Fragment>
      );
  }
}

export default OrangeTetrimino;