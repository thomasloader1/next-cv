/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orange_custom': '#ff9700',
        'grey_custom': '#A5A5A5',
        'dark_custom': '#3D3F42'
      },
      'borderRadius': {
        custom: '13px',
        'card_work': '13px 13px 13px 0px',
        'card_work_pill': '13px 13px 0px 0px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
