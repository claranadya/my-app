import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCatalog } from './CatalogContext';

const CatalogItem = ({ id, image, name, price, description }) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div 
        className="relative overflow-hidden cursor-pointer"
        onClick={() => navigate(`/product/${id}`)}
      >
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-medium text-gray-800 line-clamp-2">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-semibold text-pink-600">
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(price)}
          </span>
          <button 
            onClick={() => navigate(`/product/${id}`)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const Catalog = () => {
  const { 
    products, 
    searchQuery, 
    setSearchQuery, 
    activeTab, 
    setActiveTab
  } = useCatalog();

  const tabs = [
    'All Products',
    'Popular Products',
    'Special Products'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-center mb-12 text-gray-900">Our Products</h1>

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-base font-medium transition-all duration-200 border-b-2 ${
              activeTab === tab
                ? 'border-pink-600 text-pink-600'
                : 'border-transparent text-gray-600 hover:text-pink-600 hover:border-pink-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {products.length === 0 ? (
        <div className="text-center text-gray-600 py-12 text-lg">
          No products found matching your search criteria
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <CatalogItem key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;