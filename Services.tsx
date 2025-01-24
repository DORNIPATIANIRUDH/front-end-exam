import React from 'react';
import { useStore } from '../store/useStore';
import { Plus } from 'lucide-react';

const services = [
  {
    id: '1',
    name: 'Business Consulting',
    description: 'Expert business strategy and growth consulting',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    category: 'Consulting',
  },
  {
    id: '2',
    name: 'Digital Marketing',
    description: 'Comprehensive digital marketing services',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    category: 'Marketing',
  },
  {
    id: '3',
    name: 'Financial Planning',
    description: 'Personal and business financial planning',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
    category: 'Finance',
  },
  // Add more services as needed
];

export const Services = () => {
  const { addToCart } = useStore();

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    ${service.price}
                  </span>
                  <button
                    onClick={() => addToCart(service)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    Add to Cart
                    <Plus className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};