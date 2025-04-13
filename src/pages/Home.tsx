import React from 'react';
import { Clock, Truck, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const products = [
  {
    id: '1',
    name: 'Fresh Milk',
    price: 65,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    category: 'Dairy'
  },
  {
    id: '2',
    name: 'Whole Wheat Bread',
    price: 45,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    category: 'Bakery'
  },
  {
    id: '3',
    name: 'Cleaning Supplies Bundle',
    price: 299,
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    category: 'Household'
  },
  {
    id: '4',
    name: 'Fresh Vegetables Pack',
    price: 199,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    category: 'Fruits & Vegetables'
  },
  {
    id: '5',
    name: 'Toothpaste & Brush Set',
    price: 149,
    image: 'https://images.unsplash.com/photo-1559304822-9eb2813c9844?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    category: 'Personal Care'
  },
  {
    id: '6',
    name: 'Snacks Combo',
    price: 199,
    image: 'https://images.unsplash.com/photo-1621447504864-d8686f215c04?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    category: 'Snacks'
  }
];

const categories = [
  { id: 'fruits', name: 'Fruits & Vegetables' },
  { id: 'dairy', name: 'Dairy & Breakfast' },
  { id: 'snacks', name: 'Snacks & Beverages' },
  { id: 'household', name: 'Household Items' },
  { id: 'personal', name: 'Personal Care' },
];

const Home = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get your daily needs delivered in minutes
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-gray-600">Delivery in 10-20 minutes</span>
            </div>
            <div className="flex items-center">
              <Truck className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-gray-600">Free delivery on orders above ₹499</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Shop by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <p className="font-medium text-gray-900">{category.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Popular Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer group"
              onClick={() => handleAddToCart(product)}
            >
              <div className="relative p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                  <div className="bg-green-600 p-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform">
                    <Plus className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <h4 className="font-medium text-gray-900">{product.name}</h4>
                <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">₹{product.price}</span>
                  <span className="text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to add
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;