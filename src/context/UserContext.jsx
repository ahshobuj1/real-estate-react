import {createContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import auth from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    // create user with email password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login user with email password
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout user
    const logOutUser = (email, password) => {
        setLoading(true);
        return signOut(auth, email, password);
    };

    // Get current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('current user', currentUser);
                setUser(currentUser);
                setLoading(false);
            } else {
                console.log('user not found');
                setUser('');
            }
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {createUser, loginUser, logOutUser, user, loading};

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;

UserContext.propTypes = {
    children: PropTypes.node,
};
