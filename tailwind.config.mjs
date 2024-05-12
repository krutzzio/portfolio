import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		colors: {
			"main": "#EB5E28",
			"background": "#FFFCF2",
			"background-dark": "#252422",
			"primary": "#403D39",
			"primary-dark": "#CCC5B9",

		},
		extend: {
			fontFamily: {
				sans: ['PPNeue', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
