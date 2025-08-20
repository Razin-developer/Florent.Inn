/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				accent: '#00FFFF',
				silver: '#E5E4E2',
				muted: '#9CA3AF',
				muted2: '#6B7280',
			},
			fontFamily: {
				inter: ['Inter', 'system-ui', 'sans-serif'],
				orbitron: ['Orbitron', 'Inter', 'system-ui', 'sans-serif'],
				rajdhani: ['Rajdhani', 'Inter', 'system-ui', 'sans-serif'],
			},
			backgroundImage: {
				'grid-fade': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
				'panel-fade': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,1) 100%)',
				'cta': 'linear-gradient(90deg, rgba(0,255,255,0.2) 0%, rgba(0,255,255,0.1) 100%)',
			},
			boxShadow: {
				card: '0 0 0 1px rgba(192,192,192,0.1) inset',
			},
			borderRadius: {
				'2': '2px',
			},
		},
	},
	plugins: [],
}

