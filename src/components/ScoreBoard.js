import { connect } from 'react-redux';
import React from 'react'

export const ScoreBoard = (props) => {
    const { score } = props;
  return (
    <div className='scoreboard'>
        <div className='scoreboard-left'>
            <p>rock</p>
            <p>paper</p>
            <p>scissors</p>
        </div>
        <div className='scoreboard-right'>
        <div className='scoreboard-right-title'>score</div>
        <div className='scoreboard-right-points'>{score}</div>
        </div>
        
        </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
    score: state.game.score,
})

export default connect(mapStateToProps)(ScoreBoard);