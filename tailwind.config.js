/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            primary: '#F5CA79',
            dark: '#191818',
            gray: '#8D8E8F',
            black: '#000000',
            white: '#FFFFFF',
            red: '#D00D00',
            blue: '#0088FD',
            background: '#DEE8FF',
        },
        fontFamily: {
            poppins: '"Poppins", sans-serif',
            merriweather: '"Merriweather", serif',
        },
        extend: {},
    },
    plugins: [],
};
