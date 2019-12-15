import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBpruugL3IKeOVl6nzljVfbZridBsqJ7P8",
    authDomain: "e-commercedb-ad639.firebaseapp.com",
    databaseURL: "https://e-commercedb-ad639.firebaseio.com",
    projectId: "e-commercedb-ad639",
    storageBucket: "e-commercedb-ad639.appspot.com",
    messagingSenderId: "104536208445",
    appId: "1:104536208445:web:39d47e11b558acb329e654",
    measurementId: "G-Z1HWHQG3SE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
