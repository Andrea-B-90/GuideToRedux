import {put, takeLatest, call} from 'redux-saga/effects';

// Simulate an API call or async operation
const saveDataToServer = async data => {
  // Simulate a delay
  return await new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

function* submitDataSaga(action) {
  try {
    // Call your API or async function to save data
    const data = yield call(saveDataToServer, action.data);

    // Dispatch an action to update the Redux state with the saved data
    yield put({type: 'SUBMIT_DATA', data});
  } catch (error) {
    // Handle any errors here
    console.log(error);
  }
}

export function* watchSubmitData() {
  yield takeLatest('SUBMIT_DATA', submitDataSaga);
}
