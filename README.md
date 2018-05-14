# express-typescript starter

## Installation

```
$ git clone https://github.com/mtso/express-typescript
$ cd express-typescript
$ npm install
```

## Usage

```
$ npm run build
$ PORT=3000 npm start
```

## Notes

- Support for popular node.js libraries can be found under the namespace `@types`.
  Learn more at [https://github.com/types]().
- Typescript interfaces make mocking and changing implementations easy
  for controllers, storage, and external connections.
- Entrypoint server file is `src/server.ts`. This is in order to keep the input folder
  simple by passing all of `src/` into `babel` (rather than exclude `node_modules`).
- `babel-preset-stage-1` is used to enable the arrow function class properties
  (which automatically bind `this` to the class).
- WARNING: watch out for changing versions when `babel-preset-typescript` is stabilized.
  The version of `babel-preset-typescript` used here is version `alpha.19`, so
  the corresponding versions are used for `babel-cli` and `babel-preset-env`.

## To Do

- Add testing with mocks
