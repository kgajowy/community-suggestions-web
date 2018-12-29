import { applyMiddleware, compose, createStore } from "redux";

import thunk from "redux-thunk";
import communityApp from "./reducers/index";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  communityApp,
  composeEnhancers(applyMiddleware(thunk))
);
