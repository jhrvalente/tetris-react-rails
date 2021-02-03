import React from 'react';
import SideDrawer from '../components/SideDrawer';
import GameFrame from '../components/GameFrame';

const Home = props => {

  return (
    <React.Fragment>
      <SideDrawer/>
      <GameFrame 
        status={props.status} 
        statusHandler = {props.startGameHandler} 
        keyControls = {props.keyControls} 
        showNext={props.showNext} 
        score = {props.score}
        level = {props.level}
        lines = {props.lines}
        gameOver = {props.gameOver} 
      />
    </React.Fragment>
    
  );
}

export default Home;