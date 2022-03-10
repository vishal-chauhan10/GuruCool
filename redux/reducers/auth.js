import {createSlice} from '@reduxjs/toolkit';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    isSignedIn: 0,
  },
  reducers: {
    login: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isSignedIn = 1;
    },
    logout: state => {
      state.isSignedIn = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout} = auth.actions;

export default auth.reducer;
