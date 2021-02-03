import React from 'react';
import RedTetrimino from './RedTetrimino';
import CyanTetrimino from './CyanTetrimino';
import MagentaTetrimino from './MagentaTetrimino';
import OrangeTetrimino from './OrangeTetrimino';
import BlueTetrimino from './BlueTetrimino';
import YellowTetrimino from './YellowTetrimino';
import GreenTetrimino from './GreenTetrimino';
import './Next.css';

const Next = props => {

	const renderSwitch = () => {
    switch(props.next.type) {
      case 0:
        return <CyanTetrimino orientation="horizontal"/>;
      case 1:
        return <MagentaTetrimino orientation="up"/>;
      case 2:
        return <OrangeTetrimino orientation="right"/>;
      case 3:
        return <BlueTetrimino orientation="left"/>;
      case 4:
        return <YellowTetrimino/>;
      case 5:
        return <GreenTetrimino orientation="vertical"/>;
      case 6:
        return <MagentaTetrimino orientation="right"/>;
      case 7:
        return <RedTetrimino orientation="horizontal"/>;
      case 8:
        return <CyanTetrimino orientation="vertical"/>;
      case 9:
        return <OrangeTetrimino orientation="left"/>;
      case 10:
        return <BlueTetrimino orientation="right"/>;
      case 11:
        return <MagentaTetrimino orientation="down"/>;
      case 12:
        return <MagentaTetrimino orientation="left"/>;
      case 13:
        return <BlueTetrimino orientation="up"/>;
      case 14:
        return <BlueTetrimino orientation="down"/>;
      case 15:
        return <RedTetrimino orientation="vertical"/>;
      case 16:
        return <GreenTetrimino orientation="horizontal"/>;
      case 17:
        return <OrangeTetrimino orientation="up"/>;
      case 18:
        return <OrangeTetrimino orientation="down"/>;
    }
  }

  return (
    <div id="nextDiv">
			<div id="nextHeader">
				<p id="pnextHeader">NEXT</p>
			</div>
			<div id="nextDisplay">
				
				{ //props.showNext && (
          <div id="nextDefault">
					  {renderSwitch()}
          </div>
          //)
        }
        
			</div>
			
		</div>
  );
};

export default Next;