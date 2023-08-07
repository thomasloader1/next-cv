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
        'orange_custom': '#F29727',
        'grey_custom': '#A5A5A5',
        'dark_custom': '#191A19',
        'gradient_orange_start': '#F29727',
        'gradient_orange_end': '#F29727',
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
        'gradient_orange': ' radial-gradient(circle at 73.7% 100.82%, #f57638 0, #f57638 25%, #f57638 50%, #f57638 75%, #f57638 100%)',

      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
//'linear-gradient(190deg, #F7803C 0%, #F29727 100%)'