import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!</h2>
            <Link to="/"><button className="btn bg-blue-600 font-bold text-3xl">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;