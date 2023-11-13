/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Card = ({ children }) => {
    return <>${children}</>;
};

export default Card;

const Header = ({ img }) => {
    return (
        <div
            className='p-3 rounded-lg border-[1px] cursor-pointer'
            id='wrap-img-card'
        >
            <img src={img} alt='' />
        </div>
    );
};

const Body = ({ title, description }) => {
    return (
        <div className='flex flex-col pt-2'>
            <div className='flex justify-between item-center'>
                <h2 className='text-xl font-bold'>
                    {title}
                </h2>
                <Link to={'/Inkultur'} className='flex gap-x-2 items-center'>
                    <BsBoxArrowUpRight className='cursor-pointer' />
                </Link>
            </div>
            <p className='text-sm font-normal pb-3'>
                {description}
            </p>
        </div>
    );
};

Card.Header = Header;
Card.Body = Body;
