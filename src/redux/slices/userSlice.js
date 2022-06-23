import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: 'Ratchet123',
    alias: 'Clank123',
    id: '3511436245',
    age: 21,
  },
  reducers: {
    increaseAge: (state) => {
      state.age += 1;
    },
    decreaseAge: (state) => {
      state.age -= 1;
    },
    increaseAgeBy: (state, action) => {
      state.age += action.payload;
    },
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    deleteUsername: (state) => {
      state.username = 'Ratchet321';
    },
  },
});

export const {
  increaseAge,
  decreaseAge,
  increaseAgeBy,
  updateUsername,
  deleteUsername,
} = userSlice.actions;

export default userSlice.reducer;
