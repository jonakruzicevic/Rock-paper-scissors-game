import React from 'react'
import {connect} from 'react-redux'
import { playAgain } from '../store/actions';

import { COMPUTER, PLAYER, TIE } from '../constants/constant';

const YOU_WIN = "YOU WIN";
const YOU_LOSE = "YOU LOSE";

export const PlayAgain = (props) => {

    const { winner, onClickHandler } = props;

    const outcomeMessage = () => {
        if(winner === COMPUTER){
            return YOU_LOSE;
        } else if (winner === PLAYER){
            return YOU_WIN;
        } else {
            return TIE;
        }
    }

  return (
    <div className='play-again'>
        <div className='play-again-title'>{outcomeMessage()}</div>
        <div className='play-again-button' onClick={onClickHandler}>
            play again
        </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
    winner: state.game.outcome,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClickHandler: () => dispatch(playAgain()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayAgain);
