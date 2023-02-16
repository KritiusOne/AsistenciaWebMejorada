import React from 'react'
import './rowlist.css'

export function RowList({children}) {
  return (
    <div className='container'>
      <div className='List'>
        <div className='List__title'>#</div>
        <div className='List__title'>NOMBRES Y APELLIDOS</div>
        <div className='List__title'>Asistencia</div>
      </div>
      <div className='List'>{children}</div>
    </div>
  )
}