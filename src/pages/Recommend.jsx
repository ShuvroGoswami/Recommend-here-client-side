// import React, { use } from 'react';
// import { useParams } from 'react-router';
// import { AuthContext } from '../provider/AuthProvider';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const Recommend = () => {
//   const { id: recommendId } = useParams();
//   const { user } = use(AuthContext);

//   const handleAddRecommend = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const title = form.title.value;
//     const name = form.name.value;
//     const image = form.image.value;
//     const reason = form.reason.value;

//     // const recommend = {
//     //   recommendId,
//     //   recommender: user.email,
//     //   name,
//     //   title,
//     //   image,
//     //   reason,
//     // };

//     const recommend = {
//   recommendId,
//   recommender: user.email,
//   name,
//   title,
//   image,
//   reason,
//   QueryTitle:title,
//   // productName: productName,
//   // userEmail: userEmail,
//   // userName: userName,
//   createdAt: new Date().toISOString()  // <-- this adds the current timestamp in ISO format
// };


//     axios
//       .post('http://localhost:3000/recommends', recommend)
//       .then((res) => {
//         if (res.data.insertedId) {
//           Swal.fire({
//             position: 'top-end',
//             icon: 'success',
//             title: 'Recommendation saved!',
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           form.reset();
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'Something went wrong. Please try again!',
//         });
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 flex items-center justify-center p-6">
//       <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
//           Recommend a Product
//         </h2>
//         <form onSubmit={handleAddRecommend} className="space-y-6">
//           {/* Title */}
//           <div>
//             <label
//               htmlFor="title"
//               className="block mb-2 text-sm font-semibold text-purple-600"
//             >
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               required
//               placeholder="Enter title"
//               className="input input-bordered w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
//             />
//           </div>

//           {/* Name */}
//           <div>
//             <label
//               htmlFor="name"
//               className="block mb-2 text-sm font-semibold text-purple-600"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               required
//               placeholder="Your name"
//               className="input input-bordered w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
//             />
//           </div>

//           {/* Image URL */}
//           <div>
//             <label
//               htmlFor="image"
//               className="block mb-2 text-sm font-semibold text-purple-600"
//             >
//               Image URL
//             </label>
//             <input
//               type="url"
//               id="image"
//               name="image"
//               required
//               placeholder="https://example.com/image.jpg"
//               className="input input-bordered w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
//             />
//           </div>

//           {/* Reason */}
//           <div>
//             <label
//               htmlFor="reason"
//               className="block mb-2 text-sm font-semibold text-purple-600"
//             >
//               Reason
//             </label>
//             <textarea
//               id="reason"
//               name="reason"
//               required
//               placeholder="Why do you recommend this?"
//               rows={3}
//               className="input input-bordered w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition resize-none"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition"
//           >
//             Recommend
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Recommend


import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Recommend = () => {
  const { id: recommendId } = useParams();
  const { user } = useContext(AuthContext);

  const [queryData, setQueryData] = useState(null);
  console.log(queryData);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (recommendId) {
      axios
        .get(`http://localhost:3000/product/${recommendId}`) // updated endpoint
        .then((res) => {
          setQueryData(res.data);
          setError(null);
        })
        .catch((err) => {
          console.error('Failed to fetch query data:', err);
          setQueryData(null);
          setError('Failed to load query data.');
        });
    }
  }, [recommendId]);

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }

  if (!queryData) {
    return (
      <div className="text-center mt-10 text-xl font-semibold text-purple-600">
        Loading query details...
      </div>
    );
  }

  if (!user) {
    return <div className="text-center mt-10 text-purple-600">Loading user info...</div>;
  }

  const handleAddRecommend = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const name = form.name.value;
    const image = form.image.value;
    const reason = form.reason.value;

    const recommend = {
      recommendId,
      recommender: user.email,
      name,
      title,
      image,
      reason,
      QueryTitle: queryData?.title,
      productName: queryData?.name,
      userEmail: queryData?.email,
      userName: queryData?.userName,
      createdAt: new Date().toISOString(),
    };
  console.log(recommend);
    axios
      .post('http://localhost:3000/recommends', recommend)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Recommendation saved!',
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again!',
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Recommend a Product
        </h2>
        <form onSubmit={handleAddRecommend} className="space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-semibold text-purple-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Enter title"
              className="input input-bordered w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-semibold text-purple-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="input input-bordered w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>

          {/* Image URL */}
          <div>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-semibold text-purple-600"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              required
              placeholder="https://example.com/image.jpg"
              className="input input-bordered w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>

          {/* Reason */}
          <div>
            <label
              htmlFor="reason"
              className="block mb-2 text-sm font-semibold text-purple-600"
            >
              Reason
            </label>
            <textarea
              id="reason"
              name="reason"
              required
              placeholder="Why do you recommend this?"
              rows={3}
              className="input input-bordered w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Recommend
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recommend;
