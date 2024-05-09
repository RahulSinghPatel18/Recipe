import React from 'react'
import Home from './Components/Home'
import Recipe from './Components/Recipe'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import RoutesComponents from './Routes/RoutesComponents'


const App = () => {
  return (
    <div className='w-screen h-screen'>
   <Navbar/>
   <RoutesComponents/>
      
    </div>
  )
}

export default App
