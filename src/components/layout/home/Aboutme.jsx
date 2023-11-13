import React from 'react';
import Button from '../../element/Button/Button';
import { Link } from 'react-router-dom';

const Aboutme = () => {
    return (
        <section className='container py-20'>
            <div className='grid items-center md:grid md:grid-cols-aboutMd lg:grid-cols-aboutLg'>
                <div className='flex flex-col gap-y-5'>
                    <h1
                        className='font-extrabold text-3xl md:text-3xl lg:text-4xl'
                        id='darkModeTheme'
                    >
                        Delivering modern,
                    </h1>
                    <p
                        className='font-extrabold text-3xl md:text-3xl lg:text-4xl'
                        id='darkModeTheme'
                    >
                        cohesive and intuitive
                    </p>
                    <p
                        className='font-extrabold text-3xl md:text-3xl lg:text-4xl '
                        id='darkModeTheme'
                    >
                        web solutions.
                    </p>
                    <div className='flex flex-col max-w-xs md:max-w-screen-lg'>
                        <p className='text-gray-4B00 text-sm pb-5 md:text-base'>
                            I enjoyed designing meaningful experiences for
                            brands & buissines to help them target users.
                        </p>
                        <Link className='flex justify-center md:justify-start md:self-start md:ml-16' to={'/about'}>
                            <Button.Normal
                                variant='rounded-md'
                                color={'white'}
                            >
                                About me
                            </Button.Normal>
                        </Link>
                    </div>
                </div>
                <Button.Ractangle />
            </div>
        </section>
    );
};

export default Aboutme;
