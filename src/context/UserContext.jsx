import {createContext} from 'react';
import PropTypes from 'prop-types';
import auth from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    // create user with email password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login user with email password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const authInfo = {createUser, loginUser};

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;

UserContext.propTypes = {
    children: PropTypes.node,
};
