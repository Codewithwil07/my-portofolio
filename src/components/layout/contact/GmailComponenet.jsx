/* eslint-disable no-undef */
import React, { useState } from 'react';
import Button from '../../element/Button/Button';
import SocialMediaComponent from './SocialMediaComponent';
import axios from 'axios';

const GmailComponenet = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const sendEmail = async () => {
        try {
            const response = await axios.post('/send-email', {
                name,
                email,
                message,
            });
            console.log('Email Sent:', response.data);
        } catch (error) {
            console.error('Error Sending Email', error);
        }
    };

    return (
        <div className='flex flex-col gap-y-5 gap-x-10 md:w-full md:flex md:flex-row md:items-center md:justify-start'>
            <form className='md:w-[50%]'>
                <div className='flex flex-col gap-y-2'>
                    <label for='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='rounded-lg h-10 p-2 bg-white'
                    />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label for='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='rounded-lg h-10 p-2'
                    />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label for='message'>Message</label>
                    <textarea
                        className='resize-none overflow-y-scroll rounded-lg'
                        rows={'5'}
                        maxLength={'1000'}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button.Normal
                        color={'white'}
                        position={'start'}
                        variant={'mt-20 self-start rounded-lg self-start'}
                        onClick={sendEmail}
                    >
                        Send
                    </Button.Normal>
                </div>
            </form>
            <SocialMediaComponent />
        </div>
    );
};

export default GmailComponenet;
