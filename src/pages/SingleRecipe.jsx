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
    // const params = useParams();
    const index = data.findIndex(recipe => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    localStorage.setItem("recipes", JSON.stringify(copydata));
    setdata(copydata);
    toast.success("recipe updated!");


  };

  -
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
    // getproduct();

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


  return recipe ?
    (<div className='w-full flex'>



      <div className='relative left w-1/2 p-10'>


        {favorite.includes(recipe) ?

          <i
            onClick={UnFavhandler} className="right-[5%] absolute text-3xl text-red-400 ri-heart-3-fill">
          </i> :
          <i
            onClick={Favhandler} className="right-[5%] absolute text-3xl text-red-400 ri-heart-3-line">
          </i>


        }


        <h1 className=' text-4xl font-black'>{recipe.title}</h1>
        <img className='h-[20vh]' src={recipe.image} alt="" />
      </div>


      <form onSubmit={handleSubmit(SubmitHandler)} className=' w-1/2 p-2'>


        <input

          className='block border-b outline-0 p-2'
          {...register("image")}
          type="url"
          placeholder='Enter image URl'
        />

        <small className='text-red-400'>
          this is how the error is shown
        </small>


        <input

          className='block border-b outline-0 p-2'
          {...register("title")}
          type="text"
          placeholder='recipe title' />

        {/* <small className='text-red-400'>
        this is how the error is shown
      </small> */}

        <textarea

          className='block border-b outline-0 p-2'
          {...register("description")}
          placeholder='Start from here'

        >  </textarea>

        {/* <small className='text-red-400'>
        this is how the error is shown
      </small> */}

        <textarea

          className='block border-b outline-0 p-2'
          {...register("ingredients")}
          placeholder='Write ingredients'

        ></textarea>

        {/* <small className='text-red-400'>
        this is how the error is shown
      </small> */}

        <textarea

          className='block border-b outline-0 p-2'
          {...register("instruction")}
          placeholder='Write instruction'

        ></textarea>

        {/* <small className='text-red-400'>
        this is how the error is shown
      </small> */}

        <select

          className='block border-b outline-0 p-2 bg-gray-800'
          {...register("category")}

        >

          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>

        </select>


        <button className=' mt-5 block px-4 py-2 bg-blue-900 rounded '>

          Update recipe

        </button>

        <button onClick={DeletHandler} className='mt-5 block px-4 py-2 bg-red-900 rounded'>

          Delete recipe

        </button>

      </form>


    </div>) : ("loading...")

}

export default SingleRecipe