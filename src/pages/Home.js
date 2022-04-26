import React, {useState} from 'react';
import Phases from '../containers/Phases';


export default function Home() {

  const [modalVisible, setModalVisible] = useState(false);

  const displayRulesModal = () => {
    setModalVisible(!modalVisible);
  }

  return (
    <main className='home-page'>
      <Phases 
        displayRulesModal={displayRulesModal}
        modalVisible={modalVisible}
        />
      </main>
  )
}
