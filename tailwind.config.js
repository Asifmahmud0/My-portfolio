/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#EAE8E0",

          "secondary": "#f66240",

          "accent": "#ff8e75",

          "neutral": "#2A303C",

          "base-100": "#FFFFFF",

          "info": "#111827",

          "success": "#8B4CD7",

          "warning": "#111827",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
