import React from 'react';
import { useStore } from '../store/useStore';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useStore();

  const total = cart.reduce(
    (sum, item) => sum + item.service.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Your Cart</h1>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Link
              to="/services"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Your Cart</h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            {cart.map((item) => (
              <div
                key={item.service.id}
                className="flex items-center py-6 border-b last:border-b-0"
              >
                <img
                  src={item.service.image}
                  alt={item.service.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.service.name}
                  </h3>
                  <p className="text-gray-600">{item.service.description}</p>
                  <div className="mt-2 flex items-center">
                    <button
                      onClick={() =>
                        updateQuantity(item.service.id, Math.max(0, item.quantity - 1))
                      }
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="mx-4 text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.service.id, item.quantity + 1)
                      }
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="ml-6">
                  <p className="text-lg font-semibold text-gray-900">
                    ${(item.service.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.service.id)}
                    className="mt-2 text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>
            <Link
              to="/checkout"
              className="mt-4 w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors block"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};