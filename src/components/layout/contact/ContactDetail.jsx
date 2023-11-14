import React from 'react';
import Button from '../../element/Button/Button';
const ContactDetail = () => {
    return (
        <div className='flex flex-col gap-y-10 bg-fifth py-20 px-5'>
            <div className='flex flex-col gap-y-10 '>
                <h1 className='text-3xl font-bold w-full'>
                    Lets talk about your projects.
                </h1>
                <p className='text-xl md:text-base text-gray-800'>
                    fill the form an d send in your queries, i can respond as
                    soon as i can. alternatively, you can reach out to at my
                    email addres.
                </p>
            </div>
            <div className='flex flex-col gap-y-5 md:w-full md:flex md:flex-row md:items-center md:justify-between'>
                <form className='md:w-96'>
                    <div className='flex flex-col gap-y-2'>
                        <label for='name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            className='rounded-lg h-10 p-2 bg-white'
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label for='email'>Email</label>
                        <input
                            type='email'
                            name='email'
                            className='rounded-lg h-10 p-2'
                        />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label for='message'>Message</label>
                        <textarea
                            className='resize-none overflow-y-scroll rounded-lg'
                            rows={'5'}
                            maxLength={'1000'}
                        />
                        <Button.Normal
                            color={'white'}
                            position={'start'}
                            variant={'mt-20 self-start rounded-lg self-start'}
                        >
                            Send
                        </Button.Normal>
                    </div>
                </form>
                <div className='flex flex-col gap-y-10 py-20 md:relative md:bottom-10'>
                    <h1 className='font-extrabold text-3xl'>
                        Visit My social Media
                    </h1>
                    <Button.Normalv2 />
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;
