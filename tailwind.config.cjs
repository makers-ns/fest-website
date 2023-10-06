/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			aspectRatio: {
				'f19': '4928 / 3264',
				'f18': '1722 / 1149',
				'f17': '4608 / 3456',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ["light"],
	},
}
