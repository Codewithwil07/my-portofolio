import { image } from '../../../constant/index';
import Button from '../../element/Button/Button';

export default function Hero() {
    return (
        <section className='container mx-auto flex flex-col items-center gap-y-4 w-full py-20'>
            <div className='text-center'>
                <p className='text-4xl font-[500] text-gray-400 md:text-4xl relative top-2'>
                    Mern Stack,
                </p>
                <h1
                    className='font-extrabold text-4xl md:text-4xl'
                    id='darkModeTheme'
                >
                    Frontend Developer
                </h1>
                <svg
                    className='relative bottom-8 right-0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='300'
                    height='100'
                    viewBox='0 0 1267 124'
                    fill='none'
                >
                    <path
                        d='M7 117C317.036 69.3021 759.72 15.0212 1139.79 6.16285C1140.95 6.13577 1141.18 7.77534 1140.07 8.11441L862.24 92.8758C861.079 93.2302 861.435 94.9594 862.642 94.8263L1260 51'
                        stroke='#007BFF'
                        stroke-width='12'
                        stroke-linecap='square'
                    />
                </svg>
            </div>
            <p className='text-md md:text-base' id='darkModeTheme'>
                Specified In
            </p>
            <p
                className='text-md font-semibold md:text-base'
                id='darkModeTheme'
            >
                Website & Webpages
            </p>
            <Button.Rounded />
        </section>
    );
}
