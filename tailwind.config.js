/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg' : "url('/images/hero-bg.svg')"
      },
      fontFamily: {
        mainFont: ['Kanit', 'monospace'],
        titleFont: ['Rubik Mono One', 'monospace']
      }
    },
  },
  plugins: [],
}