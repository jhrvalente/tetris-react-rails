import React, { useState, useEffect } from 'react';
import GameFrame1 from '../components/GameFrame1';
import MainNavigation from '../components/MainNavigation';

const SinglePlayerPage = props => {
  const [gamedetails, setGamedetails] = useState({id: null, status: 0, level: 0, levelUp: false, lines_lvl_ant: 0, paused: false, n_lines: 20, n_cols: 10, n_levels: 29, completed_lines: 0, score: 0, current_piece_id: null, next_piece_id: null, speed: []});
  const [currentpiecedetails, setCurrentPiecedetails] = useState(null);
  const [nextpiecedetails, setNextPiecedetails] = useState({type: 15});


  const createGame = async () => {
    //const response = 
    try{
     await fetch("http://localhost:5000/api/games/new")
                              .then(response => response.json())
                              .then(data => setGamedetails(data));
    } catch (error) {
      console.log(error);
    }
  //return response;
  }

  const fetchGameDetails = async () => {
    //const response = 
    try {
    console.log(gamedetails);
    await fetch(`http://localhost:5000/api/games/${gamedetails.id}/gamedetails`)
                                .then(response => response.json())
                                .then(data => setGamedetails(data));
                                
    } catch (error){
      console.log(error);
    }
  //return response;
  }

  const fetchPieceDetails = async () => {
    //const response = 
    try {
    await fetch(`http://localhost:5000/api/games/${gamedetails.id}/piecedetails`)
                                .then(response => response.json())
                                .then(data => {
                                  setCurrentPiecedetails(data.current);
                                  setNextPiecedetails(data.next);
                                });
    } catch (error){
      console.log(error);
    }

  //return response;
  }
  
  const startGame = async () => {
    await fetch(`http://localhost:5000/api/games/${gamedetails.id}/start`)
  }

  //useEffect(() => {
    const startGameHandler = () => {
      /*gamedetails.status = 1
      setGamedetails(gamedetails);*/
      //const newgame_res = 
      createGame().then(() => setInterval(() => {
        fetchGameDetails();
        //fetchPieceDetails()
        }, 20));
      //if(newgame_res) {//const gamedetails_res = 
      /*setInterval(() => {
        fetchGameDetails();
        fetchPieceDetails()
        }, 20);//}*/
      //if(gamedetails_res) const piecedetails_res = 
      //setInterval(() => fetchPieceDetails(), 20);
      //startGame();
    }
  //}, []);


  

  return (
    <React.Fragment>
      <MainNavigation />
        <GameFrame1
          type="Single"
          //status={props.status} 
          statusHandler = {startGameHandler} 
          keyControls = {props.keyControls} 
          //showNext={props.showNext} 
          //score = {score}
          //level = {props.level}
          //lines = {props.lines}
          //gameOver = {props.gameOver} 
          gamedetails = {gamedetails}
          current = {currentpiecedetails}
          next = {nextpiecedetails}
        />
    </React.Fragment>
    
  );
}

export default SinglePlayerPage;