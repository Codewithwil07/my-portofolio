/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
import React from 'react';
import { image } from '../../../constant';
import Card from '../../element/Card/Card';
import Button from '../../element/Button/Button';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Coretan from '../../../constant/Animate/Coretan';

const project = [
    {
        title: 'Inkultur',
        banner: '/src/assets/Project/Project1.png',
        description:
            ' is a blog app that discusses all about Programming & ui/ux design',
        stack: [
            `${image.React}`,
            `${image.Mongodb}`,
            `${image.Node}`,
            `${image.Express}`,
        ],
    },
];

const Projects = () => {
    const controlCard = useAnimation();
    const [card, inCard] = useInView();

    React.useEffect(() => {
        if (inCard) {
            controlCard.start({ y: 0 });
        }
    }, [controlCard, inCard]);

    return (
        <section className='pt-20 flex flex-col gap-y-10 px-5'>
            <div className='flex flex-col items-center gap-y-5'>
                <Coretan />
                <h1 className='font-bold text-3xl text-center md:text-4xl'>
                    Here are few of my favorite projects🚀
                </h1>
            </div>
            <div className='grid gap-y-10 md:grid-cols-2 mx-auto md:gap-x-10'>
                {project.map((items) => (
                    <motion.div
                        className='flex flex-col gap-y-2 w-[50%rem]'
                        ref={card}
                        initial={{ y: 200 }}
                        animate={controlCard}
                        transition={{ duration: 0.2 }}
                        id='cardProject'
                    >
                        <Card.Header img={image.Project1} />
                        <Card.Body
                            title={items.title}
                            description={items.description}
                        />
                        <div className='flex flex-col gap-y-3 gap-x-2'>
                            <p className='font-bold text-lg md:text-xl'>
                                Featured technologies used
                            </p>
                            <div className='flex'>
                                {items.stack.map((item) => (
                                    <img src={item} className='w-8' />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <Link className='self-center pt-10' to={'/project'}>
                <Button.Normal
                    variant='bg-white rounded-[100px] border-[1px]'
                    color={'black'}
                >
                    View all
                </Button.Normal>
            </Link>
        </section>
    );
};

export default Projects;
