/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                alabaster: {
                    light: "#F0EEE2",
                    dark: "#272727",
                    primary: "#1E5559",
                    secondary: "#C6C5BB",
                },
                "steel-blue": {
                    light: "#F9F7F7",
                    dark: "#112D4E",
                    primary: "#3F72AF",
                    secondary: "#E0DEDE",
                },
                "cyber-grape": {
                    light: "#ECECEC",
                    dark: "#151D3B",
                    primary: "#533E85",
                    secondary: "#B1A8B3",
                },
                orange: {
                    light: "#FFFDF6",
                    dark: "#1B1A17",
                    primary: "#F0A500",
                    secondary: "#F2E7D5",
                },
                "fire-opal": {
                    light: "#DDDDDD",
                    dark: "#222831",
                    primary: "#F05454",
                    secondary: "#C4B9BA",
                },
            },
            fontFamily: {
                dm: "'DM Mono', monospace",
                lora: "'Lora', serif",
                montserrat: "'Montserrat', sans-serif",
            },
        },
    },
    safelist: [
        "w-1/6",
        "w-2/6",
        "w-3/6",
        "w-4/6",
        "w-5/6",
        {
            pattern:
                /bg-(alabaster|steel-blue|cyber-grape|orange|fire-opal)-(light|dark|primary|secondary)/,
            variants: [],
        },
        {
            pattern:
                /text-(alabaster|steel-blue|cyber-grape|orange|fire-opal)-(light|dark|primary|secondary)/,
            variants: [],
        },
        {
            pattern:
                /border-(alabaster|steel-blue|cyber-grape|orange|fire-opal)-(light|dark|primary|secondary)/,
            variants: [],
        },
    ],
    plugins: [],
};
