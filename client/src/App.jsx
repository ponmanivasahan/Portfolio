import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './AppRoutes.jsx';
const App = () => {
  return (
    <BrowserRouter>
       <AppRoutes />
   </BrowserRouter>
  )
}

export default App
