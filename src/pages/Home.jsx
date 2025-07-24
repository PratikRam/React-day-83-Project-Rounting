import axios from '../utils/axios';
import React, { useEffect } from 'react'

const Home = () => {

  const getproduct = async () => {

    try {
      // const { data } = await axios.get("https://fakestoreapi.com/products")
      
      const response = await axios.get("/products");
      console.log(response.data);

    } catch (error) {
      console.log(error);
    };

  }


  useEffect(()=>{
    console.log("home.jsx mounted");
    // getproduct();

    return () =>{
      console.log("home.jsx unmounted");
      
    }
  } ,[])


  return (
    <div>
      <h1>Home</h1>
      <button onClick={getproduct}> Get products </button>
    </div>

  )
}

export default Home