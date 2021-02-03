import React from 'react';
import CyanTetrimino from './CyanTetrimino';
import OrangeTetrimino from './OrangeTetrimino';
import BlueTetrimino from './BlueTetrimino';
import YellowTetrimino from './YellowTetrimino';
import GreenTetrimino from './GreenTetrimino';
import MagentaTetrimino from './MagentaTetrimino';
import RedTetrimino from './RedTetrimino';

const PieceTiles = props => {
  return (
    <React.Fragment>
        <CyanTetrimino orientation="horizontal" left="-7px" top="13px"/>
        <OrangeTetrimino orientation="right" left="-8px" top="-124px"/>
        <BlueTetrimino orientation="left" left="132px" top="-152px"/>
        <YellowTetrimino left="-36px" top="-122px"/>
        <GreenTetrimino orientation="vertical" left="-92px" top="-95px"/>
        <MagentaTetrimino orientation="right" left="-7px" top="-127px"/>
        <RedTetrimino orientation="horizontal" left="-37px" top="-200px"/>
        <CyanTetrimino orientation="vertical" left="105px" top="-104px" />
    </React.Fragment>
  );
}

export default PieceTiles;