import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
    animation: {
        'sparkle-anim': 'sparkle 1s forwards',
        'bubbles-anim': 'bubbles 15s linear infinite',
        'fishes-left-anim': 'linear 15s infinite fishes-left',
        'fishes-right-anim': 'linear 20s infinite fishes-right',
        'wiggle-1-anim': 'wiggle 30s infinite',
        'wiggle-2-anim': 'wiggle 45s infinite',
        'rotate-anim': 'rotate 10s infinite'
    },
    keyframes: {
        sparkle: {
            "0%": {
                transform: "scale(0) rotate(0deg)"
            },
            "50%": {
                transform: "scale(1) rotate(90deg)"
            },
            "100%": {
                transform: "scale(0) rotate(180deg)"
            },
        },
        bubbles: {
            "0%": {
                transform: "translateY(0%)",
                opacity: "1"
            },
            "50%": {
                transform: "translateY(-250%)",
            },
            "75%": {
                transform: "translateY(-500%)",
            },
            "100%": {
                transform: "translateY(-1000%)",
                opacity: "0"
            },
        },
        'fishes-left': {
            "0%": {
                right: "-20%",
            },
            "100%": {
                right: "120%",
            },
        },
        'fishes-right': {
            "0%": {
                left: "-20%",
            },
            "100%": {
                left: "120%",
            },
        },
        wiggle: {
            '0%, 100%': {
                transform: "translateX(0%)",
                transformOrigin: "50% 50%"
            },
            "15%": {
                transform: "translateX(-10px) ",
            },
            "30%": {
                transform: "translateX(2px) ",
            },
            "45%": {
                transform: "translateX(-5px) ",
            },
            "60%": {
                transform: "translateX(2px)",
            },
            "75%": {
                transform: "translateX(-2px) ",
            },
        },
        "rotate": {
            "0%": {
                transform: "rotate(0deg)"
            },
            "100%": {
                transform: "rotate(360deg)"
            }
        }
    }
  },
  plugins: [],
} satisfies Config;
