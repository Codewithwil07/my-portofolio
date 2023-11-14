/* eslint-disable no-unused-vars */
import React from 'react';
import MainLayout from '../fragment/MainLayout';
import Hero from '../layout/home/Hero';
import Aboutme from '../layout/home/Aboutme';
import Projects from '../layout/home/Projects';
import Contact from '../layout/home/Contactme';

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <Aboutme />
            <Projects />
            <Contact />
        </MainLayout>
    );
}
