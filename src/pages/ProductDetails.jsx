import React from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {

    const ProductDetails = useLoaderData();
    console.log(ProductDetails);

    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;