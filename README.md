## FRONTEND DEVELOPMENT TEMPLATE FOR GULP

#### This is a starter file for your own projects.
------------

##### Advantage of using this template:

- Start your projects faster
- Preinstalled plugins for Gulp
- JQuery and normalize.css comes preinstalled
- Index.html, main.js and main.sass precreated

##### Features:

- Convert SASS/SCSS to CSS
- Add's vendor prefixes automatically
- Concanate JS and CSS
- Minify JS and CSS
- Copy assets to build directory
- Refresh browser while developing




### Installation

  Files requires [Node.js](https://nodejs.org/) v4+ to run.
  Download files to your main project folder or clone repository with git clone.
  
  Edit package.json (Change project name, authors name, repository url, etc.)

  Open terminal to your project folder.
  ```sh
  $ cd projectfolder
  $ npm install // Or sudo npm install if necessary
  ```
### Starting new project

There is only two commands for Gulp that is needed for your developing. When you start your project, use command

    $ gulp watch

and for finalize your project 

    $ gulp build
    
**Gulp watch** will start SASS/SCSS convert to CSS and automatic browser refresh. Also JavaScript files will be watched for changes.

**Gulp build** will start concanate and minify process of your files. Also possible assets will be copied to build directory. **NOTE: This will delete build-folder and it's content before building!**

### Folder structure

```
Developing structure:
---------------------

|-- assets
    |-- img
    |-- fonts
    |-- css
        |-- vendor
            |-- normalize.css
        |-- main.sass/scss
        |-- main.css (sass generated)
    |-- js
        |-- vendor
            |-- jquery-3.1.0.min.js
        |-- main.js
|-- index.html
|-- gulpfile.js
|-- package.json
|-- README.md
|-- LICENCE

Building structure:
-------------------

|-- build
    |-- assets
        |-- img
        |-- fonts
        |-- css
            |-- vendor
                |-- normalize.css
    
            |-- main.css (sass generated, minifyed and concanated)
        |-- js
            |-- vendor
                |-- jquery-3.1.0.min.js
            |-- main.js (concanated and minifyed)
    |-- index.html

```


    
    