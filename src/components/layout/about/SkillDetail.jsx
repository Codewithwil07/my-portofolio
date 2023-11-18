import React from 'react';
import Button from '../../element/Button/Button';
import Skill from './Skill';

const SkillDetail = () => {
    return (
        <div className='px-5'>
            <Button.RoundedV3 />
            <div className='grid grid-cols-2 gap-x-10 gap-y-5 py-16 md:grid-cols-3 xl:grid-cols-4'>
                <Skill />
            </div>
        </div>
    );
};

export default SkillDetail;
