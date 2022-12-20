import CVClassic from "../resumes/Classic/CVClassic";
import CVDefault from "../resumes/Default/CVDefault";
import CVSide from "../resumes/Side/CVSide";
import CVSimple from "../resumes/simple/CVSimple";
import CVNoImg from "../resumes/NoImg/CVNoImg";
import LetterDefault from "../resumes/Default/LetterDefault";

// <- Components Start

export const CV_OBJ = {
    default: <CVDefault />,
    classic: <CVClassic />,
    side: <CVSide />,
    simple: <CVSimple />,
    noImg: <CVNoImg />,
};
export const LETTERS_OBJ = {
    default: <LetterDefault />,
    classic: <LetterDefault />,
    side: <LetterDefault />,
    simple: <LetterDefault />,
    noImg: <LetterDefault />,
};

export const CV_LABELS = Object.keys(CV_OBJ);
export const LETTER_LABELS = Object.keys(LETTERS_OBJ);
export const CV_COMPS = Object.values(CV_OBJ);
export const LETTER_COMPS = Object.values(LETTERS_OBJ);

// Components End ->

export const MESSAGES = {
    moveSection: "Vous avez atteint la fin !",
    deleteSection: "Êtes-vous sûr de vouloir supprimer la section",
    reset: "En faisant cette action, vos données qui sont stockées dans le stockage local et tous les champs ci-dessous seront supprimés et tout sera réinitialisé, voulez-vous dire de le faire ?",
    save: "Vos informations ont été enregistrées avec succès sur votre stockage local",
    export: "Vos informations sont exportées au format <JSON> et elles ont été copiées dans votre presse-papiers",
    imgAspectRatio:
        "L'image n'est pas au format carré, le format d'image 1:1 est recommandé.",
};

export const STYLES = {
    fontSize: {
        0: "text-xs",
        1: "text-sm",
        2: "text-base",
        3: "text-lg",
    },
    leading: {
        0: "leading-4",
        1: "leading-5",
        2: "leading-6",
        3: "leading-7",
        4: "leading-8",
    },
};

export const CPS = [
    "steel-blue",
    "alabaster",
    "cyber-grape",
    "gray",
    "carmine-pink",
    "viridian-green",
    "caput-mortuum",
    "dark-turquoise",
    "fiery-rose",
    "usla-blue",
    "carolina-blue",
    "camouflage-green",
    "light-taupe",
    "oxley",
    "flame",
    "msu-green",
    "eggshell",
    "rose-red",
    "venetian-red",
    "patriarch",
    "green-sheen",
    "medium-vermilion",
    "space-cadet",
    "japanese-laurel",
    "davy-grey",
    "violets-are-blue",
    "brilliant-rose",
    "strawberry",
    "deep-chestnut",
    "carmine",
    "l",
];

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

export const ABOUT = {
    content: [
        "Une application créée avec React qui vous aide à créer des CV professionnelle rapidement (moins de 3 minutes) et gratuitement.",
        "Vous avez beaucoup de choix en ce qui concerne les couleurs et les designs, tous uniques.",
    ],
    contributors: ["Ayoub Mazouz", "Othmane Ferhani", "Chaimaa El Bahi"],
    version: "BETA V1.7.3",
    repository: "https://github.com/ayoubmazouz/resume-maker",
};

export const DOCUMENTATION = (
    <div className="docs text-gray-800 dark:text-gray-100 space-y-4">
        <h1 className="text-center">RESUME MAKER</h1>
        <p>
            <img
                src="/screenshots/app.png"
                className="my-2 rounded-md shadow-md w-full"
            />
        </p>
        <h2>COMMENT UTILISER:</h2>
        <h3>PANNEAU DE CONTRÔLE:</h3>
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
            paramètres <b>(MENU)</b>:
        </p>
        <p>
            <b>Télécharger:</b> c'est la dernière étape, il vous donne votre CV
            et votre lettre de motivation s'il est inclus sous forme de fichier{" "}
            <b>pdf</b>.
        </p>
        <p>
            <b>enregistrer:</b> vous permet d&#39;enregistrer votre CV dans le
            stockage de votre navigateur local.
        </p>
        <p>
            <b>réinitialiser:</b> cette option supprime toutes les informations
            stockées dans le stockage local et efface les champs de saisie, prêt
            pour un nouveau CV.
        </p>
        <p>
            <b>exporter:</b> exportez votre CV sous forme de chaîne JSON copiée
            dans votre presse-papiers, cela vous permet d&#39;enregistrer
            plusieurs CV.
        </p>
        <p>
            <b>importer:</b> cette option vous permet de fournir une chaîne JSON
            donnée par l&#39;option d&#39;exportation, pour charger les CV
            précédents.
        </p>
        <p>
            <b>darkmode / lightmode:</b> bascule entre les modes clair et
            sombre.
        </p>
        <p>
            <b>aller à</b> vous permet de sauter rapidement entre l'éditeur, le
            CV et la lettre de motivation.
        </p>
        <p>
            <b>A propos</b> contient de la documentation et des informations sur
            l'application
        </p>
        <p>
            au milieu, vous avez le commutateur <b>LightMode/DarkMode</b>
        </p>
        <p>
            <b>OPTIONS</b> vous permet de contrôler la taille de la police et
            l'interlignage
        </p>
        <p>
            Et les deux derniers menus contiennent différents designs et
            palettes de couleurs
        </p>
        <h3>ÉDITEUR:</h3>
        <p>
            L&#39;éditeur est divisé en sections, chaque section a
            <b> (titre, identifiant et type) </b>
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
            <li>ajouter de nouveaux champs de saisie.</li>
        </ul>
        <h3>Lettre Motivation</h3>
        <img
            src="/screenshots/letter-section.png"
            className="my-2 rounded-md shadow-md w-full"
        />
        <p>
            Pour ajouter une lettre de motivation vous devez cocher la case qui
            dit lettre de motivation, décochez la case si vous ne souhaitez pas
            l'inclure, vous pourrez ensuite saisir vos informations.
        </p>
        <p>
            Les informations incluent le sujet, le nom de l'entreprise et la
            lettre d'accompagnement dans forme de paragraphes
        </p>
        <h3>AJOUTER UNE NOUVELLE SECTION:</h3>
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
        <h3>TYPES DISPONIBLES:</h3>
        <h4>DATE LIST:</h4>
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
        <h4>LIST:</h4>
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
        <h4>labels:</h4>
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
        <h4>Slider:</h4>
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
        <h4>marge: none</h4>
        <h4>graphique de fond: true</h4>
        <h4>taille de papier: A4</h4>
        <p>
            <img
                src="/screenshots/print.png"
                className="my-2 rounded-md shadow-md w-full"
            />
        </p>
        <p>
            <b>THIS IS IT, YOU DID IT!!</b>
        </p>
    </div>
);
