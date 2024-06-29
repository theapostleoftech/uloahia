/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './templates/**/*.html',
        './node_modules/flowbite/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    "50": "#f2fde8",
                    "100": "#e1fad1",
                    "200": "#c3f5a3",
                    "300": "#a5f075",
                    "400": "#87eb47",
                    "500": "#389e0d",
                    "600": "#2e8009",
                    "700": "#246206",
                    "800": "#1a4404",
                    "900": "#102602",
                    "950": "#081301"
                }
            }
        },
        fontFamily: {
            'body': [
                'Open Sans',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'system-ui',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ],
            'sans': [
                'Open Sans',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'system-ui',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ]
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
}



