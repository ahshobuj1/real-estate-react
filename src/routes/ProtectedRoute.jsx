import {useContext} from 'react';
import {AuthContext} from '../context/UserContext';
import {Navigate, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        <span className="loading loading-ring loading-lg"></span>;
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={location.pathname} />;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
    children: PropTypes.node,
};
