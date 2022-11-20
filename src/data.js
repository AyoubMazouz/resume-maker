import {
    MdClose,
    MdKeyboardArrowUp,
    MdKeyboardArrowDown,
    MdDarkMode,
    MdLightMode,
    MdLocationPin,
} from "react-icons/md";
import {
    BsFillFileEarmarkExcelFill,
    BsFillFileEarmarkDiffFill,
    BsPersonBoundingBox,
} from "react-icons/bs";
import { FaTrash, FaPhoneSquareAlt } from "react-icons/fa";
import { RiFolderAddFill, RiMailUnreadFill } from "react-icons/ri";
import { BiMenuAltLeft } from "react-icons/bi";
import { ImMail } from "react-icons/hi";

export const ICClose = MdClose;
export const ICDeleteItem = BsFillFileEarmarkExcelFill;
export const ICDeleteSection = FaTrash;
export const ICAddItem = BsFillFileEarmarkDiffFill;
export const ICAddSection = RiFolderAddFill;
export const ICArrowUp = MdKeyboardArrowUp;
export const ICArrowDown = MdKeyboardArrowDown;
export const ICMenu = BiMenuAltLeft;
export const ICDarkMode = MdDarkMode;
export const ICLightMode = MdLightMode;
export const ICPerson = BsPersonBoundingBox;
export const ICPhone = FaPhoneSquareAlt;
export const ICEmail = RiMailUnreadFill;
export const ICLocation = MdLocationPin;

