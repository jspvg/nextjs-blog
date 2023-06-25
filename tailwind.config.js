//for preconfigured project using tailwindcss use command:
//npm create-next-app --tailwind with-tailwindcss-app 
module.exports = {
    content: [
        './pages**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        //for performance and avoiding false positives, being specific is important
    ],
};