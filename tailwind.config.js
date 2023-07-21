/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'runwild-light-pink': '#FC52FF',
        'runwild-dark-pink': '#AA01AD',
        'runwild-light-purple': '#560174',
        'runwild-dark-purple': '#2D0B38',
        'runwild-light-gray': '#7D7D7D',
        'runwild-dark-gray': '#5E5E5E',
        'runwild-darker-gray': '#2B2A2A',
      },
    },
  },
  plugins: [],
}
