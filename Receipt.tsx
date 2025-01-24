import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export const Receipt = () => {
  const location = useLocation();
  const { order } = location.state || { order: null };

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-100 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <p className="text-gray-600">No order information found</p>
            <Link
              to="/"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Thank You!</h1>
            <p className="text-gray-600 mt-2">Your order has been confirmed</p>
          </div>

          <div className="border-t border-b border-gray-200 py-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Order Details
            </h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.service.id}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium text-gray-900">
                      {item.service.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium text-gray-900">
                    ${(item.service.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-gray-900">
                  ${order.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Customer Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-medium text-gray-900">{order.customer.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-gray-900">{order.customer.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium text-gray-900">{order.customer.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-medium text-gray-900">
                  {order.customer.address}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};