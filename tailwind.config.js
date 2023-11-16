/* eslint-disable no-dupe-keys */
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
                fourth: '#67b99a',
                fifth: '#d8d8d8',
                sixth: '#f0f0f0',
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
                aboutMd: '28rem 10rem',
                aboutLg: '39rem 10rem',
            },
            gridTemplateRows: {
                aboutSm: '55rem 55rem 93rem',
                aboutMd: '35rem 45rem 60rem',
                aboutXl: '35rem 35rem 25rem 25rem',
                projectSm: '10rem 30rem',
                projectMd: '10rem 30rem',
                contactSm: '10rem 81rem',
                contacttMd: '10rem 48rem',
            },
            // fontFamily: {
            //     Poppins: '',
            // },
        },
    },
    plugins: [],
};
