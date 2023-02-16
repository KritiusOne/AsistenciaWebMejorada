import React, {useState} from 'react'
import { AsistContext } from './CreateContext'

export function AsistContextProvider({children}) {
  const [value, setValue] = useState(0)
  return (
    <AsistContext.Provider value={{value, setValue}} >
      {children}
    </AsistContext.Provider>
  )
}
