/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'login-screen-dark': '#252422',
                'login-screen-text': '#212529',
                'custom-orange': '#FF9B00',
                'login-form-input': '#2D2D2D',
                'pos-green': '#22B573'
            },
            spacing: {
                '0': '0px',
                '7.1': '1.8rem',
                '13': '3.375rem',
                '56': '14rem',
            },
            lineHeight: {
                'extra': '25.2',
                'normal': '1',
                '1-4' : '1.4'
            },
            fontFamily: {
                'main': 'SamsungSansLight, sans-serif !important',
                'login': 'SamsungSansMedium, sans-serif'
            },
            fontSize: {
                'xsm': '0.625rem',
                'pos-16-4': ['1.6rem', '1.4'],
                'pos-18rem': '1.8rem'
            },
        },
    },
    plugins: [],
}
