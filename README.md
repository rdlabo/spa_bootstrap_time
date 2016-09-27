# SPA bootstrap time
compare angular2,Ionic2,OnsenUI2,React,Riot,Vue...

# How to Start

## Angular2 (using angular-cli)
    $ npm install -g angular-cli
    $ cd angular-2.0
    $ ng serve


### build distribution

~~~~
  $ ng build --prod --bh ./
~~~~

 > [angular/angular\-cli: CLI tool for Angular2](https://github.com/angular/angular-cli#prerequisites)


## Ionic2 (using ionic)
    $ npm install -g ionic
    $ cd Ionic2-beta11
    $ ionic serve


## vue 1.0 ( using vue-cli )
    
~~~~
$ npm install -g vue-cli
$ cd vue-1.0
$ npm install
$ npm run dev
~~~~

>  [vue-CLI](http://vuejs.org/guide/installation.html#CLI)
 

## React v15.3.1 ( bundle with webpack )
   use react/index.html

### how to build


~~~~
$ npm install webpack -g
$ npm install --save react react-dom babel-preset-react babel-loader babel-core
$ webpack main.js bundle.js --module-bind 'js=babel-loader'
~~~~

> [Using React from npm](https://facebook.github.io/react/docs/package-management.html#using-react-from-npm)

## Riot v2.6.2 ( budle with webpack )

~~~
$ cd riot-2.6.2
$ npm install
$ webpack
$ npm start
~~~

