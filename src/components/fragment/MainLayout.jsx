/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../index.css';

const MainLayout = (props) => {
    const { children } = props;
    return (
        <div className='px-2 overflow-x-hidden font-figtree'>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
