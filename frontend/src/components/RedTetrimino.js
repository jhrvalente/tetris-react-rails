import React from 'react';
import './RedTetrimino.css';

const RedTetrimino = props => {

  const style = {
    marginLeft: props.left,
    marginTop: props.top
  };

    switch(props.orientation){
      case 'horizontal': 
        return (
          <React.Fragment>
            <div style={style}>
              <div className="tt7-a rect red">
              </div>
              <div className="tt7-b rect red">
              </div>
              <div className="tt7-c rect red">
              </div>
              <div className="tt7-d rect red">
              </div>
            </div>
          </React.Fragment>
        );
      case 'vertical':
        return (
          <React.Fragment>
            <div style={style}>
              <div className="tt15-a rect red">
              </div>
              <div className="tt15-b rect red">
              </div>
              <div className="tt15-c rect red">
              </div>
              <div className="tt15-d rect red">
              </div>
            </div>
          </React.Fragment>
        );
    }

}

export default RedTetrimino;