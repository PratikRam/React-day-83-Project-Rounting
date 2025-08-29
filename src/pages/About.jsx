import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 mb-4">
            About Recipe Hub
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
            Your ultimate destination for discovering, creating, and sharing amazing recipes from around the world
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Mission Section */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe that cooking brings people together. Our mission is to create a platform where food enthusiasts 
              can discover new flavors, share their culinary creations, and connect with like-minded cooks from around 
              the globe. Every recipe tells a story, and we're here to help you tell yours.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-bold text-white mb-3">For Home Cooks</h3>
              <p className="text-gray-300">
                Whether you're a beginner or an experienced chef, find recipes that match your skill level and taste preferences.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">Global Community</h3>
              <p className="text-gray-300">
                Connect with cooks worldwide and explore diverse cuisines, traditional recipes, and innovative cooking techniques.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-3">Easy to Use</h3>
              <p className="text-gray-300">
                Simple, intuitive interface makes it easy to create, edit, and organize your recipes. Cooking should be fun, not complicated.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-bold text-white mb-3">Save & Share</h3>
              <p className="text-gray-300">
                Keep your favorite recipes organized and share your culinary masterpieces with friends and family easily.
              </p>
            </div>

          </div>

          {/* Story Section */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">📖</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
            </div>
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                Recipe Hub was born from a simple idea: great food deserves to be shared. We started as a small project 
                by passionate food lovers who wanted to create a space where culinary creativity could flourish.
              </p>
              <p>
                Today, we're proud to be a growing community of home cooks, professional chefs, and food enthusiasts 
                who believe that every meal is an opportunity to create something special.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">What We Believe</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                <p className="text-gray-300 text-sm">Cooking is better when shared with others</p>
              </div>
              
              <div>
                <div className="text-3xl mb-3">✨</div>
                <h3 className="text-lg font-semibold text-white mb-2">Creativity</h3>
                <p className="text-gray-300 text-sm">Every cook brings their unique touch</p>
              </div>
              
              <div>
                <div className="text-3xl mb-3">🎉</div>
                <h3 className="text-lg font-semibold text-white mb-2">Joy</h3>
                <p className="text-gray-300 text-sm">Cooking should always be enjoyable</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-pink-500/20 to-violet-500/20 backdrop-blur-lg border border-white/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Cooking?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our community today and start sharing your culinary adventures with fellow food lovers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/create_recp"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Create Your First Recipe
              </a>
              <a 
                href="/recipes"
                className="px-8 py-4 bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Browse Recipes
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About