import React from 'react'
import { useAsistContext } from '../../context/useAsistContext.js'
import './checkButton.css'


export function CheckButton() {
  const context= useAsistContext()
  const handleClick = ({target}) =>{
   if(target.checked) context.setValue(context.value + 1)
    else context.setValue(context.value - 1)
  }
  return (
    <input className='checkButton' type='checkbox' onClick={handleClick}/>
  )
}