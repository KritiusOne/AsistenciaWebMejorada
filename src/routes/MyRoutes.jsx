import React from 'react'
import App from '../App'
import { Inicio } from '../pages/Inicio'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Alumnos } from '../pages/Alumnos'


export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/cursos/estudiantes' element={<Alumnos />} />
      </Routes>
    </BrowserRouter>
  )
}
