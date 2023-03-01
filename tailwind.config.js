/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans' : ['Montserrat', 'ui-sans-serif', 'system-ui'],
      'serif' : ['EB Garamond', 'ui-serif', 'Georgia']
    },
    container: {
      center:true,

      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1350px',
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