export const MESSAGES = {
    moveSection: "Vous avez atteint la fin !",
    deleteSection: "Êtes-vous sûr de vouloir supprimer la section",
    reset: "En faisant cette action, vos données qui sont stockées dans le stockage local et tous les champs ci-dessous seront supprimés et tout sera réinitialisé, voulez-vous dire de le faire ?",
    save: "Vos informations ont été enregistrées avec succès sur votre stockage local",
    export: "Vos informations sont exportées au format <JSON> et elles ont été copiées dans votre presse-papiers",
    imgAspectRatio:
        "L'image n'est pas au format carré, le format d'image 1:1 est recommandé.",
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

export const ABOUT = {
    content: [
        "Une application créée avec React qui vous aide à créer des CV professionnelle rapidement (moins de 3 minutes) et gratuitement.",
        "Vous avez beaucoup de choix en ce qui concerne les couleurs et les designs, tous uniques.",
    ],
    contributors: ["Ayoub Mazouz", "Othmane Ferhani", "Chaimaa El Bahi"],
    version: "BETA V1.7.3",
    repository: "https://github.com/ayoubmazouz/resume-maker",
};

//

export const DOCUMENTATION = (
    <div className="text-gray-800 dark:text-gray-100 space-y-4">
        <h1 className="text-xl font-semibold text-center">RESUME MAKER</h1>
        <p>
            <img
                src="/screenshots/darkmode.png"
                className="my-2 rounded-md shadow-md w-full"
            />
        </p>
        <h3>COMMENT UTILISER:</h3>
        <h5>PANNEAU DE CONTRÔLE:</h5>
        <p>
            En haut de la page, vous trouverez le panneau de contrôle vous
            permet de faire plusieurs choses différentes.
        </p>
        <p>
            <img
                src="/screenshots/control-panel.png"
                className="my-2 rounded-md shadow-md w-full"
            />
        </p>
        <p>
            Commençons par le plus à gauche, vous y trouverez quelques
            paramètres :
        </p>
        <p>
            <strong>enregistrer:</strong> vous permet d&#39;enregistrer votre CV
            dans le stockage de votre navigateur local.
        </p>
        <p>
            <strong>réinitialiser:</strong> cette option supprime toutes les
            informations stockées dans le stockage local et efface les champs de
            saisie, prêt pour un nouveau CV.
        </p>
        <p>
            <strong>exporter:</strong> exportez votre CV sous forme de chaîne
            JSON copiée dans votre presse-papiers, cela vous permet
            d&#39;enregistrer plusieurs CV.
        </p>
        <p>
            <strong>importer:</strong> cette option vous permet de fournir une
            chaîne JSON donnée par l&#39;option d&#39;exportation, pour charger
            les CV précédents.
        </p>
        <p>
            <strong>darkmode / lightmode:</strong> bascule entre les modes clair
            et sombre.
        </p>
        <p>
            Au centre, tous les modèles disponibles, vous pouvez basculer entre
            eux en un clin d&#39;œil. Et à l&#39;extrême droite, vous avez le
            choix entre différentes options en matière de palette de couleurs.
        </p>
        <h5>ÉDITEUR:</h5>
        <p>
            L&#39;éditeur est divisé en sections, chaque section a
            <strong> (titre, identifiant et type) </strong>
            Vous pouvez manipuler une section à l&#39;aide de ces options :
        </p>
        <p>
            <img
                src="/screenshots/section-header.png"
                className="my-2 rounded-md shadow-md w-full"
            />
        </p>
        <ul>
            <li>
                Vous pouvez déplacer une section &quot;vers le haut&quot; ou
                &quot;vers le bas&quot; à l&#39;aide des flèches.
            </li>
            <li>Le supprimer en cliquant sur l&#39;icône de la corbeille.</li>
            <li>Changer le titre du titre.</li>
            <li>Supprimer / ajouter de nouveaux champs de saisie.</li>
        </ul>
        <h6>AJOUTER UNE NOUVELLE SECTION:</h6>
        <p>
            Pour ajouter une nouvelle section, il vous suffit de sélectionner le
            type à l&#39;aide de la liste déroulante au milieu, puis de cliquer
            sur l&#39;icône &quot;dossier&quot;.
        </p>
        <p>
            <img
                src="/screenshots/new-section.png"
                className="my-2 rounded-md shadow-md w-full"
            />
        </p>
        <p>
            Lorsque vous créez une nouvelle section, n&#39;oubliez pas de lui
            donner un titre, puis de remplir vos informations, vous pouvez
            ajouter autant de champs ou de sections que vous le souhaitez, mais
            certains modèles peuvent beuguer, lorsque vous remplissez beaucoup
            d&#39;informations, c&#39;est à tu!
        </p>
        <h5>TYPES DISPONIBLES:</h5>
        <h6>DATE LIST:</h6>
        <p>Ce type vous permet de fournir deux champs de saisie.</p>
        <p>
            <img
                src="/screenshots/date-list.png"
                className="my-2 rounded-md shadow-md w-full"
            />
        </p>
        <p>
            This type could be used for sections such as: Experience,
            Education...
        </p>
        <h6>LIST:</h6>
        <p>This one gives you a list and it is displayed vertically.</p>
        <p>
            <img
                src="/screenshots/list.png"
                className="my-2 rounded-md shadow-md w-full"
            />
        </p>
        <p>
            Ce type pourrait être utilisé pour des sections telles que :
            Expérience, Éducation...
        </p>
        <h6>labels:</h6>
        <p>Identique à la liste mais elle est affichée en ligne.</p>
        <p>
            <img
                src="/screenshots/labels.png"
                className="my-2 rounded-md shadow-md w-full"
            />
        </p>
        <p>
            Ce type peut être utilisé pour des sections telles que : loisirs,
            logiciels, langages de programmation...
        </p>
        <h6>Slider:</h6>
        <p>Le type Slider prend un nom et un nombre entre 0 et 6.</p>
        <p>
            <img
                src="/screenshots/slider.png"
                className="my-2 rounded-md shadow-md w-full"
            />
        </p>
        <p>
            Ce type pourrait être utilisé pour des sections telles que :
            langues, autres compétences...
        </p>
        <h3>COMMENT IMPRIMER:</h3>
        <p>
            L&#39;impression du produit final est très simple, vous devez
            modifier certaines variables d&#39;impression dans votre navigateur.
        </p>
        <h5>margin: none</h5>
        <h5>background graphic: true</h5>
        <h5>paper size: A4</h5>
        <p>
            <img
                src="/screenshots/print.png"
                className="my-2 rounded-md shadow-md w-full"
            />
        </p>
        <p>
            <strong>THIS IS IT, YOU DID IT!!</strong>
        </p>
    </div>
);
