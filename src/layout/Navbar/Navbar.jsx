import {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {AuthContext} from '../../context/UserContext';

const Navbar = () => {
    const {user, logOutUser} = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => console.log('user logged out'))
            .catch((err) => console.log(err.message));
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
                <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
                <NavLink to="/premium">Premium</NavLink>
            </li>
            <li>
                <NavLink to="/reservation">Booking</NavLink>
            </li>
            <li>
                <NavLink to="/team">Teams</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-red-200 rounded-t-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    Calm & Cozy Corner
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <>
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={
                                            user.photoURL
                                                ? user.photoURL
                                                : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                        }
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li>
                                    <a>{user.email}</a>
                                </li>
                                <li>
                                    <a onClick={handleLogOut}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <Link to="/login" className="btn btn-neutral btn-sm">
                        Log In
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
