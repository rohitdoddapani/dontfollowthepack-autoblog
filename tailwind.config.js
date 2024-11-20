/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        light: '#EDE0D4',
        primary: '#7F5539',
        secondary: '#9C6644',
        accent: '#B08968',
        dark: '#4A2C21',  // Add a new dark color (deep brown)
      },
    },
  },
  plugins: [],
}



