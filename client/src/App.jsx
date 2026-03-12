import React from 'react'
import { HashRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes.jsx';
const App = () => {
  return (
    <HashRouter>
       <AppRoutes />
   </HashRouter>
  )
}

export default App
