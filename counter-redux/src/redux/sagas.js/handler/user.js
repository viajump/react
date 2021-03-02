import { call, put } from 'redux-saga/effects';
import { setUser } from '../../ducks/user';
import { requestGetUser } from '../request/user';

export function* handlerGetUser(action) {
    try {
        const response = yield call(requestGetUser)
        const { data } = response;
        yield put(setUser(data));
    } catch (error) {
        console.log(error)
    }
}