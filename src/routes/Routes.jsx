import App from '../App';
import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/registration',
                element: <Registration />,
            },
        ],
    },
]);

export default router;
