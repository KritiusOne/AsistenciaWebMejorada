import React from 'react'
import { Img } from '../img/Img'
import './card.css'

export function Card({nombre,source, children}) {
  return (
    <div className='card'>
      <div className='card__container--img'>
        <Img clase='card__img' logo={source} />
      </div>
      <div className='card__info'>
        <h3 className='card__info__name'>
          {nombre}
        </h3>
        <span className='card__info__codigo'>
          {children}
        </span>
      </div>
    </div>
  )
}
