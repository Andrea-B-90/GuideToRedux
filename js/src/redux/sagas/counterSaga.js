import {put, takeLatest} from 'redux-saga/effects';
import {setCounterValue} from '../slices/counterSlice';

function* submitDataSaga(action) {
  try {
    // Call your API or async function to save data (if needed)
    // Simulate a delay and then dispatch the slice's action
    yield new Promise(resolve => setTimeout(resolve, 1000));
    yield put(setCounterValue(action.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchSubmitData() {
  yield takeLatest('SUBMIT_DATA', submitDataSaga);
}
