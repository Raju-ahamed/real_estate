
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import AuthContext from './AuthContext';
import { auth } from '../firebase.init';


const AuthProvider = ({ children }) => {
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userInfo = {
        userLogin,
        userRegister,

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;