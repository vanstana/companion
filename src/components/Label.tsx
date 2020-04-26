import React from 'react'
import { SpanProps } from '../interfaces/generic'

interface LabelProps extends SpanProps {
  value: string
}

const Label = (props: LabelProps) => {
  return <span {...props}>{props.value}</span>
}

export default Label
