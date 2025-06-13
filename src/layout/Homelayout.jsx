import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <Outlet></Outlet>
            
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default Homelayout;