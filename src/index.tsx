import React from 'react'
import { observer } from 'mobx-react'
import CharacterPanel from './components/CharacterPanel'
import CharacterStore, { Character } from './stores/character.store'
import './solid.css'
import EquipmentPanel from './components/EquipmentPanel'
import EquipmentStore, { Equipment } from './stores/equipment.store'
import ExtraPanel from './components/ExtraPanel'

interface CompanionProps {
  character: Character
  equipment: Equipment
}

const Companion = observer((props: CompanionProps) => {
  const characterStore = new CharacterStore(props.character)
  const equipmentStore = new EquipmentStore(props.equipment)

  return (
    <div className='wp100 hd100 df fc jcsb'>
      <CharacterPanel characterStore={characterStore} />
      <EquipmentPanel equipmentStore={equipmentStore} />
      <ExtraPanel />
    </div>
  )
})

export default Companion
