import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  saveToLocalStorage,
  saveToLocalStorage2,
} from '../LocalStorage/LocalStorage';

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  // const idInt = parseInt(id);
  const book = books.find(book => book.id === id);
  console.log(book);
  const handleRead = () => {
    saveToLocalStorage(book);
    // toast('Added success');
  };
  const handleWish = () => {
    saveToLocalStorage2(book);
  };
  return (
    <div className="mt-10  h-52 mr-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="lg:flex justify-center items-center gap-x-20">
          <div>
            {' '}
            <figure>
              <img className="w-92 h-96" src={book.image} alt="Movie" />
            </figure>
          </div>
          <ToastContainer></ToastContainer>
          <div className="card-body">
            <h2 className="card-title">{book.bookName}</h2>
            <p>By: {book.author} </p>
            <hr />
            <p> {book.category} </p>
            <hr />
            <p>
              <span className="font-bold">Review:</span> {book.review}{' '}
            </p>

            <div>
              <div className="flex p-5">
                <p className=""> Tag: {book.tags} </p>
                <p> {book.tags2} </p>
              </div>
            </div>

            <hr />

            <div className="my-3">
              <p className="flex gap-x-28 my-2">
                Number of Pages:
                <p className="text-black  font-extrabold ">{book.totalPages}</p>
              </p>

              <p className="flex gap-x-40 my-2">
                Publisher:
                <p className="text-black  font-extrabold ">{book.publisher}</p>
              </p>

              <p className="flex gap-x-28 my-2">
                Year of Publishing:
                <p className="text-black  font-extrabold ">
                  {book.yearOfPublishing}
                </p>
              </p>

              <p className="flex gap-x-48 my-2">
                Rating:
                <p className="text-black  font-extrabold ">{book.rating}</p>
              </p>
            </div>
            <div
              className="flex
     gap-10  pr-2"
            >
              <div onClick={handleRead} className="card-actions ">
                <button className="btn btn-primary text-white">Read</button>
              </div>

              <div onClick={handleWish} className="card-actions">
                <button className="btn btn-primary text-white ">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
