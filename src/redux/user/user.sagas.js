import { takeLatest, put, call, all } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { googleProvider, createUserProfileDocument, auth } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure } from './user.actions';

export function* getSnapshotUserAuth(user) {
    try {
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error.message))
    }
};

export function* onEmailAndPasswordSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
};

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
};

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error.message))
    }
};

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error.message))
    }
};

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailAndPasswordSignInStart)]);
};
