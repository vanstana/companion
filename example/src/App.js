import React from 'react'
import './App.css'
import Companion from '@vanstana/companion'
import '@vanstana/companion/main.css'

function App() {
  const character = {
    alignment: 'LG',
    armorClass: '18',
    class: 'Mountain Dwarf',
    level: '11',
    name: 'Galbek',
  }
  const equipment = {
    helmet: {
      title: 'Helmet',
      description: '',
      image: '',
    },
    shoulder: {
      left: {
        title: 'Left Shoulder',
        description: '',
        image: '',
      },
      right: {
        title: 'Right Shoulder',
        description: '',
        image: '',
      },
    },
    chest: {
      title: 'Chest',
      description: '',
      image: '',
    },
    glove: {
      left: {
        title: 'Left Glove',
        description: '',
        image: '',
      },
      right: {
        title: 'Right Glove',
        description: '',
        image: '',
      },
    },
    boot: {
      left: {
        title: 'Left Boot',
        description: '',
        image: '',
      },
      right: {
        title: 'Right Boot',
        description: '',
        image: '',
      },
    },
  }

  return (
    <div className='App'>
      <Companion character={character} equipment={equipment} />
    </div>
  )
}

export default App
