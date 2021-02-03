import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PlayersLobby from './pages/PlayersLobby';
import MultiPlayerPage from './pages/MultiPlayerPage';
import SinglePlayerPage from './pages/SinglePlayerPage';
import UserGames from './pages/UserGames';
import HighScoresPage from './pages/HighScoresPage';
import Signup from './pages/Signup';
import DashboardPage from './pages/DashboardPage';
import './App.css';


const App = () => {

  const [status, setStatus] = useState(1);
  const [paused, setPaused] = useState(false);
  const [keyControls, setKeyControls] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [lines, setLines] = useState(0);

  //const PLAYER2 = {status: "1", gameover: false};

  /*const startGameHandler = () => {
    setStatus(1);
    setScore(0);
    setLevel(0);
    setLines(0);

    setShowNext(false);
};*/


  const quit = useCallback(() => {
    setPaused(false);
    setKeyControls(false);
    setStatus(0);
  },[]);

  const keyPressedHandler = useCallback((event) => {
    switch (event.keyCode){
      case 32: break;
      case 27: if(status){
                quit();
                }
                break;
      case 80: if(status){		
                  if(!paused){
                    setPaused(true);
                  }else{
                    setPaused(false);
                  }
                }
                break;
      case 72: if(status){
                  if(!paused){
                    setPaused(true);
                    setKeyControls(true);
                  } else {
                    setPaused(false);
                    setKeyControls(false);
                  }
                }
                break;
            
    }
  }, [status, paused, quit]);


  useEffect(() => {
    document.addEventListener("keydown", keyPressedHandler, false);

    return () => {
      document.removeEventListener("keydown", keyPressedHandler, false);
    };

  }, [keyPressedHandler]);


  return (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Login/>
      </Route>
      <Route path="/dashboard" exact>
        <DashboardPage/>
      </Route>
      <Route path="/signup" exact>
        <Signup/>
      </Route>
      <Route path="/lobby" exact>
        <PlayersLobby/>
      </Route>
      <Route path="/highscores" exact>
        <HighScoresPage/>
      </Route>
      <Route path="/:userId" exact>
      <Home
            //status={status} 
            //statusHandler = {startGameHandler} 
            keyControls = {keyControls} 
            //showNext={showNext} 
            //score = {score}
            //level = {level}
            //lines = {lines}
            //gameOver = {gameOver} 
        /> 
      </Route>
      <Route path="/:userId/games" exact>
      <UserGames /> 
      </Route>
      <Route path="/games/multi" exact>
      <MultiPlayerPage
            //status={status} 
            //statusHandler = {startGameHandler} 
            keyControls = {keyControls} 
            //showNext={showNext} 
            //score = {score}
            //level = {level}
            //lines = {lines}
            //gameOver = {gameOver} 
            //enemy_status = {PLAYER2.status}
            //enemy_gameover = {PLAYER2.gameover}
        /> 
      </Route>
      <Route path="/games/single" exact>
      <SinglePlayerPage
            //status={status} 
            //statusHandler = {startGameHandler} 
            keyControls = {keyControls} 
            //showNext={showNext} 
            //score = {score}
            //level = {level}
            //lines = {lines}
            //gameOver = {gameOver} 
        /> 
      </Route>
      <Route path="/games/multi/:id" exact>
      <MultiPlayerPage
            //status={status} 
            //statusHandler = {startGameHandler} 
            keyControls = {keyControls} 
            //showNext={showNext} 
            //score = {score}
            //level = {level}
            //lines = {lines}
            //gameOver = {gameOver} 
            //enemy_status = {PLAYER2.status}
            //enemy_gameover = {PLAYER2.gameover}
        /> 
      </Route>
      <Route path="/games/single/:id" exact>
      <SinglePlayerPage
            //status={status} 
            //statusHandler = {startGameHandler} 
            keyControls = {keyControls} 
            //showNext={showNext} 
            //score = {score}
            //level = {level}
            //lines = {lines}
            //gameOver = {gameOver} 
        /> 
      </Route>
      
    </Switch>
   </Router>
  );
}

export default App;
