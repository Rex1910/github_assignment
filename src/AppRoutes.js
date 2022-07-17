import React from 'react'
import { Routes, Route } from "react-router-dom"
import About from './components/About/About'
import Followers from './components/Followers'
import Home from './components/Home/Home'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="about/:id" element={ <About/> } />
      <Route path="followers/:id" element={ <Followers /> } />
    </Routes>
  )
}

export default AppRoutes;