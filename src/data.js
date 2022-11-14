import {
    MdClose,
    MdKeyboardArrowUp,
    MdKeyboardArrowDown,
} from "react-icons/md";
import {
    BsFillFileEarmarkExcelFill,
    BsFillFileEarmarkDiffFill,
} from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { RiFolderAddFill } from "react-icons/ri";

export const ICClose = MdClose;
export const ICDeleteItem = BsFillFileEarmarkExcelFill;
export const ICDeleteSection = FaTrash;
export const ICAddItem = BsFillFileEarmarkDiffFill;
export const ICAddSection = RiFolderAddFill;
export const ICArrowUp = MdKeyboardArrowUp;
export const ICArrowDown = MdKeyboardArrowDown;

export const MESSAGES = {
    moveSection: "You have reached the end!",
    deleteSection: "Are you sure you want to delete section",
    reset: "By doing this action your data which is stored in local storage and all field below will be deleted and everything will reset, do you mean to do that?",
    save: "Your information has been saved successfully to your local storage",
    export: "Your information is exported as <JSON> and it has been copied to your clipboard",
    imgAspectRatio:
        "Image is not in square aspect, aspect ration 1:1 is recommended.",
};

export const LEVEL_LABELS = [
    "donkey",
    "médiocre",
    "passable",
    "assez bien",
    "bien",
    "très bien",
    "maternelle",
];

export const INIT_SECTION = {
    list: {
        id: "999",
        type: "list",
        title: "",
        content: [""],
    },
    date_list: {
        id: "999",
        type: "date_list",
        title: "",
        content: [
            {
                date: "",
                text: "",
            },
        ],
    },
    labels: {
        id: "999",
        type: "labels",
        title: "",
        content: [""],
    },
    slider: {
        id: "999",
        type: "slider",
        title: "",
        content: [
            {
                level: "3",
                name: "",
            },
        ],
    },
};

export const AVAILABLE_TYPES = Object.keys(INIT_SECTION);

export const DEFAULT_DATA = [
    {
        id: "0",
        type: "header",
        content: {
            img: "/assets/profile.png",
            firstName: "",
            lastName: "",
            title: "",
            age: "",
            phone: "",
            email: "",
            address: "",
        },
    },
    {
        id: "1",
        type: "date_list",
        title: "Formation",
        content: [
            {
                date: "",
                text: "",
            },
        ],
    },
    {
        id: "2",
        title: "Experience",
        type: "date_list",
        content: [
            {
                date: "",
                text: "",
            },
        ],
    },
    {
        id: "3",
        type: "list",
        title: "Competence",
        content: [""],
    },
    {
        id: "4",
        type: "labels",
        title: "Loisir",
        content: [""],
    },
    {
        id: "5",
        type: "slider",
        title: "Langues",
        content: [
            {
                name: "",
                level: "3",
            },
        ],
    },
    {
        idCount: 6,
        type: "add_section",
    },
];

const PREVIEW_DATA = [
    {
        id: "0",
        type: "header",
        content: {
            img: "/assets/profile.png",
            firstName: "Ayoub",
            lastName: "Mazouz",
            title: "software developer",
            age: "22 ans",
            phone: "07 70 75 91 06",
            email: "ayoub2000mazouz@gmail.com",
            address: "Sidi-Maârouf Lot Anna 4, 14_6, Casablanca.",
        },
    },
    {
        id: "1",
        type: "date_list",
        title: "Formation",
        content: [
            {
                date: "2019 - 2020",
                text: "Baccalauréat branche Science de la Vie et la Terre (SVT) à lycée Qadi Ayad.",
            },
            {
                date: "2021 - 2023",
                text: "Technicien Spécialisé en Infrastructure Informatique à ISFO (OFPPT) à Sidi Maârouf, Casablanca.",
            },
        ],
    },
    {
        id: "2",
        title: "Experience",
        type: "date_list",
        content: [
            {
                date: "Juil - Août 2022",
                text: "PHP/Laravel Backend Développeur à Sirecom.ma.",
            },
        ],
    },
    {
        id: "3",
        type: "list",
        title: "Competence",
        content: [
            "Travailler efficacement dans les environnements Windows et Linux.",
            "Algorithmes et structures de données.",
            "Travaillez avec des APIs, des bases de données relationnelles et basées sur des documents.",
            "Automatisation et virtualisation.",
            "Tests unitaires et débogage.",
            "Apprenant vite, tant que la documentation est disponible.",
            "Résolution de problèmes et pensée critique.",
            "Auditeur actif, apprentissage continu.",
            "Efficient: JavaScript, Python, Git, ReactJs, NodeJs, TailwindCSS.",
            "Familiar: C#, C, Lua, TypeScript, Bash, PowerShell, SASS, FireBase, BootStrap, Flask, ReactNative, Electron, PHP, Laravel.",
        ],
    },
    {
        id: "4",
        type: "labels",
        title: "Loisir",
        content: [
            "écouter des histoires",
            "regarder des films",
            "Documentaires",
            "Podcasts",
            "Technologie",
            "Astronomie",
            "Dessin",
            "Jeux vidéos",
            "cuisine",
        ],
    },
    {
        id: "5",
        type: "slider",
        title: "Langues",
        content: [
            {
                name: "Français",
                level: "3",
            },
            {
                name: "Anglais",
                level: "5",
            },
            {
                name: "Arabe",
                level: "6",
            },
        ],
    },
    {
        idCount: 6,
        type: "add_section",
    },
];
