import { defineConfig } from "windicss/helpers";
import typography from "windicss/plugin/typography";
export default defineConfig({
  preflight: false,
  extract: {
    include: ["src/**/**/**/*.{html,vue,jsx,tsx,svelte,astro}"],
  },
  shortcuts: {
    "main-input":
      "block w-full py-3 px-4 text-base md:text-lg rounded-md bg-secondary-blue border-2 border-primary-green text-white border-solid placeholder:text-gray-400 focus:outline-secondary-green",
    "spacing-def": "px-mobile md:px-def",
    "btn-primary":
      "block w-max bg-primary-green hover:bg-secondary-green py-2 md:py-3 px-[12px] md:px-[20px] text-base font-medium uppercase rounded-md tracking-[.1rem] transition transition-colors",
    "btn-nav":
      "block w-max bg-primary-green hover:bg-secondary-green py-1 px-[18px] text-black font-medium text-sm lowercase rounded-md tracking-[.1rem] transition transition-colors",
  },
  plugins: [
    typography(),
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#fff",
            h1: {
              "color": "#fff",
            },
            h2: {
              "color": "#fff",
            },
            p: {
              "color": "#e3e3e3",
            },
          },
        },
      },
      colors: {
        primary: {
          green: "#6BB891",
          blue: "#020025",
          darker: "#000321"
        },
        secondary: {
          blue: "#090235",
          green: "#438c67",
        },
      },
      spacing: {
        def: "15%",
        mobile: "9%",
      },
      gridTemplateColumns: {
        solutions: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      gridColumn: {
        def: "3 / span 10",
        mobile: "2 / span 12",
      },
    },
  },
});
