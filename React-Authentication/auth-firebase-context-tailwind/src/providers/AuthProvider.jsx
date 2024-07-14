import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth/cordova';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // For Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // For Login
    const logIn = (email, password) => {
        return  signInWithEmailAndPassword(auth, email, password);
    }
    // For LogOut
    const logOut = () => {
        return signOut(auth)
    }
    // Get the currently signed-in user / Observe auth state changes
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        unSubscribe();
      }
    }, [])
    
    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;