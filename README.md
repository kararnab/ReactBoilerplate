# Boilerplate React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
```bash
npx create-react-app [APP_NAME] --template typescript
```

## Navigation

For navigation, you can use react-router-dom
```bash
npm install react-router-dom --save
```

## SCSS
This package is a distribution of Dart Sass, compiled to pure JavaScript with no native code or external dependencies. It provides a command-line sass executable and a Node.js API.

```bash
npm i sass --save-dev
```
**Note:** node-sass in deprecated and we are using Dart Sass instead of it.

For a full explanation about how to use node-sass and CRA together see "How to Use SASS in Create React App?"\
[Link](https://www.robinwieruch.de/create-react-app-with-sass-support)

Once you move beyond CRA you can tinker with your own webpack.config.js which can also be set up to compile and import SCSS files. But if you are just starting out with React then you may want to leave tinkering with your webpack.config.js for later and stick with CRA.

## ESLint 
[ESLint](https://www.npmjs.com/package/eslint) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
You can install ESLint using npm:
```bash
npm install eslint --save-dev
```
You should then set up a configuration file:
```bash
npm init @eslint/config
```
Also create a ***.eslintignore*** file similar to ***.gitignore***

Finally add the scripts in the scripts section:
```bash
"lint": "eslint src/ --ext .js,.jsx,.ts,.tsx --max-warnings=0",
"fix-lint-unix": "eslint src --fix",
"fix-lint-windows": "eslint src\\** --fix",
```
Run the fix-lint script to fix any platform related errors.

## Axios
[Axios](https://www.npmjs.com/package/axios) is a Promise based HTTP client for the browser and node.js
```bash
npm install axios --save
```

---
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---------------------------------------------------------------------------------
## StoryBook
[Homepage Url](https://storybook.js.org/)\
Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.\

To use storyboard, initialise it using
```bash
npx storybook init
```
Run storyboard Server
```bash
npm run storybook
```

---
## Todo List
- [ ] Add Redux
- [ ] Add 401 auth layer
- [ ] Add auth redirection logic
- [ ] Add android hook for Javascript Interface
- [x] Add hyperlink
- [ ] Add a animated page