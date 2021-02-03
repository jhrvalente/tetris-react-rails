import React from 'react';
import RedTetrimino from './RedTetrimino';
import CyanTetrimino from './CyanTetrimino';
import MagentaTetrimino from './MagentaTetrimino';
import OrangeTetrimino from './OrangeTetrimino';
import BlueTetrimino from './BlueTetrimino';
import YellowTetrimino from './YellowTetrimino';
import GreenTetrimino from './GreenTetrimino';

const Current = props => {

  const renderSwitch = props => {
    switch(props.current.type) {
      case 0:
        return <CyanTetrimino orientation="horizontal" left="0px" top="0px"/>;
      case 1:
        return <MagentaTetrimino orientation="up" left="0px" top="0px"/>;
      case 2:
        return <OrangeTetrimino orientation="right" left="0px" top="0px"/>;
      case 3:
        return <BlueTetrimino orientation="left" left="0px" top="0px"/>;
      case 4:
        return <YellowTetrimino left="0px" top="0px"/>;
      case 5:
        return <GreenTetrimino orientation="vertical" left="0px" top="0px"/>;
      case 6:
        return <MagentaTetrimino orientation="right" left="0px" top="0px"/>;
      case 7:
        return <RedTetrimino orientation="horizontal" left="0px" top="0px"/>;
      case 8:
        return <CyanTetrimino orientation="vertical" left="0px" top="0px"/>;
      case 9:
        return <OrangeTetrimino orientation="left" left="0px" top="0px"/>;
      case 10:
        return <BlueTetrimino orientation="right" left="0px" top="0px"/>;
      case 11:
        return <MagentaTetrimino orientation="down" left="0px" top="0px"/>;
      case 12:
        return <MagentaTetrimino orientation="left" left="0px" top="0px"/>;
      case 13:
        return <BlueTetrimino orientation="up" left="0px" top="0px"/>;
      case 14:
        return <BlueTetrimino orientation="down" left="0px" top="0px"/>;
      case 15:
        return <RedTetrimino orientation="vertical" left="0px" top="0px"/>;
      case 16:
        return <GreenTetrimino orientation="horizontal" left="0px" top="0px"/>;
      case 17:
        return <OrangeTetrimino orientation="up" left="0px" top="0px"/>;
      case 18:
        return <OrangeTetrimino orientation="down" left="0px" top="0px"/>;
    }
  }

  return (
    <React.Fragment>
      <div id={props.current.id}>
        {renderSwitch()}
      </div>
    </React.Fragment>
  );
}

export default Current;
