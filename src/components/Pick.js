import React from 'react'

export default function Pick(props) {
    const { name, description, isLoadingDot } = props;

    let classes = `pick pick-${name.toLowerCase()}`;

    if(isLoadingDot){
        classes = `pick loading-dot loading-dot-${name.toLowerCase()}`;
    }

  return (
    <div className="pick-wrapper">
        <div className={classes}></div>
        <div className="pick-description">{description}</div>
    </div>
  )
}
