import React, { ReactElement } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { ActionCreator11, ActionCreator12 } from "./actions/action1";
import { ActionCreator21, ActionCreator22 } from "./actions/action2";
import { reducers, useTypedSelector } from "./reducers";
const store = createStore(reducers);

interface Props {}

const App = () => {
  const reducer1Data = useTypedSelector((state) => state.reducer1);
  const reducer2Data = useTypedSelector((state) => state.reducer2);
  const dispatch = useDispatch();
  return (
    <div className="className">
      <button onClick={() => dispatch({ type: 0, payload: "fuck" })}>
        Run 1 Actions for both reducers
      </button>
      <button onClick={() => dispatch({ type: 1, payload: "fuck2" })}>
        Run 2 Actions for both reducers
      </button>
      <br />
      <button onClick={() => dispatch(ActionCreator11("reducer1_1"))}>
        Run 1 Action for first reducer
      </button>
      <button onClick={() => dispatch(ActionCreator12("reducer1_2"))}>
        Run 2 Action for first reducer
      </button>
      <br />
      <button onClick={() => dispatch(ActionCreator21("reducer2_1"))}>
        Run 1 Action for second reducer
      </button>
      <button onClick={() => dispatch(ActionCreator22("reducer2_2"))}>
        Run 2 Action for second reducer
      </button>
      <br />
      <div style={{ color: "red" }}>info1 1 {reducer1Data.info1}</div>
      <div style={{ color: "red" }}>info1 2 {reducer1Data.info2}</div>
      <br />
      <div style={{ color: "purple" }}>info2 1 {reducer2Data.info1}</div>
      <div style={{ color: "purple" }}>info2 2 {reducer2Data.info2}</div>
    </div>
  );
};

export default function CheckSlice({}: Props): ReactElement {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// проверка на то что при вызове определенного экшона будут изменения в 2 редьюсерах сразу
