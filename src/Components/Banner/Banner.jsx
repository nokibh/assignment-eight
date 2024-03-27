import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="container mx-auto p-4 card">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-40  rounded-2xl bg-[#1313130D]  p-20">
        <div className="justify-center text-center my-6">
          <p className="font-extrabold text-3xl text-black">
            Books to freshen <br /> up your bookshelf
          </p>
          <Link to="/books">
            <button className="btn bg-[#23BE0A] text-white mt-10">
              View The List
            </button>
          </Link>{' '}
        </div>

        <figure>
          <img
            className="h-48 rounded-lg"
            src="https://i.ibb.co/r0v740p/pngwing-1.png"
            alt="Movie"
          />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
