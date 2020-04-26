import React from 'react'
import Label from './Label'

function ExtraPanel() {
  return (
    <div className='wp100 df fr jcc p10'>
      <Label value='<< Spell' className='wp50 df jcc aic' />
      <Label value='Note >>' className='wp50 df jcc aic' />
    </div>
  )
}

export default ExtraPanel
