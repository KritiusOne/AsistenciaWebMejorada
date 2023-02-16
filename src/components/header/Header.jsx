import React, { useState } from 'react'
import { Img } from '../img/Img'
import logo from '../../assets/default.png'
import { BiMenu } from 'react-icons/bi'
import './header.css'

export function Header({misCursos}) {
  const [visible, setVisible] = useState(false)
  return (
    <header className='header'>
     
      <nav className='header__nav'>
        <div className='header__nav__container'>
          <div className='container--logo'>
            <Img logo={logo} clase='header__nav__logo' />
            <h1 className='header__nav__title'>
              UNIVERSIDAD DEL MAGDALENA
            </h1>
          </div>
          <div className='header__menuHamburguesaContainer'>
            <BiMenu className='header__menuHamburguesa' onClick={()=>{setVisible(!visible)}} />
          </div>
        </div>
        <ul className='header__nav__list'>
          <li className={visible == false ? 'header__nav__list__element element--invisible': 'header__nav__list__element '} >Inicio</li>
          <li className={visible == false ? 'header__nav__list__element element--invisible': 'header__nav__list__element '}>
            <a href={`#${misCursos}`} >MIS CURSOS</a>
          </li>
          <li className={visible == false ? 'header__nav__list__element element--invisible': 'header__nav__list__element '}>Cerrar Sesion</li>
          <li className={visible == false ? 'header__nav__list__element element--invisible': 'header__nav__list__element '}>CONFIGURACION</li>
        </ul>
      </nav>
    </header>
  )
}
