import { image } from '../../../constant/index';
import Button from '../../element/Button/Button';

export default function Hero() {
    return (
        <section className='container mx-auto flex flex-col items-center gap-y-4 w-full py-20'>
            <div className='text-center'>
                <p className='text-4xl font-[500] text-gray-400 md:text-4xl relative top-2'>
                    Mern Stack,
                </p>
                <h1 className='font-extrabold text-4xl md:text-4xl' id='darkModeTheme'>
                    Frontend Developer
                </h1>
                <img
                    src={image.Coretan}
                    alt=''
                    className='w-60 relative -left-6'
                />
            </div>
            <p className='text-md md:text-base' id='darkModeTheme'>Specified In</p>
            <p className='text-md font-semibold md:text-base' id='darkModeTheme'>
                Website & Webpages
            </p>
            <Button.Rounded />
        </section>
    );
}
