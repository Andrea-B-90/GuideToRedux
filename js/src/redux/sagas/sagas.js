import {all} from 'redux-saga/effects';
import {watchSubmitData} from './counterSaga';

export default function* rootSaga() {
  yield all([watchSubmitData()]);
}
