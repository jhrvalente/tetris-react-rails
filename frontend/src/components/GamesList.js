import React from 'react';
import GameItem from './GameItem';

const GamesList = props => {
  return (
  <ul style={{width:"330px", height: "586px", backgroundColor: "white", marginLeft: "auto", marginRight: "auto", paddingTop: "10px", marginTop: "10px", listStyleType:"none", overflowY: "scroll"}}>
  {props.games.map(game => (
    <GameItem id={game.id} score={game.score}/>
  ))}
  </ul>
  );
};

export default GamesList;