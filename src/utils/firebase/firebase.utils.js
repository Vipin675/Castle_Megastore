import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrxLWS-LvtYQ3962gyX_WyqvcNpOImIrU",
  authDomain: "crwn-clothing-db-18cc3.firebaseapp.com",
  projectId: "crwn-clothing-db-18cc3",
  storageBucket: "crwn-clothing-db-18cc3.appspot.com",
  messagingSenderId: "636689100078",
  appId: "1:636689100078:web:49a525e96e7766af969ebf",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googpeProvider = new GoogleAuthProvider();

googpeProvider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googpeProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  /* used additionalInformation = {} instead of additionalInformation 'cause during signIn with googlpopup
    the only argument we are passing is only 'user' not the second argument
    But in signUp(with email password) we can pass only email and password not the userName(or displayName)
    so we need to pass the userName as second argument and it doesn't effect the signInWithGooglepopup
  */
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  // if user with userAuth.uid doesn't exists then the userSnapSot.exists() will return 'false'
  // and to run 'if' statement we do '!userSnapShot.exists' so it becomes 'true'
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error occur creating user : ", error);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);
