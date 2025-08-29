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

  useEffect(() => {
    console.log("home.jsx mounted");
    // getproduct();

    return () => {
      console.log("home.jsx unmounted");
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-violet-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-pink-400 mb-6 animate-pulse">
              Recipe Hub
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover, Create, and Share Amazing Recipes from Around the World
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="text-4xl mb-4">🍳</div>
              <h3 className="text-xl font-bold text-white mb-3">Create Recipes</h3>
              <p className="text-gray-300">Share your culinary masterpieces with the world</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-white mb-3">Browse Recipes</h3>
              <p className="text-gray-300">Explore thousands of delicious recipes</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-white mb-3">Save Favorites</h3>
              <p className="text-gray-300">Keep track of your favorite recipes</p>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
            <button 
              onClick={getproduct}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Get Products
            </button>
            
            <a 
              href="/create_recp"
              className="px-8 py-4 bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Cooking
            </a>
          </div>

        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            
            <div className="space-y-2">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                1000+
              </div>
              <div className="text-gray-300">Recipes</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                500+
              </div>
              <div className="text-gray-300">Chefs</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                50+
              </div>
              <div className="text-gray-300">Categories</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                24/7
              </div>
              <div className="text-gray-300">Available</div>
            </div>

          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Popular Categories</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-500/20">
            <div className="text-4xl mb-3">🌅</div>
            <h3 className="text-lg font-semibold text-white">Breakfast</h3>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-violet-500/20">
            <div className="text-4xl mb-3">☀️</div>
            <h3 className="text-lg font-semibold text-white">Lunch</h3>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-pink-500/20">
            <div className="text-4xl mb-3">🌙</div>
            <h3 className="text-lg font-semibold text-white">Dinner</h3>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-violet-500/20">
            <div className="text-4xl mb-3">🍰</div>
            <h3 className="text-lg font-semibold text-white">Dessert</h3>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home