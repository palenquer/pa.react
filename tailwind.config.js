module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },

    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      fontWeight: ["hover", "focus"],
      brightness: ['hover', 'focus'],
    },
  },
  plugins: [],
};
