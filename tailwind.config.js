/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			xs: '380px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {
			colors: {
				accent: '#C92020',
				gray: {
					50: '#fafaf9',
					100: '#f5f5f4',
					150: '#eeedec',
					200: '#e7e5e4',
					250: '#dfdcdb',
					300: '#d6d3d1',
					350: '#BFBBB8',
					400: '#a8a29e',
					500: '#78716c',
					600: '#57534e',
					700: '#44403c',
					750: '#373330',
					800: '#292524',
					850: '#231f1e',
					900: '#1c1917',
					925: '#141210',
					950: '#0c0a09'
				}
			},
			maxWidth: {
				'8xl': '92rem;',
				'9xl': '106rem;',
				'10xl': '118rem;'
			},
			animation: {
				'spin-slow': 'spin 4s linear infinite'
			},
			fontFamily: {
				forma: [
					'"Forma"',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"'
				],
				scribe: [
					'"Scribe"',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"'
				]
			},
			aspectRatio: {
				'4/3': '4 / 3'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
