// src/components/WhyChooseUs.jsx
import React from 'react';
import { FaBalanceScale, FaUsers, FaLightbulb } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-white via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Why Choose Our Platform?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          We empower you to make better buying choices by supporting ethical alternatives and giving your voice a place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 1 */}
          <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition">
            <FaBalanceScale className="text-indigo-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ethical Awareness</h3>
            <p className="text-gray-600 text-sm">
              Learn why certain products are boycotted and discover better, more responsible alternatives.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition">
            <FaUsers className="text-indigo-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Recommendations</h3>
            <p className="text-gray-600 text-sm">
              Real people recommend products they trust. Join the community and help others make smarter decisions.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white shadow-md rounded-lg p-8 hover:shadow-xl transition">
            <FaLightbulb className="text-indigo-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Informed Decisions</h3>
            <p className="text-gray-600 text-sm">
              You’re not alone in your choices. Use our platform to find transparency, purpose, and quality in what you buy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
