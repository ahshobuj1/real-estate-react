import {Link} from 'react-router-dom';
import './Login.css';
import {FaAt, FaEyeSlash, FaEye} from 'react-icons/fa';
import {useContext, useState} from 'react';
import {AuthContext} from '../../context/UserContext';

const Login = () => {
    const [show, setShow] = useState(false);
    const {loginUser} = useContext(AuthContext);

    //get input value
    const handleFormValue = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then((res) => {
                console.log('Login user ', res.user);
                e.target.reset();
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <>
            <div className="hero  bg-[url(src/assets/sign-in-up.jpg)] min-h-screen flex justify-center items-center">
                <div className="sm:min-w-80  md:w-[400px] h-[450px] p-7 backdrop-blur-[2px] border-2 text-white rounded-md">
                    <h2 className="text-2xl text-center font-semibold">
                        Login
                    </h2>

                    <form onSubmit={handleFormValue}>
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
                            <span
                                className="absolute top-5 right-0"
                                onClick={() => setShow(!show)}>
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </span>
                            <input
                                name="password"
                                type={show ? 'text' : 'password'}
                                required
                                className="w-full h-full text-white text-xl border-0 outline-0 bg-transparent cursor-text px-5 focus"
                            />
                            <label
                                htmlFor="password"
                                className="absolute top-2/4 left-1 -translate-y-2/4 text-2xl text-sky-500 duration-500">
                                Password
                            </label>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <input type="checkbox" />
                                <label>Remember me</label>
                            </div>

                            <Link to="" className="text-blue-600">
                                Forget password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="btn bg-cyan-500 w-full my-4 border-0 font-semibold text-black">
                            Login
                        </button>

                        <p>
                            Do not have an account!{' '}
                            <Link
                                to="/registration"
                                className="text-blue-600 font-medium">
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
