import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipeContext } from '../context/RecipeContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipeContext)
  const navigate = useNavigate()
  const params = useParams();
  const recipe = data.find(recipe => params.id == recipe.id)
  const { register, handleSubmit, reset } = useForm(
    {
      defaultValues:
      {
        title: recipe?.title,
        image: recipe?.image,
        instruction: recipe?.instruction,
        description: recipe?.description,
        ingredients: recipe?.ingredients,
      }
    }
  );

  const SubmitHandler = (recipe) => {
    const index = data.findIndex(recipe => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    localStorage.setItem("recipes", JSON.stringify(copydata));
    setdata(copydata);
    toast.success("recipe updated!");
  };

  console.log(recipe);

  const DeletHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id)
    setdata(filterdata)
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    toast.error("recipe deleted!")
    navigate("/recipes")
  }

  useEffect(() => {
    console.log("homSingleRecipee.jsx mounted");
    return () => {
      console.log("SingleRecipe.jsx unmounted");
    }
  })

  const favorite = JSON.parse(localStorage.getItem("fav")) || [];

  const Favhandler = () => {
    favorite.push(recipe)
    localStorage.setItem("fav", JSON.stringify(favorite));
  }

  const UnFavhandler = () => {

  }

  return recipe ? (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
          
          <div className="w-full flex flex-col lg:flex-row">
            
            {/* Left Side - Recipe Display */}
            <div className="relative left w-full lg:w-1/2 p-10 bg-gradient-to-br from-white/5 to-transparent">
              
              {favorite.includes(recipe) ?
                <i
                  onClick={UnFavhandler} 
                  className="right-[5%] absolute text-3xl text-pink-400 hover:text-pink-500 cursor-pointer transition-colors duration-300 ri-heart-3-fill">
                </i> :
                <i
                  onClick={Favhandler} 
                  className="right-[5%] absolute text-3xl text-pink-400 hover:text-pink-500 cursor-pointer transition-colors duration-300 ri-heart-3-line">
                </i>
              }

              <div className="space-y-6">
                <h1 className="text-4xl font-black text-white bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                  {recipe.title}
                </h1>
                
                <div className="relative group">
                  <img 
                    className="h-[30vh] w-full object-cover rounded-2xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-300" 
                    src={recipe.image} 
                    alt={recipe.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>

                <div className="space-y-4 text-gray-200">
                  <div>
                    <h3 className="text-lg font-semibold text-pink-300 mb-2">Description</h3>
                    <p className="text-gray-300 leading-relaxed">{recipe.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-violet-300 mb-2">Ingredients</h3>
                    <p className="text-gray-300 leading-relaxed">{recipe.ingredients}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-pink-300 mb-2">Instructions</h3>
                    <p className="text-gray-300 leading-relaxed">{recipe.instruction}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Edit Form */}
            <div className="w-full lg:w-1/2 p-8 bg-gradient-to-br from-transparent to-white/5">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Edit Recipe</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"></div>
              </div>

              <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-5">
                
                <div className="relative">
                  <input
                    className="w-full bg-white/5 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300"
                    {...register("image")}
                    type="url"
                    placeholder="Enter image URL"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <small className="text-red-400 text-xs">
                  this is how the error is shown
                </small>

                <div className="relative">
                  <input
                    className="w-full bg-white/5 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300"
                    {...register("title")}
                    type="text"
                    placeholder="Recipe title"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* <small className='text-red-400'>
                this is how the error is shown
                </small> */}

                <div className="relative">
                  <textarea
                    className="w-full bg-white/5 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 resize-none"
                    {...register("description")}
                    placeholder="Start from here"
                    rows="3"
                  ></textarea>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* <small className='text-red-400'>
                this is how the error is shown
                </small> */}

                <div className="relative">
                  <textarea
                    className="w-full bg-white/5 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 resize-none"
                    {...register("ingredients")}
                    placeholder="Write ingredients"
                    rows="3"
                  ></textarea>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* <small className='text-red-400'>
                this is how the error is shown
                </small> */}

                <div className="relative">
                  <textarea
                    className="w-full bg-white/5 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 resize-none"
                    {...register("instruction")}
                    placeholder="Write instruction"
                    rows="4"
                  ></textarea>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* <small className='text-red-400'>
                this is how the error is shown
                </small> */}

                <div className="relative">
                  <select
                    className="w-full bg-white/5 backdrop-blur border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300"
                    {...register("category")}
                  >
                    <option value="breakfast" className="bg-gray-800 text-white">Breakfast</option>
                    <option value="lunch" className="bg-gray-800 text-white">Lunch</option>
                    <option value="supper" className="bg-gray-800 text-white">Supper</option>
                    <option value="dinner" className="bg-gray-800 text-white">Dinner</option>
                  </select>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button 
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Update Recipe
                  </button>

                  <button 
                    onClick={DeletHandler}
                    type="button"
                    className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-red-500/25 transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Delete Recipe
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-400"></div>
          <span className="text-white text-lg">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default SingleRecipe