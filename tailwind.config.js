/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4A90E2',
          dark: '#2C5282',
        },
        secondary: {
          light: '#67C23A',
          dark: '#2E7D32',
        },
        background: {
          light: '#F8FAFC',
          dark: '#1A202C',
        },
        foreground: {
          light: '#2D3748',
          dark: '#E2E8F0',
        },
      },
    },
  },
  plugins: [],
}

