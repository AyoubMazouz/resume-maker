# RESUME MAKER

##### An application made with react that helps you create profetionnal looking resumes fast (less than 3 min) and for free.

##### You have many choices when it comes to colors and designs all uniq.

![](/public//screenshots/darkmode.png)

**[Live Demo -> Click Here!](https://resume-maker3.netlify.app)**

# HOW TO RUN LOCALLY:

Make sure you have NodeJs installed if not install it from here: [NodeJs](https://nodejs.org/en/download/)

open a new terminal instance inside the folder `resume-maker-master`.
Type `npm i` to install dependencies.
After the installation is complete, run the local server using `npm start`.

### HOW TO USE:

##### CONTROL PANEL:

At the top the page you'll find the control panel allows you to do couple of different things.

![](/public//screenshots/control-panel.png)

Let's start with most left, there you'll find couple of setting:

**save:** let's you save you resume in your local browser storage, so when you came back or you have accidentally refresh the page, your hard work will not go down the drain.

**reset:** this option delete all information stored in local storage and clears input fields, ready for a new resume.

**export:** export your resume as JSON string copied to your clip board, this allows you to save multiple resumes.

**import:** this option let's you supply a JSON string that is given by the export option, to load previous resumes.

**darkmode / lightmode:** toggles between light and dark mode.

In the center, all designs available you can switch between them in a blink.
And at the far right there is many different options to choose from when it comes to color palette.

##### EDITOR:

On the left side or the middle depends on screen size, is the editor;
The editor is splitted to sections each section has **(title, id and type)**
You can manipulate a section using these options:

![](/public//screenshots/section-header.png)

-   You can move a section "up" or "down" using the arrows.
-   Deleting it by clicking on bin icon.
-   Change the title title.
-   Remove / add new input fields.

###### ADD NEW SECTION:

To add a new section all you have to do is select which type using the drop down list in the middle then click the "folder+" icon.

![](/public//screenshots/new-section.png)

When you create a new section don't forget to give it a title and then fill you information, you can add as many fields or sections as you want, but some designs might break, when you fill a lot of information, it's up to you!

##### AVAILABLE TYPES:

###### DATE LIST:

This type allows you to provide two input fields.

![](/public//screenshots/date-list.png)

This type could be used for sections such as: Experience, Education...

###### LIST:

This one gives you a list and it is displayed vertically.

![](/public//screenshots/list.png)

This type could be used for sections such as: competences...

###### labels:

Same as list but it is displayed in line.

![](/public//screenshots/labels.png)

This type could be used for sections such as: hobbies, Software, Programing languages...

###### Slider:

The Slider type take in a name and a number between 0 and 6.

![](/public//screenshots/slider.png)

This type could be used for sections such as: languages, other skills...

### HOW TO PRINT:

Printing the final product is very straightforward, you need to change some printing variables in your browser.

##### margin: none

##### background graphic: true

##### paper size: A4

![](/public/screenshots/print.png)

**THIS IS IT, YOU DID IT!!**
