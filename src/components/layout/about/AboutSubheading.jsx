import React from 'react';
import Button from '../../element/Button/Button';

const AboutSubheading = () => {
    return (
        <div className='flex flex-col pt-20 md:flex md:flex-row md:items-center px-5'>
            <div className='w-[90%] md:w-[69%] text-2xl md:text-xl'>
                <h1 className='font-bold text-2xl md:text-xl'>
                    My Development stack is focused on performance &
                    accesibility with delightful interactions
                </h1>
                <p className='pt-8 text-2xl md:text-xl'>
                    Apart from my main domain, i also like branding, icon design
                    and minimal illustrations. i am an enthusiast of digital
                    art, motion design, WebGL.
                </p>
            </div>
            <Button.RoundedV2 size={`w-32 h-32`} />
        </div>
    );
};

export default AboutSubheading;
