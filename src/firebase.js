import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import {
    getFirestore,
} from 'firebase/firestore';
import {
    getStorage,
} from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAOL0BNU8_YQaqrZ3_x5vAnlxAvEl_w9hk",
    authDomain: "sit313-52352.firebaseapp.com",
    projectId: "sit313-52352",
    storageBucket: "sit313-52352.appspot.com",
    appId: "app213213123132131"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export const auth = getAuth(app);

export const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                resolve(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
                    reject('Wrong password!');
                } else {
                    console.log(errorCode, errorMessage);
                    reject(errorMessage);
                }
            });
    });
};



export const signUpUser = (email, password) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                resolve(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/email-already-in-use') {
                    reject('Email already in use!');
                } else if (errorCode === 'auth/invalid-email') {
                    reject('Invalid email!');
                } else if (errorCode === 'auth/operation-not-allowed') {
                    reject('Operation not allowed!');
                } else if (errorCode === 'auth/weak-password') {
                    reject('Weak password!');
                } else {
                    console.log(errorCode, errorMessage);
                    reject(errorMessage);
                }
            });
    });
};




export default app;
export { db, storage }; 