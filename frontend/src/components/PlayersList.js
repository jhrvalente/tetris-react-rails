import React from 'react';
import PlayerItem from './PlayerItem';

const PlayersList = props => {
  return (
  <ul style={{width:"705px", height: "586px", backgroundColor: "white", marginLeft: "auto", marginRight: "auto", paddingTop: "10px", marginTop: "10px", listStyleType:"none", overflowY: "scroll"}}>
  {props.players.map(player => (
    <PlayerItem firstName={player.firstName} lastName={player.lastName} rank={player.Rank} xp={player.XP}/>
  ))}
  </ul>
  );
};

export default PlayersList;