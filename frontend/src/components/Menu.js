import React from 'react';
import './Menu.css';

const Menu = props => {

  return (
    <React.Fragment>
      <button id = "btnPlay" className="mainBtn" type="button" onClick={props.statusHandler}>SINGLE PLAYER</button>
      <button className="mainBtn" type="button">MULTIPLAYER</button> 
    </React.Fragment>
  );
}

export default Menu;