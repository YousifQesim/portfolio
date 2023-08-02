/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        textColor:'	#6e57e0',
        grayColor:'#bcbac4',
        timeColor:"#a19fad",
        ProjectBackground:"hsl(250, 28%, 12%)",
        inputBackground:"hsl(250, 29%, 16%)",
        footerBack:"hsl(250, 30%, 8%);"
        
      },
      screens: {
        'vsm': '350px',
        'm':'400px',
      },

    },
  },
  plugins: [],
  
}
