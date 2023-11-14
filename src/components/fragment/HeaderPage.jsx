/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
const HeaderPage = ({ children }) => {
    return <>{children}</>;
};

export default HeaderPage;

const AboutHeader = () => {
    return (
        <div className='flex items-end justify-center gap-x-3 md:relative md:top-12'>
            <h1 className='text-5xl font-extrabold text-start md:text-7xl'>
                About <span className='text-7xl'>.</span>
            </h1>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='200'
                height='200'
                viewBox='0 0 663 380'
                fill='none'
                className='pt-16'
            >
                <path
                    d='M20 34.9451V300.731C20 316.439 24.7682 332.206 36.0245 343.162C58.1697 364.716 77.2279 366.067 105.129 344.373C119.778 332.983 126.663 314.556 126.663 296.001V82.3762C126.663 66.6926 131.532 51.0431 142.484 39.8167C167.705 13.9634 187.313 12.9395 214.748 39.5002C226.464 50.8431 231.758 67.0911 231.758 83.3984V293.767C231.758 313.633 239.506 333.695 256.527 343.938C278.047 356.89 295.173 356.15 315.044 344.106C332.158 333.733 339.99 313.527 339.99 293.514V86.8219C339.99 68.4582 346.593 50.005 361.38 39.1162C384.328 22.2184 401.919 22.9388 423.082 39.2003C437.287 50.1156 443.516 68.1525 443.516 86.0675V290.746C443.516 312.346 452.535 334.854 472.625 342.788C485.473 347.861 496.728 347.688 508.708 342.937C528.742 334.99 537.631 312.382 537.631 290.83V84.0276C537.631 67.3385 542.99 50.4066 556.216 40.2281C580.963 21.1828 606.999 19.9425 628.848 42.4349C637.911 51.7647 641.048 65.0568 641.139 78.0632L643 344'
                    stroke='#70D767'
                    stroke-width='40'
                    stroke-linecap='round'
                />
            </svg>
        </div>
    );
};

const ProjectsHeader = () => {
    return (
        <div className='flex items-end justify-center md:relative md:top-12'>
            <h1 className='text-5xl font-extrabold text-start md:text-7xl'>
                Projects <span className='text-7xl'>.</span>
            </h1>
            <svg
                className='relative right-11'
                width='150'
                height='149'
                viewBox='0 0 117 116'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M67.7329 18.8495C67.9239 18.4318 68.2104 18.0592 68.5746 17.7548L71.2916 15.4836C73.9615 13.2518 78.4109 15.7491 77.5421 18.9918L69.3149 49.6959C68.8373 51.4784 66.8247 52.4879 64.8198 51.9507L58.1443 50.162C55.9248 49.5673 54.6952 47.3569 55.5473 45.4937L67.7329 18.8495Z'
                    fill='#70D767'
                />
                <path
                    d='M97.4667 64.4407C97.8843 64.6317 98.2569 64.9182 98.5614 65.2824L100.833 67.9994C103.064 70.6693 100.567 75.1188 97.3244 74.2499L66.6202 66.0228C64.8377 65.5451 63.8282 63.5326 64.3654 61.5276L66.1541 54.8522C66.7488 52.6327 68.9593 51.403 70.8224 52.2551L97.4667 64.4407Z'
                    fill='#70D767'
                />
                <path
                    d='M23.3312 44.7134C22.874 44.67 22.408 44.7318 21.9623 44.895L18.6368 46.1124C15.3691 47.3087 15.3071 52.4107 18.5498 53.2796L49.2539 61.5068C51.0364 61.9844 52.917 60.7462 53.4542 58.7412L55.2429 52.0658C55.8376 49.8463 54.5382 47.6762 52.4986 47.4825L23.3312 44.7134Z'
                    fill='#70D767'
                />
                <path
                    d='M58.6018 62.5239L58.6018 96.1903'
                    stroke='#348E2B'
                    stroke-width='9.61899'
                    stroke-linecap='round'
                />
                <circle
                    cx='59.308'
                    cy='56.0158'
                    r='12.2591'
                    fill='#348E2B'
                    stroke='#F9FCF8'
                    stroke-width='4.80949'
                />
            </svg>
        </div>
    );
};

HeaderPage.AboutHeader = AboutHeader;
HeaderPage.ProjectsHeader = ProjectsHeader;
