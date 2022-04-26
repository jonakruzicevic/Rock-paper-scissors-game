import React from 'react'
import Pick from './Pick';

export default function Picks(props) {

    const { playerPick, computerPick } = props;

  return (
    <div className='picks'>
        <Pick name={playerPick} description="You picked"/>
        <Pick 
            name={computerPick}
            description="The house picked"
            isLoadingDot={true}
        />
    </div>
  )
}
