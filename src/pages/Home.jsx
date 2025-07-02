import React from 'react';
import HeroSlider from './HeroSlider';
import { useLoaderData } from 'react-router';
import AllProductCard from './AllProductCard';
import WhyChooseUs from '../component/WhyChooseUs ';
import NeedHelp from '../component/NeedHelp ';
import OurStory from '../component/OurStory';

const Home = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='w-11/12 mx-auto space-y-10'>
            <HeroSlider></HeroSlider>
            <WhyChooseUs></WhyChooseUs>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                {
                    products.slice(0, 6).map(product => <AllProductCard key={product._id} product={product}></AllProductCard>)
                }
            </div>
            <NeedHelp></NeedHelp>
        </div>
    );
};

export default Home;
