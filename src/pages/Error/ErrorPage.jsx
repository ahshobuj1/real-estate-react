import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="max-w-5xl text-center space-y-4 mx-auto">
            <h1 className="text-4xl text-red-500">Oops! </h1>
            <p>The route is not define </p>
            <Link to="/" className="btn btn-sm btn-neutral">
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
