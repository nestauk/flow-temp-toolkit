module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          500: "#85Cebb",
          700: "#4da28d",
          900: "#0d503f",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
