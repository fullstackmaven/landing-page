/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '376px', // mobile
      md: '768px', // tablet
      lg: '1024px', // desktop
      xl: '1280px', // desktop
    },
    colors: {
      primary: '#000000', // TODO: we don't use pure black, `dark` should be our primary black color.
      dark: '#1D1E22',
      cultured: '#F6F4F2',
      'blue-gray': '#686F7C',
      white: '#FFFFFF',
      secondary: '#FF8551',
      'mountain-meadow': '#1FCD9C',
      pear: '#BFDB38',
      vermilion: '#E03E19',
      'light-orange': '#FFBB5C',
      'dark-orange': '#F95D05',
      'dark-gray': '#505050',
      success: '#D6F3F5',
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
      xl: '20px',
      full: '50%',
    },
    fontSize: {
      xxs: '12px',
      xs: '14px',
      s: '16px',
      base: '20px',
      l: '24px',
      xl: '32px',
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
        xl: '62px',
      },
    },
    extend: {
      lineHeight: {
        xxs: '14px',
        xs: '19px',
        base: '24px',
        s: '29px',
        l: '67px',
        xl: '86px',
      },
    },
  },
  plugins: [],
};
