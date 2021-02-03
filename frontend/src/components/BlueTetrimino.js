import React from 'react';
import './BlueTetrimino.css';

const BlueTetrimino = props => {

  const style = {
    marginLeft: props.left,
    marginTop: props.top
  };
  
  switch(props.orientation){
    
    case 'left': 
      return (
        <React.Fragment>
          <div style={style}>
            <div className="tt3-a rect blue">
            </div>
            <div className="tt3-b rect blue">
            </div>
            <div className="tt3-c rect blue">
            </div>
            <div className="tt3-d rect blue">
            </div>
          </div>
        </React.Fragment>
      );
  }
}

export default BlueTetrimino;