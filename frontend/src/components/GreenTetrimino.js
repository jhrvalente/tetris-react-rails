import React from 'react';
import './GreenTetrimino.css';

const GreenTetrimino = props => {
  
  const style = {
    marginLeft: props.left,
    marginTop: props.top
  };

  switch(props.orientation){
    
    case 'vertical': 
      return (
        <React.Fragment>
          <div style={style}>
            <div className="tt5-a rect green">
            </div>
            <div className="tt5-b rect green">
            </div>
            <div className="tt5-c rect green">
            </div>
            <div className="tt5-d rect green">
            </div>
          </div>
        </React.Fragment>
      );
  }
}

export default GreenTetrimino;