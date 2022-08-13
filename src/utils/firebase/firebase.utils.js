import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
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

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  //   console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  //   console.log(userSnapShot);
  //   console.log(userSnapShot.exists());

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
      });
    } catch (error) {
      console.log("error occur creating user : ", error);
    }
  }
  return userDocRef;
};
