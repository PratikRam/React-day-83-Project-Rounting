import React, { useContext, useState } from 'react'
import { recipeContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
  const { data } = useContext(recipeContext);

  const renderrecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 mb-4">
            All Recipes
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover amazing recipes from our community of passionate cooks
          </p>
        </div>

        {/* Recipe Count */}
        {data.length > 0 && (
          <div className="mb-8">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 inline-flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">
                Found {data.length} delicious recipe{data.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        )}

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.length > 0 ? (
            renderrecipes
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 text-center max-w-md">
                <div className="text-6xl mb-6">🍽️</div>
                <h3 className="text-2xl font-bold text-white mb-4">No Recipes Found!</h3>
                <p className="text-gray-300 mb-6">
                  It looks like there are no recipes yet. Be the first to create one!
                </p>
                <a 
                  href="/create_recp"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Create First Recipe
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Additional Info Section */}
        {data.length > 0 && (
          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">Want to share your recipe?</h3>
              <p className="text-gray-300 mb-6">Join our community and share your culinary creations!</p>
              <a 
                href="/create_recp"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Add New Recipe
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Recipes