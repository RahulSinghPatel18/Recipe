import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import Card from './Card'
const Home = () => {
     // next page me jane ke liye
     const navigate = useNavigate()
     const submithandler =()=>{
          console.log("next page recipe!")
          navigate('/recipe')
     }
  return (
    <>
 <div className="w-full px-[7rem] flex justify-between items-center  h-[60vh]">   
     <div className="left w-1/2 ">
                <h1 className="text-7xl font-extrabold text-green-600">
                    SIMPLE & TASTY RECIPES
                </h1>
                <p className="text-zinc-400 mt-5 mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi eos maiores harum doloribus, praesentium alias qui
                    esse id atque sapiente similique quis, velit fugit, nemo
                    unde consectetur voluptatem sequi repellat.
                </p>
                <button  className='hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 ...  my-[-5rem] px-6 rounded-sm   bg-blue-400 p-3'>Get Created <span className='text-white hover:text-green-400'> →</span></button>
            </div>
            <img className='w-1/2'  src="https://www.indomie.hk/uploads/recipe/indomie-pizza_detail2_215651429.png" alt="" />
            
    </div>
 <div className=' px-[7rem] h-screen w-screen my[-20rem]'>
      <h1 className='text-center  font-bold text-green-600 text-[1.5rem]'>OUR SPECIAL ITEM</h1>
     
      <h6  className='text-center' >
      Choose Your Testy Food
      </h6>
      <Link
            to="/recipe" onClick={submithandler}
            className="cursor-pointer rounded-md top-[15%]  py-4 px-5 left-[10%] text-[1.2rem] bg-green-300 "
        >
            <i className="text-2xl text-red-400 ri-add-box-line"></i>
            Create Recipe
        </Link>
        
    {/* Card */}
    
    <Card/>
    
    </div>
    
    {/* Footer section */}
    <div className="m-auto w-[70%] my-[15rem] p-10">
            <h2 className="text-green-600 text-center">Features</h2>
            <h1 className="text-2xl font-bold text-center">
                OUR AWESOME SERVICES
            </h1>

            <div className="features flex flex-wrap justify-between mt-[5%]">
                <div className="w-[40%] flex items-center">
                    <i className="text-[10vh] ri-restaurant-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Quality Food</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>

                <div className="w-[40%] flex items-center">
                    <i className="text-[10vh] ri-graduation-cap-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Cook like a Chef</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
                <div className="w-[40%] flex items-center">
                    <i className="text-[10vh] ri-bread-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Ingredients</h1>

                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
                <div className="w-[40%] flex items-center">
                    <i className="text-[10vh] ri-presentation-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Easy Recipe</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
                <div className="w-[40%] flex items-center">
                    <i className="text-[10vh] ri-temp-hot-line mr-5"></i>
                    <div className="">
                        <h1 className="text-xl">Serve Hot</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    

    </>
    
  )
}

export default Home

      
        
 
   
