import React from 'react'
import {Header} from '../components/header/Header.jsx'
import { Card } from '../components/card/Card.jsx'
import iconProfe from '../assets/icon-perfil.png'
import { Img } from '../components/img/Img.jsx'
import { Link } from 'react-router-dom'
import '../styles/Inicio.css'

export function Inicio() {
  const cursos = [{
    materia: 'arquitectura de computadores',
    grupo: 1
  },{
    materia: 'arquitectura de computadores',
    grupo: 2
  },,{
    materia: 'arquitectura de computadores',
    grupo: 3
  },{
    materia: 'arquitectura de computadores',
    grupo: 4
  },{
    materia: 'programacion web',
    grupo: 1
  },{
    materia: 'programacion web',
    grupo: 2
  },{
    materia: 'programacion web',
    grupo: 3
  },{
    materia: 'programacion web',
    grupo: 4
  },{
    materia: 'arquitectura del software',
    grupo: 1
  },{
    materia: 'arquitectura del software',
    grupo: 2
  },{
    materia: 'arquitectura del software',
    grupo: 3
  },{
    materia: 'arquitectura del software',
    grupo: 4
  }]
  return (
    <div className='inicio'>
      <Header misCursos={'MIS_CURSOS'} />
      <div className='container--inicio'>
        <section className='profesor--info'>
          <Img logo={iconProfe} clase='profesor--info__img' />
          <h2 className='profesor--info__title'>JOHAN ROBLES</h2>
          <strong className='profesor--info__facultad'>FACULTAD DE INGENIERIA</strong>
          <span className='profesor--info__programa'>Programa de ingeniera de sistemas</span>
        </section>
        <section className='profesor--cursos'>
          <h2 id='MIS_CURSOS'>MIS CURSOS</h2>
          <div className='cursos'>
            {
              cursos.map((curso, index)=>{
                return (<Card nombre={curso.materia} source='https://elcomercio.pe/resizer/AB93Kg1JoITGLMLkCgLBnVzg_7g=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/37OWRM2CLBAE7BP5SXKLVMNHZE.jpg' key={index}>
                  <span className='curso--grupo'>Grupo: {curso.grupo} </span>
                  <Link to={'/cursos/estudiantes'} className='Link--Alumnos' > VER GRUPO </Link>
                </Card> )
              })
            }
          </div>
        </section>
      </div>
    </div>
  )
}
