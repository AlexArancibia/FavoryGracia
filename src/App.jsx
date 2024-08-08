import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { navItems } from './constants'
import Home from './components/Home'
import Footer from './components/Footer'
import Reuniones from './components/Reuniones'
import Involucrate from './components/Involucrate'
import Escribenos from './components/Escribenos'
import Dar from './components/Dar'
import ScrollToTop from './components/ScrollToTop'


function App() {
 

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path={navItems[0].path} element=<Home/> />
          <Route path={navItems[1].path} element={<h1>{navItems[1].label}</h1>} />
          <Route path={navItems[2].path} element=<Reuniones/> />
          <Route path={navItems[3].path} element=<Involucrate/> />
          <Route path={navItems[4].path} element=<Escribenos/> />
          <Route path={navItems[5].path} element=<Dar/> />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
