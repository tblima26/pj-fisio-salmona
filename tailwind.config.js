/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        playdisplay: "Playfair Display",
      },
      colors: {
        beige: {
          light: "#e6ddd8",
          DEFAULT: "#E4BA8F",
          dark: "#726154",
        },
      },
    },
  },
  plugins: [],
};
