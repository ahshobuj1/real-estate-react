import {Link, useNavigate} from 'react-router-dom';
import {FaAt, FaKey, FaRegUser} from 'react-icons/fa';
import {useContext} from 'react';
import {AuthContext} from '../../context/UserContext';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    //get input value
    const handleFormValue = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(username, email, password);

        createUser(email, password)
            .then((res) => {
                console.log('created user', res.user);
                e.target.reset();
                toast('Account is created successfully!');
                navigate('/');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <>
            <div className="hero  bg-[url(src/assets/sign-in-up.jpg)] min-h-screen flex justify-center items-center">
                <div className="sm:min-w-80  md:w-[400px] h-[470px] p-7 backdrop-blur-[2px] border-2 text-white rounded-md">
                    <h2 className="text-2xl text-center font-semibold">
                        Registration
                    </h2>

                    <form onSubmit={handleFormValue}>
                        <div className="relative w-full h-12 border-b-2 border-b-slate-100 my-7">
                            <span className="absolute top-5 right-0">
                                <FaRegUser />
                            </span>
                            <input
                                name="username"
                                type="text"
                                required
                                className="w-full h-full text-white text-xl border-0 outline-0 bg-transparent cursor-text px-5 focus"
                            />
                            <label
                                htmlFor="username"
                                className="absolute top-2/4 left-1 -translate-y-2/4 text-2xl text-sky-500 duration-500">
                                Username
                            </label>
                        </div>

                        <div className="relative w-full h-12 border-b-2 border-b-slate-100 my-7">
                            <span className="absolute top-5 right-0">
                                <FaAt />
                            </span>
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full h-full text-white text-xl border-0 outline-0 bg-transparent cursor-text px-5 focus"
                            />
                            <label
                                htmlFor="email"
                                className="absolute top-2/4 left-1 -translate-y-2/4 text-2xl text-sky-500 duration-500">
                                Email
                            </label>
                        </div>

                        <div className="relative w-full h-12 border-b-2 border-b-slate-100 my-7">
                            <span className="absolute top-5 right-0">
                                <FaKey />
                            </span>
                            <input
                                name="password"
                                type="text"
                                required
                                className="w-full h-full text-white text-xl border-0 outline-0 bg-transparent cursor-text px-5 focus"
                            />
                            <label
                                htmlFor="password"
                                className="absolute top-2/4 left-1 -translate-y-2/4 text-2xl text-sky-500 duration-500">
                                Password
                            </label>
                        </div>

                        <div className="flex items-center space-x-1">
                            <input type="checkbox" />
                            <label>Accept terms and condition</label>
                        </div>
                        <button
                            type="submit"
                            className="btn bg-cyan-500 w-full my-4 border-0 font-semibold text-black">
                            Registration
                        </button>
                        <ToastContainer />

                        <p>
                            Already have an account!{' '}
                            <Link
                                to="/login"
                                className="text-blue-600 font-medium">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Registration;
