/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import MainLayout from '../fragment/MainLayout';
import HeaderPage from '../fragment/HeaderPage';
import Card from '../element/Card/Card';
import image from '../../constant/image.js';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const project = [
    {
        name: 'Inkultur',
        banner: '/src/assets/Project/Project1.png',
        description:
            ' Inkultur is a blog app that discusses all about Programming & ui/ux design',
        stack: [
            `${image.React}`,
            `${image.Mongodb}`,
            `${image.Node}`,
            `${image.Express}`,
        ],
    },
];

const Project = () => {
    const controlCard = useAnimation();
    const [card, inCard] = useInView();

    React.useEffect(() => {
        if (inCard) {
            controlCard.start({ y: 0 });
        }
    }, [controlCard, inCard]);
    return (
        <MainLayout>
            <section className='grid grid-rows-projectSm gap-y-5 md:grid-rows-projectMd'>
                <HeaderPage.ProjectsHeader />
                <div className='bg-sixth px-5 py-20' id='card'>
                    <div
                        className='grid gap-y-16 md:grid-cols-3 md:gap-x-10 mt-5 md:mt-10'
                    >
                        {project.map((items) => (
                            <motion.div
                                className='flex flex-col gap-y-2 w-[50%rem]'
                                ref={card}
                                initial={{ y: 200 }}
                                animate={controlCard}
                                transition={{ duration: 0.5 }}
                                id='project'
                            >
                                <Card.Header img={image.Project1} />
                                <Card.Body
                                    title={items.title}
                                    description={items.description}
                                />
                                <div className='flex flex-col gap-y-3 gap-x-2'>
                                    <p className='font-bold text-lg md:text-2xl'>
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
                </div>
            </section>
        </MainLayout>
    );
};

export default Project;
