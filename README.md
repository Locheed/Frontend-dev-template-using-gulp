## FRONTEND DEVELOPMENT TEMPLATE FOR GULP

#### This is a starter file for your own projects.
------------

##### Advantage of using this template:

- Preinstalled plugins for Gulp

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

|-- src
    |-- assets
        |-- img
        |-- fonts
        |-- css
            |-- vendor
                |-- normalize.css included
            |-- app.css
            |-- app.css.map
        |-- js
            |-- vendor
                |-- vendor files here
            |-- main.js
        |-- sass
            |-- 0-plugins
                |-- _plugins-dir.sass
            |-- 1-base
                |-- _base-dir.sass
                |-- _base.sass
            |-- 2-layouts
                |-- _content.sass
                |-- _footer.sass
                |-- _header.sass
                |-- _layouts-dir.sass
            |-- 3-modules
                |-- _modules.dir.sass
            |-- _variables.sass
            |-- app.sass
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
                |-- vendor files copied here
            |-- main.js (concanated and minifyed)
    |-- index.html

```
