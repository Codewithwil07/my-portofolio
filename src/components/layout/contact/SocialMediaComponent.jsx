import React from 'react';
import Button from '../../element/Button/Button';
const SocialMediaComponent = () => {
    return (
        <div className='flex flex-col gap-y-10 py-20 md:relative md:bottom-10 md:w-[50%] text-black'>
            <h1 className='font-extrabold text-3xl'>Visit My social Media</h1>
            <Button.Normalv2 />
        </div>
    );
};

export default SocialMediaComponent;
