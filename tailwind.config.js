/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IRANBold: "'IRANYEKANBOLD,serif'",
        IRANLight: "'IRANYEKANLIGHT,serif'",
        IRANMed: "'IRANYEKANMEDIUM,serif'",
      },
      colors: {
        gray: "#B0B0B0",
        grayBorder: "#9E9E9E",
        gradient: {
          100: "#00102F",
          200: "#0052EB",
        },
        captcha: "#F2F6FE",
        title: "#212121",
        logintitle: "#616161",
        link: "#0050E5",
        error: "#ff0505",
      },
      borderRadius: {
        lg: "50px",
      },
    },
  },
  plugins: [],
};

