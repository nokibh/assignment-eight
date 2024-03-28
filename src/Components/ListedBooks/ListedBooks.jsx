import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { getStoredBook } from '../../LocalStorage/LocalStorage';

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="container mx-auto p-4 mt-12">
      <h1 className="text-4xl text-center font-extrabold text-black border p-4 bg-slate-300 rounded-lg">
        Books
      </h1>

      <div className=" text-center mt-12">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn w-52 m-1 bg-green-500 text-white"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className=" font-bold dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 text-black"
          >
            <li className="">
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>publisher year</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  text-gray-100 ml-4">
        <div>
          <div>
            <Link
              to={`/books/read`}
              onClick={() => setTabIndex(0)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? 'border border-b-0 ' : 'border-b'
              }rounded-t-lg border-gray-400 text-black`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Read</span>
            </Link>
          </div>
          <Outlet></Outlet>
        </div>

        <Link
          to={`/books/wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? 'border border-b-0 ' : 'border-b'
          }rounded-t-lg border-gray-400 text-black`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist</span>
        </Link>
      </div>
    </div>
  );
};

export default ListedBooks;
