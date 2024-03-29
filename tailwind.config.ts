import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        black: '#000A0A',
        blue: '#00092C',
        'blue-2': '#001D40',
        'blue-3': '#0E193A',
        'blue-4': '#0073FF',
        'blue-5': '#003069',
        'blue-6': '#3E5065',
        yellow: '#FADB36',
        primary: '#03989E',
        white: '#FAFFFF',
        whiter: '#FFFFFF',
        'light-green': '#CDEAEC',
        grey: '#1A2323',
        green: '#003D40',
        'grey-2': '#F4F7FA',
        'grey-3': '#666C6C',
        'grey-4': '#4D5454',
        'grey-5': '#808484',
        'grey-6': '#333B3B',
        'grey-7': '#E5E7E7',
        'grey-8': '#A4A5A7',
        'red-10': '#BE0712',
        'green-10': '#629442',
        'orange-10': '#CE9A22',
        'grey-9': '#CCCECE'
      },
      backgroundImage: {
        'hero-bg': "url('/img/hero-bg.png')",
        'hero-bg-mob': "url('/img/hero-bg-mob.png')",
        'about-bg': "url('/img/about-bg.png')",
        'about-bg-mob': "url('/img/about-bg-mob.png')",
        'services-bg': "url('/img/services-bg.png')",
        'services-bg-mob': "url('/img/excellence.png')",
        'contact-bg': "url('/img/contact-bg.png')",
        'contact-bg-mob': "url('/img/contact-bg-mob.png')",
        'blog-bg': "url('/img/blog-bg.png')",
        'ebooks-bg': "url('/img/ebooks-bg.png')"
      }
    }
  },
  plugins: [],
  content: []
}
