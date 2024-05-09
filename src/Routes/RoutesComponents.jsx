import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Recipe from '../Components/Recipe'
import About from '../Components/About'
import Contact from '../Components/Contact'
import CreateRecipe from '../Components/CreateRecipe'


const RoutesComponents = () => {
  return (
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/recipe" element={<Recipe/>} />
      <Route path="/createrecipe" element={<CreateRecipe/>} />
        
   </Routes>
  )
}

export default RoutesComponents
