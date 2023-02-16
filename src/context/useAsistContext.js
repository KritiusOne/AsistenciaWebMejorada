import React, {useContext} from 'react'
import { AsistContext } from './CreateContext.js'

export function useAsistContext() {
  const context = useContext(AsistContext)
  if(context != undefined) return context
  else throw new Error('El contexto no esta disponible en este componente')
}
