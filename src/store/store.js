import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { reducers } from "reducers/index";
import { sagas } from "sagas/index";

// global temporary store -- it's going to be changes soon
// add the middlewares
let middlewares = [];

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// create the store
const store = createStore(reducers, middleware);
sagaMiddleware.run(sagas)

// export
export default store ;
