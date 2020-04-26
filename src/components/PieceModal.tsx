import React from 'react'
import { PieceProps } from './Piece'
import Label from './Label'

interface PieceModalProps extends PieceProps {
  visible: boolean
}

function PieceModal(props: PieceModalProps) {
  return (
    <div className={`ap at0 al0 ar0 ab0 df jcc aic ${props.visible ? '' : 'o0 pen'}`}>
      <div className='bg-black o50 ap at0 al0 ar0 ab0' />
      <div className='wp50 df fc aic jcsb p10 zi1 bg-white br5'>
        <img src={props.image} width={64} height={64} />
        <Label className='ts24 mv10'>{props.title}</Label>
        <Label>{props.description}</Label>
      </div>
    </div>
  )
}

export default PieceModal
