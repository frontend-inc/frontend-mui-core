import React from 'react'
import { Button } from '@mui/material'
import { ResourceButtonType } from '../../../../types'

export type ResourceButtonProps = {
  button: ResourceButtonType
  selected: any[]
}

const ResourceButton: React.FC<ResourceButtonProps> = (props) => {

  const { button, selected=[] } = props || {}
  
  const { 
    onClick,
    variant = 'contained',
    label = 'Click me',
    color = 'primary',
  } = button || {}

  return (
    <Button       
      variant={ variant }
      color={ color }
      onClick={
        selected ? () => onClick(selected) : undefined 
      }
    >
      { label }
    </Button>  
  )        
}

export default ResourceButton