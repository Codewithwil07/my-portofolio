/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../element/Navbar/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='w-full flex justify-between items-center relative py-2 px-2'>
            <Link to={'/'}>
                <p
                    className='font-extrabold text-start top-1 text-md relative lg:block lg:leading-5 md:text-xl cursor-pointer'
                    id='darkModeTheme'
                >
                    Willy Syahputra
                    <p className='text-gray-400 text-ssm font-light md:text-sm'>
                        Frontend Developer
                    </p>
                </p>
            </Link>
            <Navbar />
        </header>
    );
}
