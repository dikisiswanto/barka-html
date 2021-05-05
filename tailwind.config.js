module.exports = {
  purge: { mode: 'all', content: ['./src/html/**/*.html'] },
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--accent-color)',
      },
      maxWidth: {
        container: '1200px',
        slider: '1280px'
      },
      height: {
        slider: '30rem',
        inherit: 'inherit',
        initial: 'initial',
      },
      maxHeight: {
        initial: 'initial',
      },
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
      },
    },
    fontFamily: {
      heading: ['Roboto Slab', 'serif'],
      body: ['Lato', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
};
