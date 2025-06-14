import React from 'react';
import AllProductCard from './AllProductCard';
import { useLoaderData } from 'react-router';

const Queries = () => {
    const products = useLoaderData();
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                {
                    products.map(product => <AllProductCard key={product._id} product={product}></AllProductCard>)
                }
            </div>
        </div>
    );
};

export default Queries;