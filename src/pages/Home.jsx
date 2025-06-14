import React from 'react';
import HeroSlider from './HeroSlider';
import { useLoaderData } from 'react-router';
import AllProductCard from './AllProductCard';

const Home = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='w-11/12 mx-auto'>
            <HeroSlider></HeroSlider>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                {
                    products.slice(0, 6).map(product => <AllProductCard key={product._id} product={product}></AllProductCard>)
                }
            </div>
        </div>
    );
};

export default Home;
