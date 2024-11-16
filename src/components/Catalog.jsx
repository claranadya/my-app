import React, { useState } from 'react';

const CatalogItem = ({ image, name, price }) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="mt-4">
      <h3 className="text-gray-800 font-medium">{name}</h3>
      <p className="text-pink-600">{price} $</p>
    </div>
  </div>
);

const Catalog = () => {
  const [activeTab, setActiveTab] = useState('Popular cakes');

  const tabs = [
    'Popular cakes',
    'Celebration cakes',
    'Baby cakes',
    'Wedding cakes',
    'Special cakes'
  ];

  const products = [
    {
      id: 1,
      name: 'Chocolate cake',
      price: 140,
      image: '/images/2.jpeg'
    },
    {
      id: 2,
      name: 'Carrot cake',
      price: 120,
      image: '/images/1.jpeg'
    },
    {
      id: 3,
      name: 'Brownie',
      price: 110,
      image: '/images/3.jpeg'
    },
    {
      id: 4,
      name: 'Eclair',
      price: 150,
      image: '/images/4.jpeg'
    },
    {
      id: 5,
      name: 'Cake Jar',
      price: 160,
      image: '/images/5.jpeg'
    },
    {
      id: 6,
      name: 'Blueberry Cheesecake',
      price: 160,
      image: '/images/7.jpeg'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif text-center mb-12">Catalog</h1>

      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 border-b-2 transition-colors duration-300 ${
              activeTab === tab
                ? 'border-pink-600 text-pink-600'
                : 'border-transparent text-gray-600 hover:text-pink-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <CatalogItem
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;