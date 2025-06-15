import React, { use } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const ProductDetails = () => {

    const{user} = use(AuthContext)

    const ProductDetails = useLoaderData();
    console.log(ProductDetails);

    const{_id, name, Image, brand, title, Reason, email, userName} = ProductDetails

    return (
         <div>
            <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2>{name}</h2>
            {Image && <img src={Image} alt={name} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />}
            <p><strong>ID:</strong> {_id}</p>
            <p><strong>Brand:</strong> {brand}</p>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Reason:</strong> {Reason}</p>
            <p><strong>Contact Email:</strong> {userName}</p>
        <Link to={`/recommend/${_id}`}>
        <button className='btn'>Recommend</button>
        </Link>
        </div>
         </div>
    );
};

export default ProductDetails;