import React,  { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import TodoApp from'./TodoApp'


function App() {
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <Router>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/todo' element={<TodoApp />} />
        </Routes>
      </Router>
      
      
       
    </>
  )
}

export default App
