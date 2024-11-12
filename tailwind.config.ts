import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: { 
        center:true,
        padding: "15px"
    },
      colors: {
        accent:"#08E95E"
      },
    },
  },
  plugins: [],
} satisfies Config;
