
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import AuthContext from './AuthContext';
import { auth } from '../firebase.init';
import { useEffect, useState } from 'react';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true);
    const userLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const userRegister = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User State:", currentUser);
            setUser(currentUser);
            setLoader(false);

        });
        return () => {
            unSubscribe()
        };
    }, [])

    const userLogOut = () => {
        setLoader(true);
        return signOut(auth);
    }
    if (loader) return <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-xl"></span>
        <span className="loading loading-spinner loading-xl"></span>
        <span className="loading loading-spinner loading-xl"></span>
    </div>;
    const userInfo = {
        userLogin,
        userRegister,
        userLogOut,
        user,
        loader

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;