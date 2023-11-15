import React from 'react';
import Button from '../../element/Button/Button';
import GmailComponenet from './GmailComponenet';
const ContactDetail = () => {
    return (
        <div className='flex flex-col gap-y-10 bg-sixth py-20 px-5'>
            <div className='flex flex-col gap-y-10 '>
                <h1 className='text-3xl font-bold w-full text-black'>
                    Lets talk about your projects.
                </h1>
                <p className='text-xl md:text-base text-gray-800'>
                    fill the form an d send in your queries, i can respond as
                    soon as i can. alternatively, you can reach out to at my
                    email addres.
                </p>
                <GmailComponenet />
            </div>
        </div>
    );
};

export default ContactDetail;
