import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {

    const { id, image, title, description } = props.recipe;


    return (

        <Link to={`/recipes/details/${id}`}
            className="duration-200 hover:scale-102 p-1 mr-3 mb-3 block w-[23vw] rounded overflow-hidden shadow-2xl border-2 border-gray-700">

            <img className='object-cover w-full h-[20vh] rounded' src={image} alt="" />
            <h1 className='px-2 mt-2 font-black'>{title}</h1>
            <p>
                {description.slice(0, 100)}...{" "}
                <small className='text-blue-400'>More</small>
            </p>
        </Link>
    );
}

export default RecipeCard