## GET STARTED

1. Run `npm install`
2. Run `npm start` to run application locally

### Production Dependencies

| **Dependency**                     | **Use**                                                  |
| ---------------------------------- | -------------------------------------------------------- |
| react                              | React library                                            |
| react-dom                          | React library for DOM rendering                          |
| react-redux                        | Connects React components to Redux                       |
| react-router-dom                   | React library for routing                                |
| redux                              | Library for unidirectional data flows                    |
| webpack                            | Bundler with plugin ecosystem and integrated dev server  |
| html-webpack-plugin                | Generate HTML file via webpack                           |
| mini-css-extract-plugin            | Extracts CSS into separate files, a CSS file per JS file |
| clean-webpack-plugin               | Remove/clean the build folder after rebuild              |
| eslint-webpack-plugin              | Loader eslint when build process                         |
| optimize-css-assets-webpack-plugin | Optimize \ minimize CSS assets.                          |
| terser-webpack-plugin              | Minify your JavaScript                                   |
| webpack-merge                      | Merge configure files webpack                            |

### Development Dependencies

| **Dependency**            | **Use**                                                               |
| ------------------------- | --------------------------------------------------------------------- |
| webpack-cli               | Run Webpack via the command line                                      |
| webpack-dev-server        | Serve app via Webpack                                                 |
| webpack-bundle-analyzer   | Generate report of what's in the app's production bundle              |
| @babel/core               | Transpiles modern JavaScript so it runs cross-browser                 |
| babel-loader              | Add Babel support to Webpack                                          |
| babel-preset-react-app    | Babel preset for working in React to convert JSX syntax               |
| css-loader                | Read CSS files via Webpack                                            |
| sass-loader               | Read SCSS files via Webpack                                           |
| style-loader              | Insert imported CSS into app via Webpack                              |
| file-loader               | Resolves import/require() on a file into a url                        |
| url-loader                | A loader for webpack which transforms files into base64 URIs          |
| eslint                    | Lints JavaScript                                                      |
| eslint-config-airbnb      | Airbnb's .eslintrc as an extensible shared config                     |
| eslint-plugin-import      | Advanced linting of ES6 imports                                       |
| eslint-plugin-react       | Adds additional React-related rules to ESLint                         |
| eslint-plugin-react-hooks | Linting enforces the Rules of Hooks                                   |
| prettier                  | Opinionated code formatter.                                           |
| eslint-plugin-prettier    | Prettier as an ESLint rule and reports                                |
| eslint-config-prettier    | Turns off rules that are unnecessary or might conflict with Prettier. |
| eslint-plugin-react       | Static AST checker for rules on JSX elements                          |

### Redux Saga - Configure and File structure:

1. Run `npm i redux-saga`
2. Configure store, rootReducer and rootSaga file:

- Create `Redux folder`, add file `configureStore.js`, `rootReducer.js` and `rootSaga.js`

_`rootReducer.js`_ where all reducer are defined

```
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // import reducer
});
export default rootReducer;
```

_`rootSaga.js`_ where all saga files are defined

```
import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
      // import saga
  ]]);
}
export default rootSaga;
```

_`configureStore.js`_ where configure saga Middleware, import `rootSaga` and `rootReducer`

```
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const middlewares = [sagaMiddleware]; // allow using saga middleware
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga); // run saga
  return store;
};
export default configureStore;
```

3. Redux directory structure explanation

- In redux folder, we have:

```
redux

└── component1
│   │── action.js
│   │── reducer.js
│   │── factory.js
│   │── saga.js
│
└── component2
│   │── action.js
│   │── reducer.js
│   │── factory.js
│   │── saga.js
│   ...
└── rootSaga.js
└── rootReducer.js
└── configureStore.js
```

- `action.js` where the actions are defined
- `factory.js` where communicate with the API
- `reducer.js` where to logically process the reponses from the API
- `saga.js` where contains the generator functions which can delay execution while preserving the context.

4. Some helper in redux saga:

> `takeEvery ()`: executes and returns the results of all called actions.

> `takeLastest ()`: means that if we perform a series of actions, it will only execute and return the results of the last actions.

> `take ()`: pause until action is received

> `put ()`: dispatch an action.

> `call ()`: call the function. If it returns a promise, suspends the saga until the promise resolves.

> `race ()`: runs multiple effects simultaneously, then destroys them all if one of them ends.

5. Why use Saga?

Compare saga and thunk

`redux thunk`

<a href="http://google.com.au/" rel="some text">![Foo](https://miro.medium.com/max/658/1*RXVGpDDUgTLDHVcXCIwAlQ.png)</a>

Here we have an action creator getDataFromAPI () that starts async progress like so:

- First fires an action letting store know that an API request is prepared (dispatch (getDataStarted ())).

- Next execute an API request that returns a Promise

- Finally, success action fires if the request is successful or error action if an error occurs

`redux saga`

<a href="http://google.com.au/" rel="some text">![Foo](https://miro.medium.com/max/555/1*sQMhmKVV0lTnIql0Cy0u9A.png)</a>

Same process, but completely different implementation.

- put instead of dispatch

- The last function (apiSaga ()) helps keep track of all actions (API_BUTTON_CLICK here)

- With redux-saga calling, we can get data from any async function (promise, ...)

Conclusion:

- Both implementations are easy to read, however for redux-thunk, you have to deal with a bunch of promises, callbacks if any, it takes a long time for the maintainer to read and find the code.
- With redux-saga, you simply need to track the try / catch block to keep track of the code, besides there is a function that helps you track actions easily.

`Advantages`

- By separating side-effects from the actions, testing is easier than Redux-Thunk.
- Keep the pure redux sync action compliant and completely remove the traditional javascript callback commands.

`Defect`

- Function cannot write in the form of arrow-function.
- Must understand Generator function and concepts in saga pattern
- Imperative writing style
