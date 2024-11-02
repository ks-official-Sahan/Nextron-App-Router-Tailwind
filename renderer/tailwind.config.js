const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: ["class"],
  content: [
    "./renderer/app/**/*.{ts,tsx}",
    "./renderer/pages/**/*.{ts,tsx}",
    "./renderer/components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
    },
    extend: {},
  },
  plugins: [],
};
