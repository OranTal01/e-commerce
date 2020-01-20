import { takeLatest, put, call, all } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCartItems } from './cart.actions';

export function* onSignOutSuccesses() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
};
export function* clearCartOnSignOut() {
    yield put(clearCartItems())
}
export function* cartSagas() {
    yield all([call(onSignOutSuccesses)]);
};