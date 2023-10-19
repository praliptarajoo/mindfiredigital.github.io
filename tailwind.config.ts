import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "mindfire-text-red": "#f00",
        "mindfire-text-black": "#3a3d41",
        "mindfire-footer-border-color": "#eff0f1",
        "mindfire-footer-text-color": "#819198",
        "mindfire-content-p-text-color": "#7f8082",

        //New themes
        "mf-red": "#F81F1F",
        "mf-dark": "#3A3D41",
        "mf-light-grey": "#7F8082"
      },
      // fontFamily: {
      //   "nunito-sans": ""
      // },
      fontSize: {
        "5.5xl": "3.25rem"
      },
    },
  },
  plugins: [],
}
export default config
