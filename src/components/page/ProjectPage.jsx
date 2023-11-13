/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import MainLayout from '../fragment/MainLayout';
import HeaderPage from '../fragment/HeaderPage';
import Card from '../element/Card/Card';
import image from '../../constant/image.js';

const project = [
    {
        name: 'Inkultur',
        banner: '/src/assets/Project/Project1.png',
        description:
            ' Inkultur is a blog app that discusses all about Programming & ui/ux design',
        stack: ['Mongodb', 'Express', 'React', 'Node'],
    },
];

const Project = () => {
    return (
        <MainLayout>
            <section className='grid grid-rows-projectSm gap-y-5'>
                <HeaderPage.ProjectsHeader />
                <div className='bg-fourth p-3'>
                    <div className='grid gap-y-16 md:grid-cols-3 md:gap-x-10 mt-5 md:mt-10'>
                        {project.map((items) => (
                            <div className='flex flex-col'>
                                <Card.Header img={image.Project1} />
                                <Card.Body
                                    title={items.name}
                                    description={items.description}
                                />
                                <div className='flex gap-x-2'>
                                    {items.stack.map((item) => (
                                        <p className='bg-gray-400 py-1 px-5 font-normal text-white text-ssm rounded-lg'>
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Project;
