import { nanoid } from 'nanoid'
import React, { useContext, useState } from 'react'
import { Recipecontext } from '../Context/RecipeContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const CreateRecipe = () => {
 const [recipes, setrecipes] = useContext(Recipecontext)

 const [image, setimage] = useState('')
 const [title, settitle] = useState('')
 const [description, setdescription] = useState('')
 const [ingradients, setingradients] = useState('')
 const [instructions, setinstructions] = useState('')

const navigate = useNavigate()
 
 const SubmitHandler =(e) =>{
    e.preventDefault()
    const newRecipe = {id: nanoid(),
    image,
    title,
    description,
    ingradients,
    instructions
   };
    // console.log(newRecipe)
    setrecipes([...recipes, newRecipe])
  // sets the data in the localStorge of the browser
  localStorage.setItem("recipes",
    JSON.stringify([...recipes, newRecipe])
);
       toast.success("Recipe Created!");
       navigate('/recipe')
 }
// console.log(recipes)

  return (
    <div>
       <form onSubmit={SubmitHandler} action='' className="w-[65%] m-auto pb-5">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Create <br /> New Recipe
            </h1>
            <input
               onChange={(e)=> setimage(e.target.value)}
               value={image}
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Image URL"
            />
            <input
              onChange={(e) => settitle(e.target.value)}
              value={title}
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Name"
            />
            <textarea
              onChange={(e)=> setdescription(e.target.value)}
              value={description}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe description..."
            ></textarea>
            <textarea
                 onChange={(e)=> setingradients(e.target.value)}
                 value={ingradients}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
            ></textarea>
            <textarea
                onChange={(e)=> setinstructions(e.target.value)}
                value={instructions}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe instructions -> 'use comma to seperate instructions'..."
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>

    </div>
  )
}

export default CreateRecipe
