/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6ba94f',
                'green-light': '#d5e5d8',
                'green-dark': '#14532d',
            }
        },
    },
    plugins: [],
}
