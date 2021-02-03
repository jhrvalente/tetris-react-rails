import React from 'react';
import MainNavigation from '../components/MainNavigation';
import PlayersList from '../components/PlayersList';

const PlayersLobby = () => {

  const PLAYERS = [{
    id: "1",
    img: "",
    firstName: "João",
    lastName: "Valente",
    Rank: 1,
    XP: 100
  }, 
  {
    id: "2",
    img: "",
    firstName: "Pedro",
    lastName: "Valente",
    Rank: 3,
    XP: 300
  }];

  return (
    <React.Fragment>
      <MainNavigation/>
      <PlayersList players={PLAYERS}/>
    </React.Fragment>
  );
};

export default PlayersLobby;