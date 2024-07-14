import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // For Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // For Login
    const logIn = (email, password) => {
        return  signInWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {
        user,
        createUser,
        logIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;