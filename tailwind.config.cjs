const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				light: '#DDDED7',
				dark: '#313C3A',
				accent: '#7B7A5E',
				contrast: '#9F9A1E'
			},
			maxWidth: {
				'8xl': '86rem',
				'9xl': '92rem',
				'10xl': '104rem',
				'11xl': '116rem'
			},
			fontFamily: {
				'meno': ['meno-banner', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
				'filmotype': ['filmotype-lacrosse', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
			}
		}
	},

	plugins: []
};

module.exports = config;
