# HOW TO RUN LOCALLY:

Make sure you have NodeJs installed if not install it from here: [NodeJs](https://nodejs.org/en/download/)

open a new terminal instance inside the folder `resume-maker-master`.
Type `npm i` to install dependencies.
After the installation is complete, run the local server using `npm start`.

### HOW TO CHANGE DESIGN AND COLOR PALETTE:

At the top of the page, you'll find buttons on left for designs and at the opposite end there is options to change color palette, just click on an option and it will be applied.

### HOW TO PRINT:

Printing the final product is very straightforward, you need to change some printing variables in your browser.

##### margin: none

##### background graphic: true

##### paper size: A4

![](/public/screenshots/print.png)

### DATA FILE:

Inside `resume-make-master/src` you will find folder named data.js from there you can modify all information.

The data Object consist of a list of object each object represent a section.
Sections has a title and content list.
Each content list has a type, types allow the programme to know which type of data should it expect.

### AVAILABLE TYPES:

##### Header:

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

##### List:

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

##### Date List:

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

##### Labels:

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

##### Meters:

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
