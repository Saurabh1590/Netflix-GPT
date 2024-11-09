module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to your React component files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
};
