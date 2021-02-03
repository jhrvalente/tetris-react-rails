import React from 'react';
import { Link } from 'react-router-dom'; 

const PlayerItem = props => {
  
  return (
    <div className="card" style={{height: "50px", width: "680px", backgroundColor: "white", marginLeft: "-15px", marginTop: "10px"}}>
      <div className="card-body bg-light">
       <li style={{marginTop: "-12px"}}><Link style={{ textDecoration: 'none' }} to="/games/multi"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png" alt="..." width="25" class="mr-3 rounded-circle img-thumbnail shadow-sm"></img> {props.firstName} {props.lastName} &nbsp; &nbsp; &nbsp; &nbsp; Rank {props.rank} XP: {props.xp}</Link></li>
      </div>
    </div>
  );
};

export default PlayerItem;