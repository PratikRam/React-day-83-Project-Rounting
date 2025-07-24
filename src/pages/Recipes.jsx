import React, { useContext, useState } from 'react'
import { recipeContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const { data } = useContext(recipeContext);


  const renderrecipes = data.map((recipe) => (

    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (

    <div className='flex flex-wrap'>
      {data.length > 0 ? renderrecipes : "No recipe found!"}
    </div>
  )
}

export default Recipes