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
                gray: {
                    light: "#F0F5F9",
                    dark: "#1E2022",
                    primary: "#52616B",
                    secondary: "#C9D6DF",
                },
                "carmine-pink": {
                    light: "#FFFDF6",
                    dark: "#2B2E4A",
                    primary: "#E84545",
                    secondary: "#F2E7D5",
                },
                "viridian-green": {
                    light: "#E4F9F5",
                    dark: "#40514E",
                    primary: "#11999E",
                    secondary: "#30E3CA",
                },
                "light-taupe": {
                    light: "#FAF3E0",
                    dark: "#1E212D",
                    primary: "#B68973",
                    secondary: "#EABF9F",
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
                /bg-(alabaster|steel-blue|cyber-grape|carmine-pink|viridian-green|gray|light-taupe)-(light|dark|primary|secondary)/,
            variants: [],
        },
        {
            pattern:
                /text-(alabaster|steel-blue|cyber-grape|carmine-pink|viridian-green|gray|light-taupe)-(light|dark|primary|secondary)/,
            variants: [],
        },
        {
            pattern:
                /border-(alabaster|steel-blue|cyber-grape|carmine-pink|viridian-green|gray|light-taupe)-(light|dark|primary|secondary)/,
            variants: [],
        },
    ],
    plugins: [],
};
