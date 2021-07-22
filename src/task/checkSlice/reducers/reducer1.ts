import * as Actions from "../actions/action1";

const initialState = {
  info1: null,
  info2: null,
};

const reducer1 = (state = initialState, action: any) => {
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
export default reducer1;
