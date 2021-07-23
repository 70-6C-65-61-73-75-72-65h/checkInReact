import { sorting } from "./../utils/sotring";
import { IUser } from "./../constatnts";
import { createSelectorHook } from "react-redux";
import {
  createAsyncThunk,
  createDraftSafeSelector,
  PrepareAction,
  SerializedError,
} from "@reduxjs/toolkit";

import { createSlice, createAction, PayloadAction } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";
import { usersList } from "../constatnts";

// const retrieveUserById = createAction<number>("retrieveUserById");

const fetchAll = createAsyncThunk<IUser[], void, { state: IUL }>(
  "users/fetchAll",
  async (_, thunkAPI) => {
    const { loading } = thunkAPI.getState();
    if (loading !== "pending") {
      return;
    }

    try {
      const response: { data: IUser[] } = await new Promise(
        (resolve, reject) => {
          setTimeout(() => resolve({ data: usersList }), 1000);
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const fetchUserById = createAsyncThunk<IUser, number, { state: IUL }>(
  "users/fetchUserById",
  async (userId, { getState, rejectWithValue }) => {
    const { loading, users } = getState();
    const userInStore = users.find((user) => user.id === userId);
    if (userInStore) return userInStore;

    if (loading !== "pending") {
      return;
    }

    try {
      const response: { data: IUser } = await new Promise((resolve, reject) => {
        setTimeout(
          () =>
            resolve({
              data: usersList.find((user) => user.id === userId),
            }),
          1000
        );
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface IUL {
  users: IUser[] | null;
  loading: string;
  error: string | SerializedError;
}
const initialState: IUL = {
  users: null,
  loading: "idle",
  error: null,
};
const userList = createSlice({
  name: "userList",
  initialState: initialState,
  reducers: {
    createUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    deleteUserById: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },

    sortUsers: (state, action) => {
      state.users = sorting(
        action.payload.rows,
        action.payload.column,
        action.payload.isAsc
      );
    },
    // multiply: {
    //   reducer: (state, action: PayloadAction<number>) => state * action.payload,
    //   prepare: (value?: number) => ({ payload: value || 2 }), // fallback if the payload is a falsy value
    // },
  },
  // "builder callback API", recommended for TypeScript users
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });

    builder.addCase(fetchAll.pending, (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.users = action.payload;
      }
    });
    builder.addCase(fetchAll.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.error;
      }
    });
  },
});

const reducer = combineReducers({
  userList: userList.reducer,
});

export const useTypedSelector =
  createSelectorHook<ReturnType<typeof reducer>>();

export const userListSelector = (state: ReturnType<typeof reducer>) =>
  state.userList;
export const usersSelector = createDraftSafeSelector(
  userListSelector,
  (state) => state.users
);
// export const userFilteredSelector = createDraftSafeSelector(
//   usersSelector,
//   (state) => state.filter(user => user.id !== 1)
// );

export const { createUser, updateUser, deleteUserById, sortUsers } =
  userList.actions;
export { fetchAll, fetchUserById };

export default reducer;
