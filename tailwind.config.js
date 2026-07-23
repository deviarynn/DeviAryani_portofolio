/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0E17",
          soft: "#111726",
          card: "#141B2C",
          line: "#232B3D",
        },
        paper: "#F4F2EC",
        signal: {
          DEFAULT: "#FFB454",
          dim: "#B98342",
        },
        circuit: {
          DEFAULT: "#5EEAD4",
          dim: "#2E9E8F",
        },
        slate: {
          DEFAULT: "#8B93A7",
          soft: "#5C6478",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(245,243,238,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,238,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: 0.35, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.15)" },
        },
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        pulseSoft: "pulseSoft 2.6s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
