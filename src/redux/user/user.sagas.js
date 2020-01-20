import { takeLatest, put, call, all } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { googleProvider, createUserProfileDocument, auth, getCurrentUser } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpSuccess, signUpFailure} from './user.actions';

export function* getSnapshotUserAuth(user, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, user, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error.message))
    }
};

export function* isUserAuthentication() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthentication)
}

export function* onEmailAndPasswordSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
};

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
};

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
};

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUpWithEmailAndPassword)
};

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error.message))
    }

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

export function* signUpWithEmailAndPassword({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, additionalData: { displayName }}))
    } catch (error) {
        yield put(signUpFailure(error.message))
    }
};

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInnAfterSignUp)
};

export function* signInnAfterSignUp({payload:{user,additionalData}}) {
    yield getSnapshotUserAuth(user, additionalData)
};

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailAndPasswordSignInStart),
        call(isUserAuthentication),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)]);
};
