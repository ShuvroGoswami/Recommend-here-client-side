// src/components/NeedHelp.jsx
import React from 'react';
import { FaEnvelope, FaQuestionCircle } from 'react-icons/fa';

const NeedHelp = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-purple-100 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <FaQuestionCircle className="text-indigo-600 text-5xl mb-4 mx-auto" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Need Help or Have Questions?
        </h2>
        <p className="text-md text-gray-600 mb-8">
          We’re here to support your journey. Whether you’re looking for guidance, curious about how recommendations work,
          or just want to share feedback — we’d love to hear from you.
        </p>

        <a
          href=""
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded transition"
        >
          <FaEnvelope />
          Contact Support
        </a>
      </div>
    </section>
  );
};

export default NeedHelp;
