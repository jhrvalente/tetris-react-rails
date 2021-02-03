import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import PieceTiles from './PieceTiles';
import ControlsInfo from './ControlsInfo';
import './GameBoard.css';



const GameBoard = props => {
  return (
    <div id="divMain">
      { !props.status && (
        <React.Fragment>
          <Logo/>
          <Menu type= { !props.gameover? "main":"playAgain" } statusHandler={props.statusHandler} />
          <PieceTiles />
        </React.Fragment>
      ) }
      { props.status && props.keyControls && <ControlsInfo/> }
    </div>
  );
}

export default GameBoard;