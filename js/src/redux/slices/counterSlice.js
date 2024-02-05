import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounterValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setCounterValue} = counterSlice.actions;
export default counterSlice.reducer;
