import testReducer from "./test/test.reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  test: testReducer,
});

export default rootReducer;
