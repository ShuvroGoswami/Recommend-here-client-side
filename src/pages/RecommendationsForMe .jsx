// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../provider/AuthProvider';

// const RecommendationsForMe = () => {
//   const { user } = useContext(AuthContext);
//   const [recommends, setRecommends] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user?.email) return;

//     fetch(`https://b11a11-server-side-shuvro-goswami.vercel.app/my-recommendations?email=${user.email}`)
//       .then(res => res.json())
//       .then(data => {
//         setRecommends(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Failed to fetch recommendations:', err);
//         setLoading(false);
//       });
//   }, [user]);

//   if (loading) {
//     return <div className="text-center py-20 font-semibold text-lg">Loading recommendations...</div>;
//   }

//   if (recommends.length === 0) {
//     return <div className="text-center py-20 text-gray-600">No recommendations yet on your products.</div>;
//   }

//   return (
//     <div className="py-10 px-4 md:px-16 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Recommendations For Me</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {recommends.map((rec) => (
//           <div
//             key={rec._id}
//             className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5"
//           >
//             <img
//               src={rec.image}
//               alt={rec.title}
//               className="w-full h-48 object-cover rounded mb-4"
//             />
//             <h3 className="text-xl font-semibold text-purple-700">{rec.title}</h3>
//             <p className="text-sm text-gray-600 mb-1">
//               Recommended by: <strong>{rec.recommenderName}</strong>
//             </p>
//             <p className="text-sm text-gray-700 mb-2">{rec.reason}</p>
//             <p className="text-xs text-gray-400">On: {new Date(rec.createdAt).toLocaleString()}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecommendationsForMe;

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const RecommendationsForMe = () => {
  const { user } = useContext(AuthContext);
  const [recommends, setRecommends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`https://b11a11-server-side-shuvro-goswami.vercel.app/recommends-for-user?email=${user.email}`
        ,{
        headers: {
          authorization : `Bearer ${user.accessToken}`
        }
      }
    )
      .then((res) => {
        setRecommends(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load recommendations:', err);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <p>Loading recommendations...</p>;
  if (recommends.length === 0) return <p>No recommendations found for your queries.</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Recommendations For My Queries</h1>
      <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="px-4 py-2 border-r">Query Title</th>
            <th className="px-4 py-2 border-r">Product Name</th>
            <th className="px-4 py-2 border-r">Recommended By</th>
            <th className="px-4 py-2 border-r">Recommendation Title</th>
            <th className="px-4 py-2 border-r">Reason</th>
            <th className="px-4 py-2 border-r">Date</th>
          </tr>
        </thead>
        <tbody>
          {recommends.map((rec) => (
            <tr key={rec._id} className="border-b hover:bg-purple-500">
              <td className="px-4 py-2 border-r">{rec.QueryTitle || 'N/A'}</td>
              <td className="px-4 py-2 border-r">{rec.productName || 'N/A'}</td>
              <td className="px-4 py-2 border-r">{rec.recommender || 'N/A'}</td>
              <td className="px-4 py-2 border-r">{rec.title || 'N/A'}</td>
              <td className="px-4 py-2 border-r">{rec.reason || 'N/A'}</td>
              <td className="px-4 py-2 border-r">{new Date(rec.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecommendationsForMe;


// import React from 'react';

// const RecommendationsForMe  = () => {
//     return (
//         <div>
//             gggg
//         </div>
//     );
// };

// export default RecommendationsForMe ;