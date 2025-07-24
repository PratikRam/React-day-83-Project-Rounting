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
    localStorage.setItem("recipes",JSON.stringify(copydataa));

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
    <form onSubmit={handleSubmit(SubmitHandler)} className=' '>


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


      <button className='mt-5 block px-4 py-2 bg-gray-900 rounded'>

        Save Recipe

      </button>

    </form>
  );
};

export default Create_recp