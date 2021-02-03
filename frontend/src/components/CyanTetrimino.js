import React from 'react';
import './CyanTetrimino.css';

const CyanTetrimino = props => {

  const style = {
    marginLeft: props.left,
    marginTop: props.top
  };

  switch(props.orientation){

    case 'horizontal': 
      return (
        <React.Fragment>
          <div style={style}>
            <div className="tt0-a rect cyan">
            </div>
            <div className="tt0-b rect cyan">
            </div>
            <div className="tt0-c rect cyan">
            </div>
            <div className="tt0-d rect cyan">
            </div>
          </div>
        </React.Fragment>
      );
    case 'vertical':
      return (
        <React.Fragment>
          <div style={style}>
            <div className="tt8-a rect cyan">
            </div>
            <div className="tt8-b rect cyan">
            </div>
            <div className="tt8-c rect cyan">
            </div>
            <div className="tt8-d rect cyan">
            </div>
          </div>
        </React.Fragment>
      );
  }


}

export default CyanTetrimino;