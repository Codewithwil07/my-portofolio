/* eslint-disable react/jsx-key */
import React from 'react';
import { image } from '../../../constant';
import Card from '../../element/Card/Card';
import Button from '../../element/Button/Button';
import {Link} from 'react-router-dom'

const project = [
    {
        name: 'Inkultur',
        banner: '/src/assets/Project/Project1.png',
        description:
            ' Inkultur is a blog app that discusses all about Programming & ui/ux design',
        stack: ['Mongodb', 'Express', 'React', 'Node'],
    },
];

const Projects = () => {
    return (
        <section className='mx-auto py-20 flex flex-col gap-y-10'>
            <div className='flex flex-col items-center gap-y-5'>
                <img src={image.MiniWave1} alt='' className='w-72' />
                <h1
                    className='font-bold text-3xl text-center'
                    id='darkModeTheme'
                >
                    Here are few of my favorite projects
                </h1>
            </div>
            <div className='grid gap-y-16 md:grid-cols-3 md:gap-x-10'>
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
            <Link className='self-center' to={'/project'}>
                <Button.Normal
                    variant='bg-white rounded-[100px] border-[1px] border-black'
                    color={'black'}
                >
                    View all
                </Button.Normal>
            </Link>
        </section>
    );
};

export default Projects;
