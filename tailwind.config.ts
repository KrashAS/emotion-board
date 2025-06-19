import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    //darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-roboto-sans)"],
            },
        },
    },
    plugins: [],
};

export default config;
