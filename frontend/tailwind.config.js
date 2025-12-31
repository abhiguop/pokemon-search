/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'poke-red': '#ff0000',
                'poke-dark': '#212121',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
