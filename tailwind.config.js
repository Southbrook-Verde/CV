module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      blue: {
        primary: '#1C8694',
        primaryLight: '#23A6B8',
        sky: '#75E0EE',
        logo: '#2DD4EB',
        font: '#239A9E',
      },
      green: {
        grass: '#0A9419',
        forest: '#286B2F',
        button: '#1EBF1B',
      },
      white: {
        base: '#FFFFFF',
      },
      black: {
        black: '#000000',
      },
      red: {
        DEFAULT: '#c21414',
      },
      yellow: {
        DEFAULT: '#FFD500',
      }


    },
    fontFamily: {
      sacramento: 'Sacramento',
      montserrat: 'montserrat',
      notoSansMoto: 'Noto Sans Mono',
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
       light: 300,
       normal: 400,
       medium: 500,
      semibold: 600,
       bold: 700,
      extrabold: 800,
      'extra-bold': 800,
       black: 900,
     },
    container: {
      center: true,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
