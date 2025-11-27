/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-montserrat)", "sans-serif"],
          bellota: ["var(--font-bellota)", "cursive"],
          cooper: ["var(--font-cooper)", "serif"],
        },
      },
    },
    plugins: [],
  };
  
  export default config;