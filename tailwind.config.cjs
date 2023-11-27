/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      tablet: '768px',
      laptop: '1024px',
    },
    colors: {
      primary: '#1D1E22',
      black: '#000000',
      accent: '#F95D05',
      playful: '#F11A7B',
      secondary: '#CCF095',
      white: '#FFFFFF',
      neon: '#DCFF50',
      orange: '#FF8551',
      gray: {
        100: '#BEBEBE66',
        200: '#DEDCD3',
        300: '#DFDBD1',
        400: '#C0BFB2',
        500: '#2C303399',
        700: '#505050',
      },
      red: {
        300: '#CB9390',
        700: '#F94005',
      },
      blue: {
        100: '#D6F3F5',
        500: '#2254B5',
      },
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    spacing: {
      px: '0.063rem', //1px
      0: '0',
      1: '0.25rem', //4px
      2: '0.5rem', //8px
      3: '0.75rem', //12px
      4: '1rem', //16px
      5: '1.25rem', //20px
      6: '1.5rem', //24px
      7: '1.75rem', //28px
      8: '2rem', //32px
      9: '2.25rem', //36px
      10: '2.5rem', //40px
      11: '2.75rem', //44px
      12: '3rem', //48px
      13: '4rem', //64px
      14: '5.25rem', //84px
      15: '10rem', //160px
      16: '15rem', //240px
      17: '18.75rem', //300px
    },
    borderRadius: {
      none: '0',
      xs: '0.25rem', //4px
      s: '0.5rem', //8px
      l: '0.75rem', //12px
      full: '50%',
    },
    fontSize: {
      xxs: '0.75rem', //12px
      xs: '0.875rem', //14px
      s: '1rem', //16px
      base: '1.25rem', //20px
      l: '1.5rem', //24px
      '2xl': '2.5rem', //40px
      '3xl': '2.75rem', //44px
      '4xl': '3.5rem', //56px
      '5xl': '4.5rem', //72px
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', //16px
        sm: '1rem', //16px
        md: '2rem', //32px
        lg: '3', //48px
      },
    },
    extend: {
      lineHeight: {
        xs: '1rem', //16px
        s: '1.25rem', //20px
        base: '1.25rem', //20px
        l: '1.5rem', //24px
        '2xl': '2.75rem', //44px
        '3xl': '3.5rem', //56px
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
