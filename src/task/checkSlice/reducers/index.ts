import { createSelectorHook } from "react-redux";
import { combineReducers } from "redux";

import reducer1 from "./reducer1";
import reducer2 from "./reducer2";

export const reducers = combineReducers({ reducer1, reducer2 });
export const useTypedSelector =
  createSelectorHook<ReturnType<typeof reducers>>();
