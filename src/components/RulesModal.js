import React from 'react';
import ImageRules from '../assets/image-rules.svg';
import IconClose from '../assets/icon-close.svg';

export default function RulesModal(props) {
    const {onClickHandler} = props;
  return (
    <div className='rules-modal'>
        <h1 className='rules-modal-title'>rules</h1>
        <div className='rules-modal-img'>
            <img src={ImageRules} alt='rules'></img>
        </div>
        <div className='rules-modal-footer'>
            <img src={IconClose} alt='close icon' onClick={onClickHandler}></img>
        </div>
    </div>
  )
}
