import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseConfig } from "./firebaseconfig";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
// ''''''''''''''initalization --------------
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const db = getFirestore(app);

// =================== auth functions ==============
export const SignInUserWithEmail = async (userdetails: {
  email: string;
  password: string;
}) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      userdetails.email,
      userdetails.password
    );

    const result = user.user;

    return result;
  } catch (error) {}
};

export const signUserOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {}
};

export const createUserInDb = async (user: {
  email: string;
  password: string;
  fullname: string;
}) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    const { photoURL, email, phoneNumber, uid } = res.user;

    const docreference = doc(db, "users", uid);
    await setDoc(docreference, {
      fullname: user.fullname,
      email: email,
      userid: uid,
      images: photoURL,
      phonenumber: phoneNumber,
    });
  } catch (error) {
    console.log(error);
  }
};

//  --------------- FUNCTIONS ON THE PRODUTS ==============
