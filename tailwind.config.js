module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: {
        DEFAULT: "#79a325",
        alt: "#BEF264"
      },
      text: {
        DEFAULT: "#000",
        inverted: "#fff",
        header: "#000",
      },
    },
    fontFamily: {
      sans: ["Oxygen", "sans-serif"]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
