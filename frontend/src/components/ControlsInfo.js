import React from 'react';
import space from '../Space.PNG';
import esc from '../Esc.PNG';
import pause from '../Pause.PNG';
import info from '../Info.PNG';
import './ControlsInfo.css';

const ControlsInfo = () => {
  return (
    <div id="divHelp">
      <h4>CONTROLS</h4>
      <div id="divSpace"> 
        <img className="imgkey" src={space} height="35" width="125"></img>
        <p id="pspace" className="pcontrols">Start Game <br></br> and Drop pieces</p>
      </div>
      <div id="divEsc">
        <img className="imgkey" src={esc} height="35" width="35"></img>
        <p id="pesc" className="pcontrols">Quit Game</p>
      </div>
      <div id="divPause">
        <img className="imgkey" src={pause} height="33" width="33"></img>
        <p id="ppause" className="pcontrols">Pause/Unpause Game</p>
      </div>
      <div id="divInfo">
        <img className="imgkey" src={info} height="31" width="31"></img>
        <p id="pinfo" className="pcontrols">Show/Unshow Controls</p>
      </div>
    </div>
  );
}

export default ControlsInfo;