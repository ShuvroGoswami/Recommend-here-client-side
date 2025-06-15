// src/components/OurStory.jsx
import React from 'react';

const OurStory = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 border-t border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Our Story
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          It started with a question: “Why are we still supporting brands that don’t align with our values?”
          Our mission is simple — to give people the power to question, explore, and recommend products
          that matter. Whether it's boycotting unethical brands or lifting up local makers,
          we believe every purchase is a chance to shape a better world.
        </p>
        <p className="mt-4 text-md text-gray-500 italic">
          Built by conscious consumers, for conscious communities.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
