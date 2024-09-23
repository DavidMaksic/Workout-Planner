/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['src/**/*.{html,js,jsx}'],
   theme: {
      extend: {
         colors: {
            primary: {
               100: '#e0e0e2',
               200: '#c1c1c5',
               300: '#a1a2a9',
               400: '#82838c',
               500: '#63646f',
               600: '#4f5059',
               700: '#3b3c43',
               800: '#28282c',
               900: '#141416',
            },
            secondary: {
               100: '#e0dfe2',
               200: '#c2c0c5',
               300: '#a3a0a8',
               400: '#85818b',
               500: '#66616e',
               600: '#524e58',
               700: '#3d3a42',
               800: '#29272c',
               900: '#141316',
            },
            tertiary: {
               100: '#ebede8',
               200: '#d7dbd1',
               300: '#c2c8ba',
               400: '#aeb6a3',
               500: '#9aa48c',
               600: '#7b8370',
               700: '#5c6254',
               800: '#3e4238',
               900: '#1f211c',
            },
            redAlt: {
               100: '#f7efef',
               200: '#f0e0df',
               300: '#e8d0ce',
               400: '#e1c1be',
               500: '#d9b1ae',
               600: '#ae8e8b',
               700: '#826a68',
               800: '#574746',
               900: '#2b2323',
            },
         },

         gridTemplateRows: {
            layout: 'auto auto auto 1fr auto auto',
         },
      },

      screens: {
         sm: { max: '639px' },
      },
   },
   plugins: [],
};
