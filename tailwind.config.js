/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#212020;',
				secondary: '#d8b00f',
				light: '#eaeaea;',
				dark_secondary: '#ad8d0c',
				dark2_secondary: '#977b0b',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
