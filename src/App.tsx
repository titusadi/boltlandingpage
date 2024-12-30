import React from 'react';
import { Menu, ChevronRight, Building2 } from 'lucide-react';
import Navbar from './components/Navbar';
import GeometricPattern from './components/GeometricPattern';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <GeometricPattern />
      <Navbar />
      
      <main className="container mx-auto px-4 lg:px-8 relative">
        <div className="min-h-[calc(100vh-80px)] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Let's start something big together
              </h1>
              <p className="text-lg text-slate-300 max-w-xl">
                Transform your business with cutting-edge solutions that drive growth and innovation. 
                Join us in creating the next generation of digital experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                  Learn More
                  <ChevronRight size={20} />
                </button>
                <button className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
                alt="Professional in office"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-[600px]"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;