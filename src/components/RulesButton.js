import React from 'react'

export default function RulesButton (props) {
    const {onClickHandler} = props;

  return (
    <div className='rules-button-wrapper'>
        <div className='rules-button' onClick={onClickHandler}>rules</div>
    </div>
  )
};

