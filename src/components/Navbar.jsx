import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="mt-5 flex justify-center items-center gap-x-10 text-sm mb-10 p-6 bg-gradient-to-r from-slate-800/90 via-gray-800/90 to-slate-800/90 backdrop-blur-lg border border-gray-600/50 rounded-3xl shadow-2xl mx-4">
            <NavLink
                className={(e) => e.isActive ?
                    "text-pink-400 font-semibold px-3 py-2 bg-pink-500/20 rounded-xl transform scale-110 transition-all duration-300" :
                    "text-gray-300 hover:text-pink-300 hover:scale-105 hover:bg-pink-500/10 px-3 py-2 rounded-xl transition-all duration-300"
                }
                to="/"
            >
                Home
            </NavLink>

            <NavLink
                className={(e) => e.isActive ?
                    "text-violet-400 font-semibold px-3 py-2 bg-violet-500/20 rounded-xl transform scale-110 transition-all duration-300" :
                    "text-gray-300 hover:text-violet-300 hover:scale-105 hover:bg-violet-500/10 px-3 py-2 rounded-xl transition-all duration-300"
                }
                to="/about"
            >
                About
            </NavLink>

            <NavLink
                className={(e) => e.isActive ?
                    "text-pink-400 font-semibold px-3 py-2 bg-pink-500/20 rounded-xl transform scale-110 transition-all duration-300" :
                    "text-gray-300 hover:text-pink-300 hover:scale-105 hover:bg-pink-500/10 px-3 py-2 rounded-xl transition-all duration-300"
                }
                to="/recipes"
            >
                Recipes
            </NavLink>

            <NavLink
                className={(e) => e.isActive ?
                    "text-violet-400 font-semibold px-3 py-2 bg-violet-500/20 rounded-xl transform scale-110 transition-all duration-300" :
                    "text-gray-300 hover:text-violet-300 hover:scale-105 hover:bg-violet-500/10 px-3 py-2 rounded-xl transition-all duration-300"
                }
                to="/create_recp"
            >
                Create Recipe
            </NavLink>

            {/* <NavLink className={ (e) => e.isActive ? "text-red-400": ""} to="/fav">
                Favorite
            </NavLink> */}
        </div>
    );
};

export default Navbar