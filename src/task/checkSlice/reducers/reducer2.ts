import * as Actions from "../actions/action2";

const initialState = {
  info1: null,
  info2: null,
};

const reducer2 = (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.Type.ActionType1: {
      return { ...state, info1: action.payload };
    }
    case Actions.Type.ActionType2:
      return { ...state, info2: action.payload };
    default: {
      return state;
    }
  }
};
export default reducer2;
