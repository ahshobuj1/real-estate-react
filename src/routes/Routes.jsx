import App from '../App';
import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import ErrorPage from '../pages/Error/ErrorPage';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Blogs from '../pages/Blog/Blogs';
import Discount from '../components/Discount';
import Teams from '../components/TeamMember/Teams';
import Reservation from '../pages/Reservation/Reservation';
import ProtectedRoute from './ProtectedRoute';
import Premium from '../pages/Premium/Premium';
import Class from '../components/Class';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,

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
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: '/blog',
                element: <Blogs />,
            },
            {
                path: '/discount',
                element: <Discount />,
            },
            {
                path: '/team',
                element: <Teams />,
            },
            {
                path: '/reservation',
                element: <Reservation />,
            },
            {
                path: '/premium',
                element: (
                    <ProtectedRoute>
                        <Premium />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/class',
                element: (
                    <ProtectedRoute>
                        <Class />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

export default router;
