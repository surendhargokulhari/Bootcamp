import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: 'Product 1', imageUrl: 'https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg', price: 299, description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', imageUrl: 'https://cdn.pixabay.com/photo/2018/03/12/22/15/clothing-3221103_1280.jpg', price: 499, description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', imageUrl: 'https://cdn.pixabay.com/photo/2022/02/15/15/57/ring-7015206_1280.jpg', price: 199, description: 'Description of Product 3' },
  { id: 4, name: 'Product 4', imageUrl: 'https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg', price: 399, description: 'Description of Product 4' },
];

const Product = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:scale-105 transition-transform">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-lg w-50 h-50" />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-2 hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">E-commerce Product Listing</h1>
        <div className="relative">
          <ShoppingCart size={28} />
          {cart.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
              {cart.length}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default App;
