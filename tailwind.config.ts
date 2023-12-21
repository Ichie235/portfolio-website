import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    fontFamily: {
      taruno: [
        'Taruno Wide', "sans-serif",
      ],
    },

    colors: {
      'black': "rgba(36, 39, 43, 1)",
      'tr-black': "rgba(36, 39, 43, 0.5)",
      'red': "rgba(221, 45, 74, 1)",
      'white': "rgba(255, 254, 247 , 1)",
      'tr-white': "rgba(255, 254, 247 , 0.5)",
      'green': "rgba(45, 221, 192, 1)",
    }
  },
  darkMode: "class",
  plugins: [],
}
export default config
