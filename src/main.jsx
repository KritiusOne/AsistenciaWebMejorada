import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MyRoutes } from './routes/MyRoutes'
import { AsistContextProvider } from './context/AsistContextProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AsistContextProvider>
      <MyRoutes>
        
      </MyRoutes>
    </AsistContextProvider>
  </React.StrictMode>,
)
