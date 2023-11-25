/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      tablet: '768px',
      laptop: '1024px',
    },
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
      px: '1px',
      0: '0',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '64px',
      14: '86px',
      15: '160px',
      16: '240px',
      17: '300px',
    },
    borderRadius: {
      none: '0',
      xs: '4px',
      s: '8px',
      l: '12px',
      full: '50%',
    },
    fontSize: {
      xxs: '12px',
      xs: '14px',
      s: '16px',
      base: '20px',
      l: '24px',
      '2xl': '40px',
      '3xl': '44px',
      '4xl': '56px',
      '5xl': '72px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '32px',
        lg: '48px',
      },
    },
    extend: {
      lineHeight: {
        xs: '16px',
        s: '20px',
        base: '20px',
        l: '24px',
        '2xl': '44px',
        '3xl': '56px',
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
