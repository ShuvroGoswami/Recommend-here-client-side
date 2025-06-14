import React from 'react';
import { Link } from 'react-router';

const AllProductCard = ({product}) => {
    const{_id, name, Image, brand, title, Reason, email} = product
    return (
        <div>
            <div className="border rounded shadow-md p-4">
        

            <img
                src={Image}
                className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className=" mb-2">{brand}</p>
            <p className=" mb-4">comment: {}</p>
            <Link to={`/ProductDetails/${_id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    View Details
                </button>
            </Link>
        </div>
        </div>
    );
};

export default AllProductCard;