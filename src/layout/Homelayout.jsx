import React from 'react';
import Header from '../Component/Header';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const Homelayout = () => {
    return (
        <div>
                <header className='mb-30'><Header></Header></header>
                <Outlet></Outlet>
                <Footer></Footer>
        </div>
    );
};

export default Homelayout;