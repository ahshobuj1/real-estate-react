import {createContext} from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const users = 'hello';

    const authInfo = {users};

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;

UserContext.propTypes = {
    children: PropTypes.node,
};
