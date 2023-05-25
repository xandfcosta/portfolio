/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
      },

      colors: {
        python: {
          100: '#376C99',
          200: '#F5C739',
        },
        cplusplus: {
          100: '#6295CB',
          200: '#202124',
        },
        csharp: {
          100: '#934B8F',
          200: '#202124',
        },
        javascript: {
          100: '#E4D04B',
          200: '#2F302E',
        },
        typescript: {
          100: '#2F72BC',
          200: '#F2F2F2',
        },
        java: {
          100: '#E11E23',
          200: '#0D83BE',
        },
        css3: {
          100: '#008ED1',
          200: '#0066B6',
        },
      },
    },
  },
  plugins: [],
}
