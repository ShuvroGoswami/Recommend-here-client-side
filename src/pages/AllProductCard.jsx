
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AllProductCard = ({ product }) => {
    const { _id, name, Image, brand, title, Reason } = product;
    const [recommendCount, setRecommendCount] = useState(0);

    useEffect(() => {
        // Fetch recommend count for this product
        fetch(`https://b11a11-server-side-shuvro-goswami.vercel.app/recommends/count/${_id}`)
            .then(res => res.json())
            .then(data => setRecommendCount(data.count || 0))
            .catch(err => console.error("Error fetching recommend count:", err));
    }, [_id]);

    return (
        <div className="group perspective bg-gradient-to-tr from-indigo-100 via-purple-100">
            <div className="relative bg-white/30 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl p-4 transition-transform duration-500 transform group-hover:rotate-1 group-hover:scale-105 hover:shadow-2xl">
                
                {/* Floating Brand Label */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow">
                   Brand: {brand}
                </div>

                {/* Recommend Badge */}
                <div className="absolute top-3 right-3 bg-white border text-indigo-600 text-xs px-3 py-1 rounded-full shadow-sm">
                    {recommendCount} recommends
                </div>

                {/* Product Image */}
                <div className="overflow-hidden rounded-lg h-48 mb-3">
                    <img
                        src={Image}
                        alt={title}
                        className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Product Info */}
                <h2 className="text-lg font-bold text-gray-800 truncate">Product:{name}</h2>
                <p className="text-sm text-gray-700 mb-1">Title: <span className="font-semibold">{title}</span></p>
                <p className="text-sm text-gray-500 mb-3">
                    {Reason?.slice(0, 60) || 'No reason provided.'}...
                </p>

                {/* CTA Button */}
                <Link to={`/ProductDetails/${_id}`}>
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2 rounded-lg shadow hover:shadow-lg transition">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AllProductCard;

