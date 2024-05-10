import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"background": "#E4E2DD",
			"primary": "#282726",
			"secondary": "#DB4A2B",
		},
		extend: {
			fontFamily: {
				sans: ['PPNeue', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
