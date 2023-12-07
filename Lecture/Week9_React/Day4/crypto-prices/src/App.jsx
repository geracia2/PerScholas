import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import Price from './pages/Price'
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
      <Route path='/currencies' element={<Currencies/>}/>
      {/* :symbol is a URL parameter/placeholder, this is just looking for urls that match this pattern  */}
      <Route path='/price/:symbol' element={<Price />}/>
      {/* <Route path='/price/:dog' element={<Price />}/> */}
    </Routes>
    
    {/* could add footer here because it will not change */}
    
    </>
  )
}

export default App
