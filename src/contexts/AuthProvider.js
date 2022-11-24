import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // for newly create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // for sing in with email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign in
  const googleSingIn = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

  // update user
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // for log out
  const logOut = () => {
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing now");
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    signIn,
    user,
    googleSingIn,
    updateUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
