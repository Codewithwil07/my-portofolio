/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { image } from '../../../constant';
import '../../../index.css';
import Text from '../../../constant/textDecoration/Text';

export default function Button({ children }) {
    return <>{children}</>;
}

const Rounded = () => {
    return (
        <div className='w-full flex flex-col bottom-10 gap-y-16 relative md:bottom-48'>
            <div className='w-full flex justify-center gap-x-10 top-10   relative md:top-36 md:gap-x-96 lg:gap-x-[500px]'>
                <a
                    href=''
                    className='relative flex justify-center items-center'
                    id='putar'
                >
                    <img
                        src={image.github}
                        alt=''
                        className='w-32 h-32 p-10  bg-fourth rounded-full'
                    />
                    <Text.Github />
                </a>
                <a
                    href=''
                    className=' relative flex justify-center items-center'
                    id='putar'
                >
                    <img
                        src={image.Tiktok}
                        alt=''
                        className='w-32 h-32 p-10  bg-fourth  rounded-full'
                    />
                    <Text.Gmail />
                </a>
            </div>
            <div className='flex justify-center gap-x-10 md:gap-x-12 lg:gap-x-28'>
                <a
                    href=''
                    className=' relative flex justify-center items-center  '
                    id='putar'
                >
                    <img
                        src={image.Ig}
                        alt=''
                        className='w-32 h-32 p-10  bg-third rounded-full'
                    />
                    <Text.Ig />
                </a>
                <a
                    href=''
                    className=' relative flex justify-center items-center'
                    id='putar'
                >
                    <img
                        src={image.Linkedin}
                        alt=''
                        className='w-32 h-32 p-10 bg-primary rounded-full'
                    />
                    <Text.Linkedin />
                </a>
            </div>
        </div>
    );
};

const Ractangle = () => {
    return (
        <div className='flex flex-col w-full relative right-[13%] md:right-[230%] lg:right-[220%] '>
            <a
                href=''
                className='animate-pulse bg-sky-900 px-2 py-2 rounded-lg mt-10 ml-[24rem] w-20 h-20 flex justify-center lg:w-28 lg:h-28 md:ml-[25rem] lg:ml-[32rem]'
            >
                <img src={image.React} alt='' className='w-14 md:w-32' />
            </a>
            <a
                href=''
                className='animate-spin bg-black px-2 py-2 rounded-lg -mt-10 ml-[18rem] w-16 h-16 flex justify-center lg:w-20 lg:h-20 md:ml-[19rem] lg:ml-[25rem]'
            >
                <img src={image.Figma} alt='' className='w-7 md:w-10' />
            </a>
            <a
                href=''
                className='animate-pulse bg-sky-200 px-2 py-2 rounded-lg  mt-5 ml-[15rem] w-28 h-28 flex justify-center lg:w-36 lg:h-36 md:ml-[16rem] lg:ml-[20rem]'
            >
                <img src={image.Visual} alt='' className='w-14 md:w-20' />
            </a>
            <a
                href=''
                className='animate-bounce bg-purple-900 px-2 py-2 rounded-lg  -mt-28 ml-[24rem]  w-14 h-14 flex justify-center lg::w-20 lg::h-20 md:-mt-28 md:ml-[25rem] lg:ml-[32rem]'
            >
                <img src={image.Tailwind} alt='' className='w-7 md:w-10' />
            </a>
            <div
                href=''
                className='animate-spin bg-yellow-500 px-2 py-2 rounded-lg -mt-14 ml-[28.5rem]  w-20 h-20 flex justify-center lg::w-24 lg::h-24 lg:ml-[39rem] md:-mt-20 md:ml-[32rem] lg:-mt-20'
            >
                <img src={image.Html} alt='' className='w-10 md:w-10' />
            </div>
            <a
                href=''
                className='animate-bounce bg-green-900 px-2 py-2 rounded-lg  mt-10 ml-[21rem] w-14 h-14 flex justify-center lg:w-20 lg:h-20 md:ml-[22rem] lg:ml-[26rem] md:mt-16 lg:mt-16'
            >
                <img src={image.Mongodb} alt='' className='w-10 md:w-16' />
            </a>
            <a
                href=''
                className='animate-bounce bg-purple-300 px-2 py-2 rounded-lg  -mt-20 ml-[26rem] w-16 h-16 flex justify-center lg:w-24 lg:h-24 md:ml-[28rem] md:-mt-18 lg:ml-[35rem] lg:-mt-24'
            >
                <img src={image.Bootstrap} alt='' className='w-10' />
            </a>
        </div>
    );
};

const Normal = ({ children, variant, color, position }) => {
    return (
        <button
            className={`bg-blue-700 py-2 px-12 text-xl self-center font-bold shadow-md text-${color} cursor-pointer ${variant}`}
        >
            {children}
        </button>
    );
};

const RoundedV2 = ({ size }) => {
    return (
        <div className='flex justify-center gap-x-10 pt-5'>
            <div className='flex flex-col gap-y-3'>
                <div className={`rounded-full bg-primary  ${size}`} />
                <div className={`rounded-full bg-secondary ${size}`} />
                <div className={`rounded-full bg-third ${size}`} />
            </div>
            <div className='flex flex-col gap-y-3 pt-10'>
                <div className={`rounded-full bg-third ${size}`} />
                <div className={`rounded-full bg-secondary ${size}`} />
                <div className={`rounded-full bg-primary ${size}`} />
            </div>
        </div>
    );
};

const RoundedV3 = () => {
    return (
        <div className='flex gap-x-3 items-end pt-10'>
            <div className='w-9 md:w-12 h-10 rounded-full bg-primary flex justify-center p-1 font-bold text-xl text-gray-200'>
                S
            </div>
            <div className='w-9 md:w-12 h-28 rounded-full bg-secondary flex justify-center p-1 font-bold text-xl text-gray-200'>
                K
            </div>
            <div className='w-9 md:w-12 h-36 rounded-full bg-fourth flex justify-center p-1 font-bold text-xl text-gray-700'>
                I
            </div>
            <div className='w-9 md:w-12 h-20 rounded-full bg-third flex justify-center p-1 font-bold text-xl text-gray-200'>
                L
            </div>
            <div className='w-9 md:w-12 h-44 rounded-full bg-secondary flex justify-center p-1 font-bold text-xl text-gray-200'>
                L
            </div>
            <div className='w-9 md:w-12 h-40 rounded-full bg-primary flex justify-center p-1 font-bold text-xl text-gray-200'>
                S
            </div>
        </div>
    );
};

Button.Rounded = Rounded;
Button.Ractangle = Ractangle;
Button.Normal = Normal;
Button.RoundedV2 = RoundedV2;
Button.RoundedV3 = RoundedV3;