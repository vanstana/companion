import React, { useState } from 'react'
import PieceModal from './PieceModal'

export interface PieceProps {
  description: string
  image: string
  title: string
}

function Piece(props: PieceProps) {
  const [visible, setVisible] = useState(false)

  return (
    <div onClick={() => setVisible(!visible)}>
      {props.image ? (
        <img src={props.image} alt='' width={48} height={48} />
      ) : (
        <div className='cn48 bw1 b-black bg-white' />
      )}
      <PieceModal {...props} visible={visible} />
    </div>
  )
}

export default Piece
