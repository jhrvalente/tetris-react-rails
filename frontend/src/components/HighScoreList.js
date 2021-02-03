import React from 'react';
import './HighScoreList.css';

const HighScoreList = props => {

  return (
  <table id="t01" style={{width: "283px", height: "563px", position:"relative", top: props.top, backgroundColor: "white", marginLeft: "auto", marginRight: "auto", textAlign: "center"}}>
  <tr>
      <th>Name</th>
      <th>Score</th>
  </tr>
  {props.highscores.map(highscore => (
    <tr>
      <td>{highscore.firstname} {highscore.lastname}</td> 
      <td>{highscore.value} Points</td>
    </tr>
  ))}
  </table>
  );
};

export default HighScoreList;