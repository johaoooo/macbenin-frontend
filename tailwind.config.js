/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs du Bénin
        vert: '#008753',
        vertFonce: '#00633D',
        jaune: '#FCD116',
        jauneFonce: '#E6B800',
        rouge: '#E8112D',
        rougeFonce: '#C40E26',
        noir: '#1A1A1A',
        blanc: '#FFFFFF',
        // Aliases pour compatibilité
        primary: '#008753',
        primaryDark: '#00633D',
        secondary: '#FCD116',
        secondaryDark: '#E6B800',
        accent: '#E8112D',
        accentDark: '#C40E26',
      },
      fontFamily: {
        sans: ['Inter', 'Calibri', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
