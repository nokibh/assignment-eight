import { Link } from 'react-router-dom';
const NavBer = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
              className="menu menu-sm items-center dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold gap-2 "
            >
              <Link to="/">
                <a>Home</a>
              </Link>
              <Link to="/books">Listed Books</Link>
              <Link to="/pages">
                <a>Pages to Read</a>
              </Link>
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center font-bold gap-2">
            <Link to="/">
              <a>Home</a>
            </Link>
            <Link to="/books">
              <a>Listed Books</a>
            </Link>
            <Link to="/pages">
              <a>Pages to Read</a>
            </Link>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn bg-[#23BE0A]">Sign In</a>
          <a className="btn bg-[#59C6D2]">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBer;
