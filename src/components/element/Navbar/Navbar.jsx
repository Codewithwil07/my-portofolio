import React from 'react';
import { useState } from 'react';
import DarkLightMode from '../../../constant/Darkmode';
import ToggleMenu from './ToggleMenu';
import { Link } from 'react-router-dom';

export default function Navbar() {
    // eslint-disable-next-line no-unused-vars
    const [isMenuOpen, setMenuOpen] = useState(false);

    function handleClik() {
        setMenuOpen(!isMenuOpen)   
    }

    return (
        <div className='flex'>
            <ToggleMenu onClick={handleClik} />
            <div
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } flex flex-col items-start pt-28 gap-x-10 px-2 py-2 backdrop-blur-2xl h-screen text-2xl z-[1] gap-y-3 absolute left-0 top-0 w-full text-gray-400 rounded-md md:text-base lg:gap-x-[390px] lg:static lg:h-auto lg:flex lg:flex-row-reverse lg:items-center lg:pt-0 lg:text-black`}
            >
                <DarkLightMode />
                <div
                    className='flex flex-col gap-y-10 lg:flex md:text-base lg:flex-row lg:gap-x-1 lg:text-md'
                    id='header'
                >
                    <Link
                        href=''
                        to={'/about'}
                        className='px-2 rounded-sm bg-transparent'
                    >
                        About
                    </Link>
                    <Link
                        to={'/project'}
                        className='px-2 rounded-sm bg-transparent'
                    >
                        Project
                    </Link>
                    <a
                        href=''
                        className='px-2 rounded-sm bg-transparent'
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
}
