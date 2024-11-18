import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCatalog } from './CatalogContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useCatalog();
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
        <button 
          onClick={() => navigate('/catalog')}
          className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300 flex items-center"
        >
          <span className="mr-2">←</span>
          Back to Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button 
        onClick={() => navigate('/catalog')}
        className="mb-8 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center"
      >
        <span className="mr-2">←</span>
        Back to Catalog
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-serif mb-4">{product.name}</h1>
            <p className="text-2xl text-pink-600 font-semibold mb-6">
                {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                }).format(product.price)}
            </p>
            
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-600">
                {product.description || "No description available"}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Category</h2>
              <p className="text-gray-600">{product.category}</p>
            </div>

            {product.ingredients && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc list-inside text-gray-600">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.allergens && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Allergens</h2>
                <div className="flex flex-wrap gap-2">
                  {product.allergens.map((allergen, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-sm"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.servingSize && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Serving Size</h2>
                <p className="text-gray-600">{product.servingSize}</p>
              </div>
            )}

            <div className="mt-auto">
              <button 
                className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors duration-300"
                onClick={() => alert('Order functionality coming soon!')}
              >
                Buy It
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;