import React from 'react'
import Mainroutes from './Routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-[10%] min-h-screen w-screen text-white font-thin">
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App