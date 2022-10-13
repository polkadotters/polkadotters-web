const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './pages/*.tsx',
        './pages/**/*.tsx',
        './components/**/*.tsx',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '6': '6px',
            '8': '8px',
        },
        fontFamily: {
            'display': ['Varela Round', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
            'body': ['Varela Round', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
            'sans': ['Varela Round', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        },
        colors: {
            ...colors,
            primary: colors.trueGray,
            cream: {
                100: '#FAF7F5',
                300: '#FFE8DF',
                500: '#EEE4DE',
                900: '#bab2ad'
            },
            background: 'white',
            accent: '#FFE8DF'
        },

        extend: {
            borderColor: {
                DEFAULT: '#d7d7d7'
            },
        },
    },
    variants: {
        extend: {
            transform: ['hover', 'focus'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
