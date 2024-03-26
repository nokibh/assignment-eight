import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className=" text-center my-44 font-extrabold mx-auto">
      <h1>404 Error Page</h1>
      <p>Sorry, This Page doesn't exist</p>
      <Link to="/" className=" text-green-400">
        Please Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
