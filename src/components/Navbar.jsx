import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' mt- flex justify-center items-center gap-x-10 text-sm mb-10 p-5 bg-gray-700 border-gray-700 rounded-2xl '>

            <NavLink className={(e) => e.isActive ? "text-red-400" :""} to="/">

                Home

            </NavLink>

            <NavLink className={(e) => e.isActive ?  "text-red-400" : ""} to="/about">

                About

            </NavLink>

            <NavLink className={(e) => e.isActive ? "text-red-400" : ""} to="/recipes">

                Recipes

            </NavLink>

            <NavLink className={ (e) => e.isActive ? "text-red-400": ""} to="/create_recp">

                Create Recipe

            </NavLink>

            {/* <NavLink className={ (e) => e.isActive ? "text-red-400": ""} to="/fav">

                Favorite

            </NavLink> */}



        </div>
    );
};

export default Navbar