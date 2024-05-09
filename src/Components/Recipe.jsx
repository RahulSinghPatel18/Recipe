import 'remixicon/fonts/remixicon.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from './Card'


const Recipe = () => {
  const navigate = useNavigate()
     const submithandler =()=>{
          console.log("next page recipe!")
          navigate('/createrecipe')
     }
  return (
   <div>
     <div className=' px-[7rem] h-screen w-screen my[-20rem]'>
      <h1 className='text-center  font-bold text-green-600 text-[1.5rem]'>OUR SPECIAL ITEM</h1>
      <h6  className='text-center  ' >
      Choose Your Testy Food
      </h6>
      <Link
            to="/createrecipe" onClick={submithandler}
            className="cursor-pointer rounded-md top-[15%]  py-4 px-5 left-[10%] text-[1.2rem] bg-green-300 "
        >
            <i className="text-2xl text-red-400 ri-add-box-line"></i>
            Create Recipe
        </Link>
        
      {/* Card page */}
     <Card/>
     


    </div>
   </div>
  )
}

export default Recipe

