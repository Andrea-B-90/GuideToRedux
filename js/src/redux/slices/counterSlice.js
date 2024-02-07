import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  counterValue: 0,
  factorialValue: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounterValue: (state, action) => {
      state.counterValue = action.payload;
    },
    calculateFactorial: state => {
      // Calculate factorial
      let fact = 1;
      for (let i = 1; i <= state.counterValue; i++) {
        fact *= i;
      }
      // Update factorial state value
      state.factorialValue = fact;
    },
  },
});

export const {setCounterValue, calculateFactorial} = counterSlice.actions;
export default counterSlice.reducer;
