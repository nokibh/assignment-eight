import { CiStar } from 'react-icons/ci';

import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const { image, bookName, author, rating, category, tags, tags2, id } = book;
  return (
    <div>
      <div className="card  p-5  shadow-xl">
        <Link to={`/Book/${id}`}>
          {' '}
          <button></button>
          <figure>
            <img
              className=" h-52 p-7 bg-[#1313130D] rounded-xl "
              src={image}
              alt="book"
            />
          </figure>
          <div className="card-body">
            <div className="flex gap-4 text-[#23BE0A]  font-semibold">
              <h2 className="border rounded-lg text-center  bg-slate-50 p-1">
                {tags}
              </h2>
              <h2 className="border rounded-lg text-center bg-slate-50 p-1">
                {tags2}
              </h2>
            </div>
            <p className="text-black font-bold text-xl">{bookName}</p>
            <p className="text-black "> by : {author}</p>
            <hr />

            <div className="flex text-black">
              <p>{category}</p>
              <p className="flex gap-3">
                <h1 className="flex justify-center items-center gap-2 text-xl">
                  {rating}
                  <span className="text-2xl">
                    <CiStar />
                  </span>
                </h1>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Book;
