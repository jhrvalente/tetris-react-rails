import React from 'react';
import { Link } from 'react-router-dom'; 

const GameItem = props => {
  
  return (
    <div className="card" style={{height: "50px", width: "310px", backgroundColor: "white", marginLeft: "-15px", marginTop: "10px"}}>
      <div className="card-body bg-light">
       <li style={{marginTop: "-12px"}}><span style={{color: "blue"}}> id: {props.id} &nbsp; &nbsp; score: {props.score}</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <button type="button" class="btn btn-danger">View Stats</button></li>
      </div>
    </div>
  );
};

export default GameItem;