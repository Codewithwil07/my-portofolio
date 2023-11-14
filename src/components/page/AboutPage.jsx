import React from 'react';
import { image } from '../../constant/index';
import MainLayout from '../fragment/MainLayout';
import AboutDetail from '../layout/about/AboutDetail';
import SkillDetail from '../layout/about/SkillDetail';
import AboutSubheading from '../layout/about/AboutSubheading';

export default function About() {
    return (
        <MainLayout>
            <section className='grid grid-rows-skillSm md:grid-rows-skillMd'>
                <AboutDetail />
                <AboutSubheading />
                <SkillDetail />
            </section>
        </MainLayout>
    );
}