// import { getDatabase, get, set, ref, child, remove } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "./configFirebase";
import { InitialUserState } from "../../context/user.js";

// const dataDb = getDatabase(app);
// get database path within firebase project
// const dbRef = ref(dataDb);

const auth = getAuth(app);

const authStateChanged = async (setUser) => {
  return await onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is authenticated");
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        accessToken: user.accessToken,
      });
      return user;
      // ...
    } else {
      console.log("User is not authenticated");
      setUser();
      return InitialUserState;
    }
  });
};

const signInWithEmail = async (email, password) => {
  // console.log(email, password);
  return await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Logged in");
    })
    .catch((error) => {
      return error.code;
    });
};

const signUpWithEmail = async (email, password, name) => {
  // console.log(email, password);
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Account Created");
      return userRecord.user;
    })
    .then(() => updateUser(name))
    .then(() => signOut())
    .then(() => signInWithEmail(email, password))
    .then(() => signInWithEmail(email, password)) // Make sure user Logged In
    .catch((error) => {
      return error.code;
    });
};

const updateUser = (name) => {
  updateProfile(auth.currentUser, {
    displayName: name,
  });
};

const signOut = async () => {
  return await auth.signOut().then(() => {
    console.log("User Logged Out");
  });
};

export { authStateChanged, signInWithEmail, signUpWithEmail, signOut };
