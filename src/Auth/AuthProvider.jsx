
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
    const user = {
        name: "Guest",
        id: 1
    };
    const userInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;