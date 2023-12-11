import React from 'react'
import Registration from './Registration'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'



function Container() {
  return (
    <div style={{width:'30%', textAlign:'center', marginLeft:'35%'}}>
        <Routes>
            <Route path='/' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    </div>
  )
}

export default Container