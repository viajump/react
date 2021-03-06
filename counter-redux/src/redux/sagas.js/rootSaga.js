import { takeLatest } from 'redux-saga/effects';
import { GET_USER } from '../ducks/user';
import { handlerGetUser } from './handler/user';

export function* watcherSaga() {
    yield takeLatest(GET_USER, handlerGetUser)
}