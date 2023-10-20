import { createContext, useEffect, useState } from "react";
import app from "./firebase.init";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)








const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup (auth,googleProvider)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('on stage changed', currentUser)
            setUser(currentUser);
            setLoading(false);
        });

        return () => 
            unSubscribe();

        

    }, [])














    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signWithGoogle,
       

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;