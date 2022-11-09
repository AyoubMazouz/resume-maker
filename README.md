# COMMENT EXÉCUTER EN LOCAL:

Assurez-vous que NodeJs est installé sinon installez-le à partir d'ici: [NodeJs](https://nodejs.org/en/download/)

Ouvrir une nouvelle instance de terminal dans le dossier`resume-maker-master`.
Tapez `npm i` pour installer les dépendances.
Une fois l'installation terminée, exécutez le serveur local à l'aide de `npm start`.

### COMMENT CHANGER LE DESIGN ET LA PALETTE DE COULEURS:

En haut de la page, vous trouverez des boutons à gauche pour les conceptions et à l'extrémité opposée, il y a des options pour changer la palette de couleurs, cliquez simplement sur une option et elle sera appliquée.

### COMMENT IMPRIMER:

L'impression du produit final est très simple, vous devez modifier certaines variables d'impression dans votre navigateur.

##### marge: none

##### graphique de fond: true

##### taille de papier: A4

![](/public/screenshots/print.png)

### DATA FILE:

Dans `resume-make-master/src`, vous trouverez un dossier nommé data.js à partir duquel vous pourrez modifier toutes les informations.

L'objet de données consiste en une liste d'objets, chaque objet représentant une section.
Les sections ont un titre et une liste de contenu.
Chaque liste de contenu a un type, les types permettent au programme de savoir à quel type de données il doit s'attendre.

### TYPES DISPONIBLES:

##### Entête:

```{
        title: "",
        content: [
            {
                type: "header",
                data: {
                    img: "/assets/profile.png",
                    fullName: ["FirstName", "LastName"],
                    title: "Job Title",
                    details: [
                        "22 ans",
                        "07 70 70 70 70",
                        "john@mail.com",
                        "Street address goes here",
                    ],
                },
            },
        ],
    },
```

##### Liste:

```
    {
        title: "title",
        content: [
            {
                type: "list",
                data: ["List item 01", "List item 02", "List item 03"],
            },
            {
                type: "labels",
                data: [
                    ["efficient", ["JavaScript", "Python", "Git"]],
                    ["familiar", ["C#", "C", "Lua"]],
                ],
            },
        ],
    },
```

##### Liste des dates:

```
    {
        title: "title",
        content: [
            {
                type: "date_list",
                data: [
                    ["date", "text"],
                    ["date", "text"],
                ],
            },
        ],
    },
```

##### Étiquettes:

```
    {
        title: "title",
        content: [
            {
                type: "labels",
                data: [
                    ["efficient", ["JavaScript", "Python", "Git"]],
                    ["familiar", ["C#", "C", "Lua"]],
                ],
            },
        ],
    },
```

##### Glissière:

```
    {
        title: "title",
        content: [
            {
                type: "meter",
                data: [
                    ["Français", "3/6", "bien"],
                    ["Anglais", "5/6", "très bien"],
                    ["Arabe", "full", "maternelle"],
                ],
            },
        ],
    },
```

##### You can put multiple different type in one section:

```
    {
        title: "title",
        content: [
            {
                type: "list",
                data: ["List item 01", "List item 02", "List item 03"],
            },
            {
                type: "labels",
                data: [
                    ["efficient", ["JavaScript", "Python", "Git"]],
                    ["familiar", ["C#", "C", "Lua"]],
                ],
            },
        ],
    },
```
