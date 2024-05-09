import { createContext, useEffect, useState } from 'react'


export const  Recipecontext = createContext(null)

const RecipeContext = (props) => {
    const [recipes, setrecipes] = useState([])

    // local storage se data lane ke liye useeffct
    useEffect(()=> {
        // json.parse data ko string me change krne ke liye 
    setrecipes(JSON.parse(localStorage.getItem('recipes')) || [])
 
},[])

  return (
    <Recipecontext.Provider  value={[recipes, setrecipes]}>
        {props.children}
    </Recipecontext.Provider>

  )
}

export default RecipeContext;
