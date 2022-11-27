/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                "roboto-mono": ["'Roboto Mono'", "monospace"],
                roboto: ["'Roboto'", "sans-serif"],
                montserrat: ["'Montserrat'", "sans-serif"],
                lora: ["'Lora'", "serif"],
            },
            colors: {
                success: "#36D399",
                "success-dark": "#003320",
                info: "#3ABFF8",
                "info-dark": "#002B3D",
                warn: "#FBBD23",
                "warn-dark": "#382800",
                error: "#F87272",
                "error-dark": "#470000",
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
                "cookies-and-cream": {
                    light: "#E5D9B6",
                    dark: "#3B4032",
                    primary: "#6D9886",
                    secondary: "#D6C59A",
                },
                oxley: {
                    light: "#F7F7F7",
                    dark: "#393E46",
                    primary: "#6D9886",
                    secondary: "#F2E7D5",
                },
                flame: {
                    light: "#F7F7F7",
                    dark: "#393E46",
                    primary: "#D1512D",
                    secondary: "#F2E7D5",
                },
                "msu-green": {
                    light: "#F1F1F1",
                    dark: "#100F0F",
                    primary: "#0F3D3E",
                    secondary: "#BFC7B4",
                },
                eggshell: {
                    light: "#EEEDDE",
                    dark: "#141E27",
                    primary: "#203239",
                    secondary: "#E0DDAA",
                },
                "rose-red": {
                    light: "#FFEEDB",
                    dark: "#000000",
                    primary: "#BA135D",
                    secondary: "#FFD8CC",
                },
                "venetian-red": {
                    light: "#EEEBDD",
                    dark: "#1B1717",
                    primary: "#CE1212",
                    secondary: "#810000",
                },
                orange: {
                    light: "#F0E3CA",
                    dark: "#1B1A17",
                    primary: "#FF8303",
                    secondary: "#A35709",
                },
                patriarch: {
                    light: "#F1D4D4",
                    dark: "#000000",
                    primary: "#6A097D",
                    secondary: "#C060A1",
                },
                "green-sheen": {
                    light: "#F4E5C2",
                    dark: "#323232",
                    primary: "#295F4E",
                    secondary: "#6DB193",
                },
                "medium-vermilion": {
                    light: "#F7F0E9",
                    dark: "#424242",
                    primary: "#DF5333",
                    secondary: "#FFAF9B",
                },
                "space-cadet": {
                    light: "#F9F2D7",
                    dark: "#141829",
                    primary: "#21294C",
                    secondary: "#F2DEA8",
                },
                "japanese-laurel": {
                    light: "#EBE8BE",
                    dark: "#202E24",
                    primary: "#347A2A",
                    secondary: "#B3C87A",
                },
                "davy-grey": {
                    light: "#DFD8C8",
                    dark: "#41444B",
                    primary: "#52575D",
                    secondary: "#CABFAB",
                },
                "violets-are-blue": {
                    light: "#F2F2F2",
                    dark: "#181818",
                    primary: "#8758FF",
                    secondary: "#5CB8E4",
                },
                "brilliant-rose": {
                    light: "#FFF2F9",
                    dark: "#323232",
                    primary: "#FA4EAB",
                    secondary: "#F7DDEA",
                },
                strawberry: {
                    light: "#FDEFF4",
                    dark: "#524A4E",
                    primary: "#FF5C8D",
                    secondary: "#FFC0D3",
                },
                "deep-chestnut": {
                    light: "#EEEEEE",
                    dark: "#000000",
                    primary: "#BD4B4B",
                    secondary: "#EFB7B7",
                },
                carmine: {
                    light: "#EDEDED",
                    dark: "#171717",
                    primary: "#DA0037",
                    secondary: "#444444",
                },
                "royal-purple": {
                    light: "#E1E8EB",
                    dark: "#343A40",
                    primary: "#7952B3",
                    secondary: "#FFC107",
                },
                "caput-mortuum": {
                    light: "#E6E6E6",
                    dark: "#0F0F0F",
                    primary: "#532E1C",
                    secondary: "#C5A880",
                },
                "lcaput-mortuum": {
                    light: "#E6E6E6",
                    dark: "#0F0F0F",
                    primary: "#532E1C",
                    secondary: "#C5A880",
                },
                "dark-turquoise": {
                    light: "#EEEEEE",
                    dark: "#373A40",
                    primary: "#15BCC2",
                    secondary: "#686D76",
                },
                "fiery-rose": {
                    light: "#FFFEFF",
                    dark: "#354054",
                    primary: "#FC5D6B",
                    secondary: "#EFEFEF",
                },
                "usla-blue": {
                    light: "#F2F2F2",
                    dark: "#050102",
                    primary: "#4F6E8B",
                    secondary: "#EBCBC2",
                },
                khaki: {
                    light: "#E0E2E1",
                    dark: "#121214",
                    primary: "#BFAC9D",
                    secondary: "#614E4F",
                },
                "carolina-blue": {
                    light: "#EDF7F8",
                    dark: "#141C1E",
                    primary: "#5CACC3",
                    secondary: "#B9D3D6",
                },
                "camouflage-green": {
                    light: "#dfdfdf",
                    dark: "#575757",
                    primary: "#848469",
                    secondary: "#c7ccb1",
                },
                l: {
                    light: "#8EC3B0",
                    dark: "#FFFF",
                    primary: "#30423C",
                    secondary: "#BCEAD5",
                },
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
                /bg-(success|warn|info|error|success-dark|warn-dark|info-dark|error-dark)/,
            variants: [],
        },
        {
            pattern:
                /border-(success|warn|info|error|success-dark|info-dark|warn-dark|error-dark)/,
            variants: [],
        },
        {
            pattern:
                /text-(success|warn|info|error|success-dark|warn-dark|info-dark|error-dark)/,
            variants: [],
        },

        {
            pattern:
                /bg-(camouflage-green|carolina-blue|usla-blue|fiery-rose|dark-turquoise|caput-mortuum|carmine|deep-chestnut|strawberry|brilliant-rose|violets-are-blue|davy-grey|japanese-laurel|space-cadet|medium-vermilion|green-sheen|patriarch|alabaster|steel-blue|cyber-grape|carmine-pink|viridian-green|gray|light-taupe|oxley|flame|msu-green|eggshell|rose-red|venetian-red|l)-(light|dark|primary|secondary)/,
            variants: [],
        },
        {
            pattern:
                /text-(camouflage-green|carolina-blue|usla-blue|fiery-rose|dark-turquoise|caput-mortuum|carmine|deep-chestnut|strawberry|brilliant-rose|violets-are-blue|davy-grey|japanese-laurel|space-cadet|medium-vermilion|green-sheen|patriarch|alabaster|steel-blue|cyber-grape|carmine-pink|viridian-green|gray|light-taupe|oxley|flame|msu-green|eggshell|rose-red|venetian-red|l)-(light|dark|primary|secondary)/,
            variants: [],
        },
        {
            pattern:
                /border-(camouflage-green|carolina-blue|usla-blue|fiery-rose|dark-turquoise|caput-mortuum|carmine|deep-chestnut|strawberry|brilliant-rose|violets-are-blue|davy-grey|japanese-laurel|space-cadet|medium-vermilion|green-sheen|patriarch|alabaster|steel-blue|cyber-grape|carmine-pink|viridian-green|gray|light-taupe|oxley|flame|msu-green|eggshell|rose-red|venetian-red|l)-(light|dark|primary|secondary)/,
            variants: [],
        },
    ],
    plugins: [],
};
