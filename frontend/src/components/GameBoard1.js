import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import PieceTiles from './PieceTiles';
import ControlsInfo from './ControlsInfo';
import Current from './Current';
import './GameBoard1.css';



const GameBoard1 = props => {

  const style = {
    marginLeft: props.left,
    marginTop: props.top
  };

  return (
    <div className="divMain" style={style}>
      { !props.status && (
        <React.Fragment>
          <Logo/>
          <Menu type= { !props.gameover? "main":"playAgain" } statusHandler={props.statusHandler} />
          <PieceTiles />
        </React.Fragment>
      ) }
      { props.status && props.keyControls && <ControlsInfo/> }
      {props.current && <Current current={props.current}/>}
    </div>
  );
}

export default GameBoard1;