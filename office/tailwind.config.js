import tailwindConfig from "frappe-ui/src/utils/tailwind.config";
/** @type {import('tailwindcss').Config} */
export default {
	presets: [tailwindConfig],

	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/frappe-ui/src/components/**/*.{vue,js,ts,jsx,tsx}",
		"../node_modules/frappe-ui/src/components/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
