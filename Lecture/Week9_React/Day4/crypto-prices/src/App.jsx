import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import Prices from './pages/Prices'
import Nav from './components/Nav'




function App() {

  // We will use the Route component to specify each route
  return (
    <>

    <Nav />
    {/* anything outside of moving to another page should be outside Routes */}
    
    <Routes>
      {/* '/' is the main page and will stop the if statement functionality because of the current url */}
      {/* <Route path='http://localhost:5173/' element={<Main />} /> */}
      {/* the above is the same as below at least when the browser is reading it */}
      <Route path='/' element={<Main/>}/>
      <Route path='/prices' element={<Prices/>}/>
      <Route path='/currencies' element={<Currencies/>}/>
    </Routes>
    
    {/* could add footer here because it will not change */}
    
    </>
  )
}

export default App
