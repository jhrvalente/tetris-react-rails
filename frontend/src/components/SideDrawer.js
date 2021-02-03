import React from 'react';
import logout from '../Logout.png';
import games from '../games.png';
import badge from '../badge.jpg';
import highscores from '../highscores.png';
import stats from '../stats.jpg';
import './SideDrawer.css';

const SideDrawer = () => {
  return (
    <div className="vertical-nav bg-white" id="sidebar">
  <div className="py-4 px-3 mb-4 bg-light">
    <div className="media d-flex align-items-center"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png" alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm"></img>
      <div className="media-body">
        <h4 className="m-0 user-name">João Valente</h4>
        <img id="imgbadge" src={badge} height="25" width="25"></img>
        <p className="font-weight-light text-muted mb-0 user-desc">Rank 1 &nbsp;  XP: 0</p>
      </div>
    </div>
  </div>

  <ul className="nav flex-column bg-white mb-0">
    <li className="nav-item">
      <a href="#" id="link-stats" className="nav-link text-dark font-italic">
      <img id="imgstats" className="mr-3" src={stats} height="35" width="35"></img>  
                Stats Overview
            </a>
            <hr></hr>
    </li>
    
    <li className="nav-item">
      <a href="#" id="link-highscores" className="nav-link text-dark font-italic">
      <img id="imgHighscores" className="mr-3" src={highscores} height="25" width="25"></img>
                Highscores
            </a>
            <hr></hr>
    </li>
    <li className="nav-item">
      <a href="#" id="link-games" className="nav-link text-dark font-italic">
      <img id="imggames" className="mr-3" src={games} height="40" width="40"></img>
                Games
            </a>
            <hr></hr>
    </li>
    <li className="nav-item">
      <a href="#" id="link-logout" className="nav-link text-dark font-italic">
      <img id="imglogout" className="mr-3" src={logout} height="25" width="25"></img>
                Logout
            </a>
            <hr></hr>
    </li>
  </ul>

</div>
  );
}

export default SideDrawer;