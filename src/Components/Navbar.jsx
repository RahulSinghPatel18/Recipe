import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      
     <nav className="px-20 h-[9vh] w-full flex items-center justify-between ">
            <img
                className="h-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
                alt=""
            />
            <div className="flex gap-x-10 text-md items-center">
                <Link className="hover:text-green-600 duration-200" to="/">
                    Home
                </Link>
                <Link
                    className="hover:text-green-600 duration-200"
                    to="/recipe"
                >
                    Recipes
                </Link>
                <Link className="hover:text-green-600 duration-200" to="/about">
                    About
                </Link>
                <Link
                    className="hover:text-green-600 duration-200"
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
            <img
                className="h-[80%]"
               src='https://static.thenounproject.com/png/102109-200.png'
                alt=""
            />
        </nav>
    </div>
  )
}

export default Navbar
