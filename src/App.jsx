import React from 'react'
import Mainroutes from './Routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-gray-800 px-[10%] h-screen w-screen text-white font-thin'>
      
      <Navbar />
      
      <Mainroutes />


    </div>
  )
}

export default App