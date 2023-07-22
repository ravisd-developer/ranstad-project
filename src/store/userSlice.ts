// src/redux/userSlice.js

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiResponse } from '../utils/useApiCall';

type userInitialState = {
    users: any[];
  };
  
  let initialState: userInitialState = {
    users: [],
  };
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(store, action: PayloadAction<any[]>) {
            store.users = [];
            store.users.push(...action.payload);
            return store;
        }
    }, 
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;