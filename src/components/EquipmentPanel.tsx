import React from 'react'
import EquipmentStore from '../stores/equipment.store'
import { observer } from 'mobx-react'
import Piece from './Piece'

interface EquipmentPanelProps {
  equipmentStore: EquipmentStore
}

const EquipmentPanel = observer((props: EquipmentPanelProps) => {
  return (
    <div className='wp100 df fr jcc aic ph10'>
      <div className='wp40 df fc aic'>
        <Piece {...props.equipmentStore.helmet} />
        <div className='wp100 df fr jcsb'>
          <Piece {...props.equipmentStore.shoulder.right} />
          <Piece {...props.equipmentStore.shoulder.left} />
        </div>
        <Piece {...props.equipmentStore.chest} />
        <div className='wp100 df fr jcsb mt50'>
          <Piece {...props.equipmentStore.glove.right} />
          <Piece {...props.equipmentStore.glove.left} />
        </div>
        <div className='wp100 df fr jcc mt100'>
          <Piece {...props.equipmentStore.boot.right} />
          <Piece {...props.equipmentStore.boot.left} />
        </div>
      </div>
    </div>
  )
})

export default EquipmentPanel
