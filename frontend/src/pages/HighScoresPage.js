import React from 'react';
import HighScoreList from '../components/HighScoreList';
import MainNavigation from '../components/MainNavigation';

const HighScoresPage = props => {

  const HIGHSCORES = [{
    firstname: "João",
    lastname: "Valente",
    value: "1000"
  },
  {
    firstname: "Tom",
    lastname: "Max",
    value: "900"
  },
  {
    firstname: "Manuel",
    lastname: "Heitor",
    value: "700"
  },
  {
    firstname: "Manuel",
    lastname: "Heitor",
    value: "700"
  },
  {
    firstname: "Manuel",
    lastname: "Heitor",
    value: "700"
  },
  {
    firstname: "Manuel",
    lastname: "Heitor",
    value: "700"
  },
  {
    firstname: "Manuel",
    lastname: "Heitor",
    value: "700"
  },
  {
    firstname: "Manuel",
    lastname: "Heitor",
    value: "700"
  },
  {
    firstname: "Manuel",
    lastname: "Heitor",
    value: "700"
  },
  {
    firstname: "Manuel",
    lastname: "Heitor",
    value: "700"
  },
  ];

  return (
    <React.Fragment>
      <MainNavigation/>
      <HighScoreList highscores={HIGHSCORES} top="7px"/> 
    </React.Fragment>
  );
}

export default HighScoresPage;