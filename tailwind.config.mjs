/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'accent': 'radial-gradient(50% 50%, #ffffff3d 0%, #9990 100%)',
			},
			fontFamily: {
			knewave: ['Knewave', 'cursive'],
			}
		},
	},
	plugins: [],
}
