/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Configure paths to your template files
    "./public/index.html",
  ],
  theme: {
    extend: {
      // Extend the default theme with custom values
      colors: {
        "custom-blue": "#00BADA",
      },
    },
  },
  plugins: [],
};
