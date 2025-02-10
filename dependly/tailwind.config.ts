import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    // "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-source-sans)',
  				'sans-serif'
  			]
  		},
  		colors: {
  			// background: 'hsl(var(--background))',
  			// foreground: 'hsl(var(--foreground))',
			primaryColor: "#0148AB",
			backgroundColor: "#EDF7F9",
			buttonColor : '#0148AB',
  			
  		},
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

