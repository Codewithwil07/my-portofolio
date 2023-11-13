/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            transformOrigin: {
                yeh: '0 100px',
            },
            colors: {

                primary: '#99e2b4',
                secondary: '#88d4ab',
                third: '#78c6a3',
                fifth: '#67b99a',
                fourth: '#dde6ed',

            },
            boxShadow: {
                primary: '0 0 10px 1px rgba(0, 0, 0, 0.2)',
                secondary:
                    'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
            },
            fontSize: {
                ssm: '10px',
            },
            fontWeight: {
                DoubleExtraBold: '1000',
            },
            gridTemplateColumns: {
                aboutMd: '500px 100px',
                aboutLg: '700px 100px',
            },
            gridTemplateRows: {
                skillSm: '60rem 50rem 69rem 15rem',
                skillMd: '35rem 35rem 35rem 20rem',
                projectSm: '10rem 28rem',
            },
            fontFamily: {
                Poppins: '',
            },
        },
    },
    plugins: [],
};
