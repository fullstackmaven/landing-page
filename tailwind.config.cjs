/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': '376px', // mobile
			'md': '768px', //
			'lg': '1024px', // tablet
			'xl': '1280px',	// desktop
		},
		colors: {
			'primary': '#000000',
			'dark': '#1D1E22',
			'cultured': '#F6F4F2',
			'white': '#FFFFFF',
			'secondary': '#FF8551',
			'mountain-meadow': '#1FCD9C',
			'pear': '#BFDB38',
			'vermilion': '#E03E19',
			// todo: there are some other colors on design, find out what to do with them
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
			// todo: there are some exceptions in designs, find out what to do with them
		},
		borderRadius: {
			'none': '0',
			'xxs': '4px',
			'xs': '5px',
			's': '6px',
			DEFAULT: '8px',
			'l': '12px',
			'xl': '20px',
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
			}
		},
	},
	plugins: [],
}
