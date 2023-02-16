import React, {useState, useEffect} from 'react'
import {useAsistContext} from '../context/useAsistContext'
import {firstname, lastname} from '../utils/fakeData'
import { Header } from '../components/header/Header'
import { RowList } from '../components/rowlist/Rowlist'
import {CheckButton} from '../components/checkbutton/CheckButton'
import '../styles/Alumnos.css'

export function Alumnos() {
  const [i, setI] = useState(1)
  const context = useAsistContext()
  const [actualNames, setActualNames] = useState([])
  useEffect(()=>{
      const rand_first = Math.floor(Math.random()*firstname.length); 
      const rand_last = Math.floor(Math.random()*lastname.length); 
      const name = firstname[rand_first] + " " + lastname[rand_last]
      setActualNames([...actualNames, name])
      if(i < 20) setI(i +1)
      else console.log('he terminado')
  },[i])
  return (
    <div className="Alumnos">
      <Header />
      <RowList>
        {actualNames && actualNames.map((actualName, index)=>{
          return( <>
            <div className='App__numbers' key={actualName}>
              {index + 1}
            </div>
            <div className='App__name' key={actualName + actualName}>
              {actualName}
            </div>
            <div key={actualName + actualName +actualName}>
              <CheckButton key={actualName + actualName +actualName + actualName } />
            </div>
          </>)
        })}       
      </RowList>
      <section className='result-Container'>
        <span className='result__asistentes__title'>Asistentes totales: <strong className='totalAsistentes'>{context.value}</strong> </span>
      </section>
    </div>
  )

}
