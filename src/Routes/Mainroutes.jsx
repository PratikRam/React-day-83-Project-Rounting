import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Recipes from '../pages/Recipes';
import About from '../pages/About';
import Create_recp from '../pages/Create_recp';
import SingleRecipe from '../pages/SingleRecipe';
import Pagenotfound from '../pages/Pagenotfound';
// import Fav from '../pages/fav';


const Mainroutes = () => {
    return (
        <div className='m-10'>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/recipes' element={<Recipes />} />
                <Route path='/about' element={<About />} />
                <Route path='/create_recp' element={<Create_recp />} />
                <Route path='/recipes/details/:id' element={<SingleRecipe />} />
                {/* <Route path='*' element={<Pagenotfound />} /> */}
                {/* <Route path='/fav' element={<Fav />} /> */}

            </Routes>
        </div>
    );

};

export default Mainroutes