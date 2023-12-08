import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
import StockContextContainerProvider from "./components/StockContextConatiner";


ReactDOM.createRoot(document.getElementById('root')).render(
  <StockContextContainerProvider>
    <Router>
      <App />
    </Router>
  </StockContextContainerProvider>
)
