const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				theme: {
					light: '#1C3945',
					dark: '#FFFFFF'
				}
			},
		},
	},
	plugins: [],
};

module.exports = config;
