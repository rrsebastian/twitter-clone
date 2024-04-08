/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-1300': {'max': '1300px'}, 
        'custom-1173': {'max': '1173px'},
        'custom-1080': {'max': '1080px'},
        'custom-1050': {'max': '1050px'},
        'custom-795': {'max': '795px'},
        'custom-630': {'max': '630px'},
        'custom-500': {'max': '500px'}
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.overlay': {
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: '10',
        },
        '.custom-input': {
          width: '100%',
          borderRadius: '5px',
          border: '1px solid #d4d4d4',
          padding: '20px',
          fontSize: '18px',
          '&::placeholder': {
            color: '#000000',
            opacity: '0.6',
          },
          '&:focus': {
            outline: 'none',
          },
        },
        '.custom-select': {
          width: '100%',
          cursor: 'pointer',
          appearance: 'none',
          borderRadius: '5px',
          border: '1px solid #d4d4d4',
          backgroundColor: 'white',
          padding: '20px',
          paddingRight: '38px',
          fontSize: '18px',
          color: 'black',
          opacity: '0.6',
          '&:focus': {
            outline: 'none',
          },
        },


        '.custom-button': {
          position: 'relative',
          borderRadius: '9999px',
          padding: '15px 0px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: 'white',
          transition: 'background-color 0.25s ease-out',
          '&::before': {
            content: '""',
            position: 'absolute',
            borderRadius: '9999px',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: '-1',
            backgroundColor: '#1DA1F2',
            transition: 'filter 0.25s ease-out',
          },
          '&:hover::before': {
            filter: 'brightness(.90)',
          },
        },
        '.button-hover': {
          position: 'relative',
          color: 'white',
          transition: 'background-color 0.25s ease-out',
          '&::before': {
            content: '""',
            backgroundColor: '#1DA1F2',
            position: 'absolute',
            borderRadius: '9999px',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: '-1',
            backgroundColor: '#1DA1F2',
            transition: 'filter 0.25s ease-out',
          },
          '&:hover::before': {
            filter: 'brightness(.90)',
          },
        },

 '.box-shadow': {
          boxShadow: "rgba(99, 99, 99, 0.2) 1px 1px 20px 1px;"
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};


