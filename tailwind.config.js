/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
