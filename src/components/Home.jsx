import React from 'react';
import { BsInstagram, BsFacebook, BsTwitter, BsSearch } from 'react-icons/bs';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div className="space-y-6">
            <h1 className="text-5xl font-serif">
              Desserts &amp; Cakes
              <br />
              <span className="font-light">especially for you</span>
            </h1>
            <p className="text-gray-600">Same day cake delivery in Kota Jambi</p>
            <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-800">
              <a href="/catalog">Shop now</a>    
            </button>
          </div>

          <div className="relative">
            <img 
              src="/images/6.jpeg" 
              alt="Chocolate cake with flowers" 
              className="rounded-lg w-full"
            />
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-pink-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;