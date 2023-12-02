/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
    },
    colors: {
      cultured: '#F6F4F2',
      primary: '#1D1E22',
      black: '#000000',
      playful: '#F11A7B',
      secondary: '#CCF095',
      white: '#FFFFFF',
      neon: '#DCFF50',
      purple: '#7835CD',
      orange: {
        700: '#FF8551',
        800: '#F95D05',
        900: '#D17724',
      },
      gray: {
        50: '#EBEBEB',
        75: '#CBCBCB',
        100: '#BEBEBE66',
        200: '#DEDCD3',
        300: '#DFDBD1',
        400: '#C0BFB2',
        500: '#2C303399',
        700: '#505050',
        800: '#6D6A6A',
        900: '#DADADA',
        1000: '#888',
      },
      red: {
        300: '#CB9390',
        700: '#F94005',
      },
      blue: {
        100: '#D6F3F5',
        200: '#3B88E9',
        500: '#2254B5',
      },
      green: {
        100: '#DDF7C7',
        300: '#449D5D',
      },
      yellow: {
        100: '#F2F0E9',
      },
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    spacing: {
      px: '0.063rem', //1px
      0: '0',
      0.5: '0.125rem', //2px
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
      15: '6rem', //96px
      16: '8rem', //128px
      17: '10rem', //160px
      18: '15rem', //240px
      19: '18.75rem', //300px
    },
    borderRadius: {
      none: '0',
      xs: '0.25rem', //4px
      s: '0.5rem', //8px
      l: '0.75rem', //12px
      xl: '1rem', //16px
      '2xl': '1.25rem', //20px
      '4xl': '3.125rem', //50px
      full: '50%',
    },
    fontSize: {
      xxs: '0.75rem', //12px
      xs: '0.875rem', //14px
      s: '1rem', //16px
      base: '1.25rem', //20px
      l: '1.5rem', //24px
      xl: '2rem', //32px
      '2xl': '2.5rem', //40px
      '3xl': '2.75rem', //44px
      '4xl': '3rem', //48px
      '5xl': '3.5rem', //56px
      '6xl': '4rem', //64px
      '7xl': '4.5rem', //72px
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', //16px
        sm: '1rem', //16px
        tablet: '2rem', //32px
        laptop: '3rem', //48px
      },
    },
    letterSpacing: {
      wide: '0.28px',
      wider: '0.32px',
      widest: '0.48px',
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/home-page/hero-image.jpeg')",
        'live-lecture-image': "url('/src/assets/home/se-course-image.jpeg')",
      },
      lineHeight: {
        xs: '1rem', //16px
        s: '1.25rem', //20px TODO: fix duplicate values
        base: '1.25rem', //20px
        l: '1.5rem', //24px
        '2xl': '2.75rem', //44px
        '3xl': '3.5rem', //56px
      },
      animation: {
        'ping-slow': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
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
