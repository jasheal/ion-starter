## Ion Starter
Starter template for Ionic Framework based on best angular practices for ease of maintenance and scale.

### Why should I use this?
If you are building smaller apps or experiments then the default ionic structure will work perfectly fine. This starter project lays down best practice patterns for structuring your apps with scaling & ease of maintenance in mind yet maintaing the simplicity of the default structure. It is encouraged that you adapt ion-starter to your own needs for you, your team and apps.

### Components
Components are considered the building blocks of your app and thus the root directory app is where all the working files for your app live. Using gulp and watchers a www folder is created where the entire app is minnified and the .tpl templates are put into angular's $templateCache.

### Getting started
Most likely if you are reading this you already have Node/IO installed. You should also install bower, gulp and ionic globally. Run all or some of the following line commands from the main root directory.

```
~$ npm install -g bower gulp ionic-cli
~$ npm install
```
When all the node modules are happy we can pull down the bower dependencies

```
~$ bower install
```
Build the app

```
~$ gulp build
```
Open a new terminal tab and run

```
~$ gulp watch
```
Start writing code
