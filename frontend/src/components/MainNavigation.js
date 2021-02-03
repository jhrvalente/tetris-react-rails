import React from 'react';
import brand from '../img-brand.jpg';
import { Link } from 'react-router-dom'; 
import logout from '../Logout.png';
import games from '../games.png';
import badge from '../badge.jpg';
import highscores from '../highscores.png';
import stats from '../stats.jpg';

const MainNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src={brand} width="100" height="50" alt="">
    </img>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Mode
      </button>
      <div className="dropdown-menu" style={{marginLeft: "130px", width: "10%"}}>
        <Link className="dropdown-item" style={{width: "70%"}} to="/games/single">Single Player</Link>
        <Link className="dropdown-item" style={{width: "70%"}}  to="/lobby">Multiplayer</Link>
      </div>
      <li className="nav-item">
         
        <Link className="nav-link" to="/dashboard">Stats Overview</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/highscores">Highscores</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/1/games">Games</Link>
      </li>
      <li className="nav-item" style={{marginLeft: "760px"}}>
        <Link className="nav-link" to="/">Logout</Link>
      </li>
    </ul>
  </div>
</nav>
  );
};

export default MainNavigation;