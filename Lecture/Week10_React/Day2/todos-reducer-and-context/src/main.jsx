import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import TodosProvider from './todosContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodosProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TodosProvider>
  ,
)
