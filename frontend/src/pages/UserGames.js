import React from 'react';
import MainNavigation from '../components/MainNavigation';
import GamesList from '../components/GamesList';

const UserGames = () => {

  const GAMES = [{
    id: "1",
    score: "100"
  }, 
  {
    id: "3",
    score: "400"
  }];

  return (
    <React.Fragment>
      <MainNavigation/>
      <GamesList games={GAMES}/>
    </React.Fragment>
  );
};

export default UserGames;