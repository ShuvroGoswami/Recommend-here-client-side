// src/pages/AllRecommends.jsx
import React, { useEffect, useState } from 'react';

const AllRecommends = () => {
  const [recommends, setRecommends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/recommends')
      .then(res => res.json())
      .then(data => {
        setRecommends(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch recommendations:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-lg font-semibold">Loading recommendations...</div>;
  }

  return (
    <section className="py-12 px-6 md:px-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">All Recommendations</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recommends.map((rec) => (
          <div
            key={rec._id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5"
          >
            <div className="w-full h-48 overflow-hidden rounded mb-4">
              <img
                src={rec.image}
                alt={rec.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-indigo-700">{rec.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              Recommended by: <span className="font-semibold">{rec.name}</span>
            </p>
            <p className="text-sm text-gray-700">{rec.reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllRecommends;
