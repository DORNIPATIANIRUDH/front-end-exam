import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ChatBot } from '../components/ChatBot';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070&brightness=120)',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-[#FFD700] px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Services at Your Fingertips
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#FFD700]/80">
              Experience excellence with our curated professional services
            </p>
            <div className="space-y-4">
              <Link
                to="/services"
                className="btn-primary inline-flex items-center"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FFD700] mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-[#FFD700]/80">
              Experience unparalleled quality and professionalism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Expert Professionals',
                description: 'Access to verified experts in various fields',
                image:
                  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
              },
              {
                title: 'Flexible Scheduling',
                description: 'Book appointments at your convenience',
                image:
                  'https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?auto=format&fit=crop&q=80',
              },
              {
                title: 'Secure Payments',
                description: 'Safe and secure transaction processing',
                image:
                  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
              },
            ].map((feature, index) => (
              <div key={index} className="card overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#FFD700]/80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
};