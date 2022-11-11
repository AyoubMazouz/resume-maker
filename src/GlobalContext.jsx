// React Imports.
import React, { createContext, useContext, useState } from "react";

import CVClassic from "./resumes/Classic/CVClassic";
import CVDefault from "./resumes/Default/CVDefault";
import CVSide from "./resumes/Side/CVSide";

const DEFAULT_DATA = [
    {
        location: "head",
        types: ["header"],
        title: "",
        contents: [
            {
                img: "/assets/profile.png",
                firstName: "Mazouz",
                lastName: "Ayoub",
                title: "Software Developer",
                age: "22 ans",
                phone: "07 70 75 91 06",
                email: "ayoub2000mazouz@gmail.com",
                address: "Sidi-Maârouf Lot Anna 4, 14_6, Casablanca.",
            },
        ],
    },
    {
        location: "body",
        types: ["date_list", "date_list"],
        title: "Formation",
        contents: [
            {
                id: "0",
                date: "2019 - 2020",
                text: "Baccalauréat branche Science de la Vie et la Terre (SVT) à lycée Qadi Ayad.",
            },
            {
                id: "1",
                date: "2021 - 2023",
                text: "Technicien Spécialisé en Infrastructure Informatique à ISFO (OFPPT) à Sidi Maârouf, Casablanca.",
            },
        ],
    },
    {
        location: "body",
        title: "Experience",
        types: ["date_list"],
        contents: [
            {
                id: "2",
                date: "Juil - Août 2022",
                text: "PHP/Laravel Backend Développeur à Sirecom.ma.",
            },
            {
                id: "3",
                date: "",
                text: "",
            },
        ],
    },
    {
        location: "body",
        types: ["list", "labels", "labels"],
        title: "Competence",
        contents: [
            [
                "Travailler efficacement dans les environnements Windows et Linux.",
                "Algorithmes et structures de données.",
                "Travaillez avec des APIs, des bases de données relationnelles et basées sur des documents.",
                "Automatisation et virtualisation.",
                "Tests unitaires et débogage.",
                "Apprenant vite, tant que la documentation est disponible.",
                "Résolution de problèmes et pensée critique.",
                "Auditeur actif, apprentissage continu.",
            ],
            {
                label: "efficient",
                values: [
                    "JavaScript",
                    "Python",
                    "Git",
                    "ReactJs",
                    "NodeJs",
                    "TailwindCSS",
                ],
            },
            {
                label: "familiar",
                values: [
                    "C#",
                    "C",
                    "Lua",
                    "TypeScript",
                    "Bash",
                    "PowerShell",
                    "SASS",
                    "FireBase",
                    "BootStrap",
                    "Flask",
                    "ReactNative",
                    "Electron",
                    "PHP",
                    "Laravel",
                ],
            },
        ],
    },
    {
        location: "body",
        types: ["labels"],
        title: "Loisir",
        contents: [
            {
                label: "",
                values: [
                    "écouter des histoires",
                    "regarder des films",
                    "Documentaires",
                    "Podcasts",
                    "Technologie",
                    "Astronomie",
                    "biologie",
                    "Dessin",
                    "Jeux vidéos",
                    "cuisine",
                ],
            },
        ],
    },
    {
        location: "body",
        types: ["slider", "slider", "slider"],
        title: "Langues",
        contents: [
            {
                name: "Français",
                level: "3",
                label: "bien",
            },
            {
                name: "Anglais",
                level: "5",
                label: "très bien",
            },
            {
                name: "Arabe",
                level: "6",
                label: "maternelle",
            },
        ],
    },
];

const cvComps = {
    default: <CVDefault />,
    classic: <CVClassic />,
    // side: <CVSide />,
};

const cps = [
    "steel-blue",
    "alabaster",
    "cyber-grape",
    "gray",
    "carmine-pink",
    "viridian-green",
    "light-taupe",
];
const cvs = Object.keys(cvComps);

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}
export function GlobalContextProvider({ children }) {
    const [cp, setCp] = useState(cps[0]);
    const [cv, setCv] = useState(cvs[0]);

    const [data, setData] = useState(DEFAULT_DATA);

    return (
        <GlobalContext.Provider
            value={{ cp, setCp, cps, cv, setCv, cvs, cvComps, data, setData }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
