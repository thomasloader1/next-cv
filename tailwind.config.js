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
        'dark_custom': '#3D3F42',
        'gradient_orange_start': '#FF9A03',
        'gradient_orange_end': '#ff9700',
      },
      'borderRadius': {
        custom: '13px',
        'card_work': '13px 13px 13px 0px',
        'card_work_pill': '13px 13px 0px 0px',
        'card_education': '13px 13px 0px 0px',
        'card_education_pill': '13px 13px 0px 13px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient_orange': 'linear-gradient(160deg, #ffb300 0%, #ff9700 30%, #ffad37 100%)',

      },
    },
  },
  plugins: [],
}
