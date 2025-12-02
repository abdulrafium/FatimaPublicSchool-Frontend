/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0A4D68',
                secondary: '#088395',
                accent: '#05BFDB',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
            borderRadius: {
                '2xl': '1rem',
            }
        },
    },
    plugins: [],
}
