import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './AppRoutes.jsx';
import Hero from './sections/Hero.jsx';
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <BrowserRouter>
       <AppRoutes />
       {/* <Navbar /> */}
       {/* <Hero /> */}
   </BrowserRouter>
  )
}

export default App
