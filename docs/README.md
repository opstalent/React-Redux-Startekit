# React Redux minimal starter kit (boilerplate)


Redux-Minimal is a minimalist react-redux starter kit (boilerplate) which let's you build rich real world apps.
It's not as light as some starter kits which only let you write a simple hello world app and then you have to struggle with installing all the other stuff yourself.
And it's also not as packed as other starter kits which confuse you massively with its folder/file structure and arcane scripts.

Redux-Minimal contains the bare minimum to develop a real world complex app and it also comes with a small users app that will show you how to code certain features.
A demo of the app can be seen here:(https://github.com/opstalent/React-Redux-Startekit)

# Getting started

1. Before you start working with redux-minimal, you first need to setup your environment. Make sure you have the following installed:
    * [Git](https://git-scm.com/downloads)
    * [NodeJs and Npm](https://nodejs.org/en/download/current/)
    * an IDE to write js code in, for example [Webstorm](https://www.jetbrains.com/webstorm/download/)

2. Once your environment is prepared, open a command prompt (terminal) and type in the following:

```sh
git clone https://github.com/opstalent/React-Redux-Startekit hello-world
cd hello-world
npm install
npm start
```

3. Then open your [http://localhost:8080/](http://localhost:8080/) to see the included small users app.
Congratulations! You can now write react redux code.

4. For more productivity you can install Chrome's [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

# Why use this?

Redux-Minimal contains the minimum npm packages you need to have installed in order to build a react redux real-world app containing:
* a proper file/folder structure
* pages (routes)
* forms with validation
* real-world API asynchronous requests
* unit tests
* bootstrap react components
* sass
* source maps
* hot loader for ease of development
* redux tools
* js and css bundle files built for development or production

The code and implementation are minimal, which lets you focus on the real app, not the webpack, babel, gulp etc boilerplate files, which honestly you shouldn't even bother with.


# Installed packages

Here are the npm packages that redux-minimal installs:

|Feature|Packages|Benefits|
|-------|--------|--------|
|React|[`react`](https://github.com/facebook/react)|A declarative, efficient, and flexible JavaScript library for building user interfaces|
||[`react-dom`](https://www.npmjs.com/package/react-dom)|Serves as the entry point of the DOM-related rendering paths|
||[`react-hot-loader`](https://github.com/gaearon/react-hot-loader)|Tweak React components in real time when developing|
|Redux|[`redux`](https://github.com/reactjs/redux)|A predictable state container for JavaScript apps|
||[`react-redux`](https://github.com/reactjs/react-redux)|React bindings for Redux|
||[`redux-freeze`](https://github.com/buunguyen/redux-freeze)|Redux middleware that prevents state from being mutated anywhere in the app|
|Router|[`react-router`](https://github.com/ReactTraining/react-router)|Declarative routing for React. Your app has pages now|
||[`react-router-redux`](https://github.com/reactjs/react-router-redux)|Simple bindings to keep react-router and redux in sync|
|Bootstrap|[`react-bootstrap`](https://github.com/react-bootstrap/react-bootstrap)|Bootstrap 3 components built with React|
||[`react-router-bootstrap`](https://github.com/react-bootstrap/react-router-bootstrap)|Integration between React Router and React-Bootstrap|
|Forms|[`redux-form`](https://github.com/erikras/redux-form)|A Higher Order Component using react-redux to keep form state in a Redux store|
|Asynchronous|[`redux-saga`](https://github.com/yelouafi/redux-saga)|Asynchronous API calls made easy with Saga|
|Unit tests|[`jest`](https://github.com/facebook/jest)|Javascript test framework|
||[`enzyme`](https://github.com/airbnb/enzyme)|JavaScript Testing utilities for React components|
||[`react-addons-test-utils`](https://facebook.github.io/react/docs/test-utils.html)|Required by enzyme. Makes it easy to test React components|
||[`ignore-styles`](https://www.npmjs.com/package/ignore-styles)|Ignore imported style files when running in Node|
|Sass|[`node-sass`](https://github.com/sass/node-sass)|Mature, stable, and powerful CSS extension language|
|Webpack|[`webpack`](https://github.com/webpack/webpack)|A bundler for javascript, css and others|
||[`webpack-dev-server`](https://github.com/webpack/webpack-dev-server)|Serves the app at [http://localhost:8080/](http://localhost:8080/)|
||[`extract-text-webpack-plugin`](https://github.com/webpack/extract-text-webpack-plugin)|Webpack plugin that builds the css bundle file|
||[`style-loader`](https://github.com/webpack/style-loader)|Webpack module that loads styles|
||[`css-loader`](https://github.com/webpack/css-loader)|Webpack module that loads css styles|
||[`sass-loader`](https://github.com/jtangelder/sass-loader)|Webpack module that loads sass styles|
||[`ejs`](https://github.com/mde/ejs)|Embedded JavaScript templates|
||[`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin)|Webpack module to remove previous build files|
||[`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin)|Simplifies creation of HTML files to serve your webpack bundles|
|Babel|[`babel-core`](https://github.com/babel/babel/tree/master/packages/babel-core)|Compiler that helps node.js and the browser to understand the new js syntax|
||[`babel-runtime`](https://www.npmjs.com/package/babel-runtime)|Helps node.js to understand the new js syntax|
||[`babel-preset-es2015`](http://babeljs.io/docs/plugins/preset-es2015/)|Helps node.js to use [ES2015 Javascript syntax](http://www.ecma-international.org/ecma-262/6.0/ECMA-262.pdf)|
||[`babel-preset-react`](http://babeljs.io/docs/plugins/preset-react/)|Helps node.js to use React's [JSX syntax](https://facebook.github.io/jsx/)|
||[`babel-preset-stage-0`](https://babeljs.io/docs/plugins/preset-stage-0/)|Helps node.js to use the spread operator|
||[`babel-loader`](https://github.com/babel/babel-loader)|Helps webpack to compile the new javascript syntax|
||[`babel-polyfill`](https://babeljs.io/docs/usage/polyfill/)|Helps the browser to understand the new js syntax|
||[`webpack-bundle-analyzer`](https://www.npmjs.com/package/webpack-bundle-analyzer)|Webpack plugin and CLI utility that represents bundle content as convenient interactive zoomable treemap|

# Change host and/or port

If you don't want to use localhost on port 3000, you can change it in `package.json` and `webpack.config.js`.

# Eslint rules:
  *temporary disabled since we didn't decide what we need, to make our lives easier
