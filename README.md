# SDK for Boost, enterprise AppStore

For JavaScript and TypeScript

## Usage

Importing library

You can import the generated bundle to use the whole library generated by this starter:

`import boost from 'boost'`
Additionally, you can import the transpiled modules from dist/lib in case you have a modular library:

`import something from 'mylib/dist/lib/something'`
NPM scripts

* `npm t`: Run test suite
* `npm start`: Run npm run build in watch mode
* `npm run test:watch`: Run test suite in interactive watch mode
* `npm run test:prod`: Run linting and generate coverage
* `npm run build`: Generate bundles and typings, create docs
* `npm run lint`: Lints code
* `npm run commit`: Commit using conventional commit style (husky will tell you to use it if you haven't 😉)
