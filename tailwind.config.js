/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        skblack: {
          light: '#42403f',
          DEFAULT: '#282828',
          dark: '#32302f',
        },
        skred: {
          light: '#ff2828',
          DEFAULT: '#ff2828',
          dark: '#ff2828',
        },
        skwhite: {
          light: '#ebdbb2',
          DEFAULT: '#fbebc2',
          dark: '#cbcba2',
        },
        skgreen: {
          light: '#84a87f',
          DEFAULT: '#9aab46',
          dark: '#48680e',
        },
      },
    },
  },
  plugins: [],
};
