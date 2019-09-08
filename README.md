# Appointments system using TDD

## Dependencies

### Jest

- Javascript testing framework

### Babel

A toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. This project contains the following presets and plugins:

Environments

- @babel/preset-env

React and JSX support:

- @babel/preset-react

Improve performance replacing the reference to duplicated functions in the output by the @babel/runtime version.

- @babel/runtime
- @babel/plugin-transform-runtime

.babelrc config:

```
{
  "presets": ["@babel/env", "@babel/react"],
  "plugins": ["@babel/transform-runtime"]
}
```
