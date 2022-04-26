import React from 'react'
import FirstPhase from './FirstPhase'
import SecondPhase from './SecondPhase';
import {connect } from 'react-redux'
import { PHASE_1, PHASE_2 } from '../constants/constant';

export const Phases = (props) => {

  const { displayRulesModal, modalVisible, phase, playerPick, computerPick } = props;

  return (
    <>
     { phase === PHASE_1 && (
     <FirstPhase 
       displayRulesModal={displayRulesModal}
       modalVisible={modalVisible}/>)}

    { phase === PHASE_2 && (
        <SecondPhase
          modalVisible={modalVisible}
          displayRulesModal={displayRulesModal}
          playerPick={playerPick}
          computerPick={computerPick}
          />)}
    </>
  )
}

const mapStateToProps = (state, ownProps) =>({
  phase: state.phases.currentPhase,
  playerPick: state.game.playerPick,
  computerPick: state.game.computerPick,
});

export default  connect(mapStateToProps)(Phases);