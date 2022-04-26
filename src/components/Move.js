import React from 'react';
import { connect } from 'react-redux';
import { setPlayerChoice, setPhase } from '../store/actions/index';
import { PHASE_2 }from '../constants/constant'

export const Move = (props) => {
    const { name, dispatch } = props;

    const setPlayerMove = () => {
        dispatch(setPlayerChoice(name));
        dispatch(setPhase(PHASE_2));
    }

  return (
    <div 
    className={`move move-${name.toLowerCase()}`}
    onClick={setPlayerMove}
        ></div>
  )
};

export default connect()(Move);
