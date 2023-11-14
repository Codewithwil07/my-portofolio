import React from 'react';
import { image } from '../../../constant';
import Button from '../../element/Button/Button';
import { Link } from 'react-router-dom';

const Contactme = () => {
    return (
        <div className='container mx-auto flex flex-col py-20 gap-y-10 text-center'>
            <img src={image.wave} alt='' className='w-[260px] self-center' />
            <p className='text-3xl font-bold' id='darkModeTheme'>
                Intrested to Working Together?
            </p>
            <Link to={'/contact'}>
                <Button.Normal variant='text-white rounded-full'>
                    Get in Touch
                </Button.Normal>
            </Link>
        </div>
    );
};

export default Contactme;