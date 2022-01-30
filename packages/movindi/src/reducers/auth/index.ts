import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
