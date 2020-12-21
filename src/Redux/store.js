import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";

import logger from "redux-logger";

const middleware = [logger];

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
