/** @type {import('tailwindcss').Config} */
module.exports = {
  // Just-in-Time
  mode: 'jit',
  // 一定要加下面這，將dark: 轉為class
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    // - 改預設
    fontFamily: {
      sans: [ 'Kdam Thmor Pro','Roboto', 'Noto Sans TC', '微軟正黑體', 'sans-serif']
    },
    // - 增加擴充
    extend: {
      // value固定(參考文件)
      colors: {
        // 覆蓋
        primary: '#000',
        // bg-secondary-200
        secondary: {
          100: '#fa0',
          200: '#faa'
        },
        // 客制 bg-custcolor-primary
        custcolor:{
          primary: '#26252F',
          'light-primary' : '#787878',
          secondary: '#D38E4E',
          'light-secondary': '#DCA46E',
          'gray': '#B7B7B7',
          'light-gray': '#FAFAFA',
          'secondary-gray': '#E5E5E5',
          black: '#433D3B',
          'secondary-black': '#111722',
          'third-black': '#29313C',
          'fourth-black': '#171E26',
          'primary-blue': '#5D86AF',
          'primary-green': '#8BC34A',
          'primary-red': '#FF5722',
        }
      },
      // 新增字體 font-google
      fontFamily: {
        'google': ['Montserrat']
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      // backgroundImage為value規則
      // backgroundImage: theme => ({
      //   'aboutImg1': "",
      //   'aboutImg2': "",
      //   'aboutImg3': "",
      // }),
    },
  },
  plugins: [],
}
