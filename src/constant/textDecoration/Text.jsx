/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';

const Toles = ({ kalimat, bottom, left }) => {
    const kataKata = kalimat.split('');

    return (
        <>
            {kataKata.map((kata, index) => (
                <p key={index} className='absolute text-cyan-600 hidden' id='textAnimation'>
                    {kata.split('').map((huruf, hurufIndex) => (
                        <span
                            key={hurufIndex}
                            className={`origin-yeh bottom-[45px] absolute text-[9px] font-semibold `}
                            style={{
                                transform: `rotate(${index * 10}deg)`,
                            }}
                        >
                            {huruf}
                        </span>
                    ))}
                </p>
            ))}
        </>
    );
};

export default Toles;

const Github = () => {
    return <Toles kalimat='Facebook - facebook -facebook - facebook '  />;
};  

const Gmail = () => {
    return <Toles kalimat='G-mail - G-mail - G-mail - G-mail' />;
};

const Ig = () => {
    return <Toles kalimat='Instagram - Instagram - Instagram - Instagram' />;
};

const Linkedin = () => {
    return <Toles kalimat='Linkedin - Linkedin - Linkedin - Linkedin' />;
};

Toles.Github = Github;
Toles.Gmail = Gmail
Toles.Ig = Ig;
Toles.Linkedin = Linkedin;
