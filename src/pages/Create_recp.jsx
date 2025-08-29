import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipeContext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create_recp = () => {
  const navigate = useNavigate()
  const { data, setdata } = useContext(recipeContext)
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydataa = [...data];
    copydataa.push(recipe);
    setdata(copydataa);
    localStorage.setItem("recipes", JSON.stringify(copydataa));
    console.log(recipe);
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    toast.success("New recipe created!");
    reset();
    navigate("/recipes")
    // setdata([...data, recipe])
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create Recipe</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full"></div>
          </div>

          <form onSubmit={handleSubmit(SubmitHandler)} className="space-y-6">
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
                rows="4"
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

            <button className="w-full mt-8 bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-pink-500/25 transform hover:scale-[1.02] transition-all duration-300">
              Save Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create_recp