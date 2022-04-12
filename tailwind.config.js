module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		fontFamily: {
			sans: ["'Oxygen'", 'sans-serif']
		},
		extend: {
			colors: {
				primary: '#E35252',
				'primary-dark': '#cf5454',
				'white-off': '#F2f2f2',
				'black-off': '#2a2a2a'
			},
			boxShadow: {
				card: '0px 0px 30px -10px rgba(0, 0, 0, 0.25)'
			},
			container: {
				screens: {
					xl: '1200px',
					'2xl': '1200px'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
}
