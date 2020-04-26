import React from 'react'
import { observer } from 'mobx-react'
import Label from './Label'
import CharacterStore from '../stores/character.store'

interface CharacterPanelProps {
  characterStore: CharacterStore
}

const CharacterPanel = observer((props: CharacterPanelProps) => {
  return (
    <div className='wp100 df fr jcsb'>
      <div className='wp70 df fc aifs p10'>
        <Label value={props.characterStore.name} />
        <Label value={props.characterStore.class} />
      </div>
      <div className='wp15 df fc p10'>
        <Label value={props.characterStore.alignment} />
        <Label value={props.characterStore.level} />
      </div>
      <div className='wp15 df fc p10 jcc aic'>
        <Label value={props.characterStore.armorClass} className='ts24' />
      </div>
    </div>
  )
})

export default CharacterPanel
