const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./pages/**/*.js'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: colors.black,
				white: colors.white,
				gray: colors.gray,
				emerald: colors.emerald,
				indigo: colors.indigo,
				yellow: colors.yellow,
				rosered: '#ed3030',
			},
		},
	},
	plugins: [],
};