import type { Config } from 'tailwindcss'

export default <Partial<Config>>{

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
    configViewer: {
      // ... configViewer Options
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      // fontFamily: { headline: ["Oswald"] },
      colors: {
        bgBody: "#FFFFFF",
        primary: "#003595",
        secondary: "#0094AA",
        lightGray: "#5F5F5F",
        gradient: "#4f71c6",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
}