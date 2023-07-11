import { createSlice } from '@reduxjs/toolkit';

export const auth = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isAuthenticated: false,
    sessionId: '',
  },
  reducers: {
    setUser: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.isAuthenticated = true;
      // eslint-disable-next-line no-param-reassign
      state.sessionId = localStorage.getItem('session_id');

      localStorage.setItem('accountId', action.payload.id);
    },
  },
});

export const { setUser } = auth.actions;
export default auth.reducer;
