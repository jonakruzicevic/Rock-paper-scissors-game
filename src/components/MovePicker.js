import React from 'react';
import TriangleBg from '../assets/bg-triangle.svg';
import { ROCK, PAPER, SCISSORS } from '../constants/constant';
import Move from './Move';

const MovePicker = () => {
  return (
    <div className='move-picker'>
        <img src={TriangleBg}
        alt='triangle bg'
        className='move-picker-triangle-bg'></img>
        <div className='move-picker-top-row'>
            <Move name={ROCK}/>
            <Move name={PAPER}/>
        </div>
        <div className='move-picker-bottom-row'>
            <Move name={SCISSORS}/>
        </div>
    </div>
  )
};

export default MovePicker;
