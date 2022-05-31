# React Native TypeScript Boilerplate

WIP - Boilerplate for [React Native](https://reactnative.dev) applications, built with [Native Base](https://nativebase.io) as a component library and [MobX](https://mobx.js.org) as a state manager.

## Setup

1 - Install the project dependencies:

```
yarn
```

2 - Install all the necessary extensions for VS Code:

- Eslint
- Prettier
- EditorConfig

## Running the project

```
yarn dev
```

## Building a preview for Android

```
expo build android -t apk
```

## Dependencies

### `axios`

[Github](https://github.com/axios/axios) | [NPM](https://www.npmjs.com/package/axios)

Promise based HTTP client for the browser and node.js.

### `formik`

[Github](https://github.com/jaredpalmer/formik) | [NPM](https://www.npmjs.com/package/formik)

Formik is the world's most popular open source form library for React and React Native.

### `mobx`

[Github](https://github.com/mobxjs/mobx) | [NPM](https://www.npmjs.com/package/mobx)

MobX is a battle tested library that makes state management simple and scalable by transparently applying functional reactive programming (TFRP).

### `mobx-react`

[Github](https://github.com/mobxjs/mobx) | [NPM](https://www.npmjs.com/package/mobx-react)

Package with React component wrapper for combining React with MobX. Exports the observer decorator and other utilities. For documentation, see the MobX project. This package supports both React and React Native.

### `react`

[Github](https://github.com/facebook/react) | [NPM](https://www.npmjs.com/package/react)

React is a JavaScript library for building user interfaces.

### `react-dom`

[Github](https://github.com/facebook/react) | [NPM](https://www.npmjs.com/package/react-dom)

This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.

### `yup`

[Github](https://github.com/jquense/yup) | [NPM](https://www.npmjs.com/package/yup)

Yup is a schema builder for runtime value parsing and validation. Define a schema, transform a value to match, assert the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformation.

## Dev Dependencies

### `eslint`

[Github](https://github.com/eslint/eslint) | [NPM](https://www.npmjs.com/package/eslint)

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

### `eslint-config-prettier`

[Github](https://github.com/prettier/eslint-config-prettier) | [NPM](https://www.npmjs.com/package/eslint-config-prettier)

Turns off all rules that are unnecessary or might conflict with Prettier.

### `eslint-plugin-prettier`

[Github](https://github.com/prettier/eslint-plugin-prettier) | [NPM](https://www.npmjs.com/package/eslint-plugin-prettier)

Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

### `eslint-plugin-react`

[Github](https://github.com/yannickcr/eslint-plugin-react) | [NPM](https://www.npmjs.com/package/eslint-plugin-react)

React specific linting rules for eslint.

### `prettier`

[Github](https://github.com/prettier/prettier) | [NPM](https://www.npmjs.com/package/prettier)

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
