import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { current } from 'daisyui/src/colors';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


const createUser = (email, password)=> {
    return createUserWithEmailAndPassword(auth, email, password);

}
const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)

}
const logOut = () =>{
    return signOut(auth)
}

const googleLogin = (Provider) => {
    return signInWithPopup(auth, Provider)
}

useEffect ( () => {
 const unSubscribe = onAuthStateChanged(auth, currentUser => {
    console.log('user observing');
    setUser(currentUser)
 });
 return () => unSubscribe() 
},[])

    const authInfo = {
      createUser,
      signIn,
      logOut,
      googleLogin,
      user,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;