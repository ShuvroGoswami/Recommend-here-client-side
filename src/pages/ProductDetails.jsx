// import React, { use, useEffect, useState } from 'react';
// import { Link, useLoaderData } from 'react-router';
// import { AuthContext } from '../provider/AuthProvider';
// import { LiaCommentAlt } from "react-icons/lia";

// const ProductDetails = () => {
//     const { user } = use(AuthContext);
//     const product = useLoaderData();
//     const { _id, name, Image, brand, title, Reason, email, userName } = product;

//     const [recommendCount, setRecommendCount] = useState(0);

//     useEffect(() => {
//         fetch(`http://localhost:3000/recommends/count/${_id}`)
//             .then(res => res.json())
//             .then(data => {
//                 setRecommendCount(data.count);
//             })
//             .catch(err => console.error(err));
//     }, [_id]);

//     return (
//         <div>
//             <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', border: '1px solid #ddd', borderRadius: '8px' }}>
                
//                 {Image && <img src={Image} alt={name} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />}
                
//                 <p><strong>Product name:</strong> {name}</p>
//                 <p><strong>Brand:</strong> {brand}</p>
//                 <p><strong>Title:</strong> {title}</p>
//                 <p><strong>Reason:</strong> {Reason}</p>
//                 <p><strong>Contact Email:</strong> {userName}</p>

//                 <div className='flex justify-between mx-5'>
//                     <div >
//                         <button className='btn btn-primary'>Total Recommends:{recommendCount}</button>
//                     </div>

//                     <div>
//                          <Link to={`/recommend/${_id}`}>
//                     <button className='btn btn-secondary'>Click here for Recommend</button>
//                 </Link>
//                     </div>
//                 </div>

               
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;


import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { LiaCommentAlt } from "react-icons/lia";

const ProductDetails = () => {
    const { user } = use(AuthContext);
    const product = useLoaderData();
    const { _id, name, Image, brand, title, Reason, email, userName } = product;

    const [recommendCount, setRecommendCount] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3000/recommends/count/${_id}`)
            .then(res => res.json())
            .then(data => {
                setRecommendCount(data.count);
            })
            .catch(err => console.error(err));
    }, [_id]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-100 flex items-center justify-center p-6">
            <div className="relative bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden w-full max-w-xl p-6 border border-white/30">

                {/* Image + Floating Badge */}
                <div className="relative group">
                    <img
                        src={Image}
                        alt={name}
                        className="w-full h-64 object-cover rounded-xl"
                    />
                    <div className="absolute top-4 left-4 bg-white/80 text-black px-3 py-1 rounded-full shadow-md text-sm font-semibold">
                        🔁 {recommendCount} Recommends
                    </div>

                    {/* Hover Reveal Info */}
                    <div className="absolute inset-0 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4 rounded-xl">
                        <p className="text-lg font-semibold mb-1">{userName || 'Unknown User'}</p>
                        <p className="text-sm">Email: {email}</p>
                    </div>
                </div>

                {/* Details */}
                <div className="mt-5 space-y-2 text-gray-800">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p><span className="font-medium">Brand:</span> {brand}</p>
                    <p><span className="font-medium">email :</span> {email}</p>
                    <p><span className="font-medium">Title:</span> {title}</p>
                    <p><span className="font-medium">Why Recommend:</span> {Reason}</p>
                </div>

                {/* Floating Action */}
                <div className="absolute bottom-6 right-6">
                    <Link to={`/recommend/${_id}`}>
                        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition flex items-center gap-2">
                            <LiaCommentAlt className="text-xl" />
                            Recommend here
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
