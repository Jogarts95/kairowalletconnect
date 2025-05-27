/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-main': '#29172c',
        'custom-earth': '#d1ab91',
        'custom-aquamarine': '#35b9c2',
        'custom-blue-vibrant': '#2059d8',
        'custom-orange': '#FF7F50',
        'custom-orange-light': '#FFA07A'
      },
      fontSize: {
        '9xl': '8rem',
      },
      dropShadow: {
        'glow': '0 0 10px rgba(53, 185, 194, 0.3)',
      },
      backgroundImage: {
        'noise': "url('data:image/png;base64,data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAElBMVEUAAAD8/vz08vT09PT8/Pz///+Yqp1+AAAABnRSTlMAIiJm7u7/zmnsAAAAQUlEQVQ4y2NgwAX4DRgYGFhAhKoBAwb4DyWhAKYOLsDEwMDIAAZsDAwMzCgK0AEbigIG3IARUzWyQnQnEXA7XgAAM+4qhnyQ+xAAAAAASUVORK5CYII=')",
      },
      fontFamily: {
        'game': ['"Press Start 2P"', 'cursive'],
        'retro': ['"Bungee Shade"', 'cursive'],
        'fun': ['"Rubik Vinyl"', 'cursive'],
        'cinzel': ['Cinzel', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'roll': 'roll 3s ease-in-out infinite',
      },
      keyframes: {
        roll: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
} 