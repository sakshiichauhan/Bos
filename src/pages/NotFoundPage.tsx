import { useNavigate } from 'react-router-dom';
import { type FC } from 'react';

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center font-poppins overflow-hidden px-4">
      {/* 404 Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] text-gray-100 font-bold leading-none select-none pointer-events-none z-0">
        404
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mt-12">
        <h1 className="text-[8rem] font-bold text-[#ff2e55] tracking-wider mb-2 md:text-[5rem] sm:text-[3.5rem]">
          OOPS!
        </h1>

        <p className="text-xl font-semibold text-gray-900 mb-2 sm:text-lg">
          Looks Like You're Lost.
        </p>

        <p className="text-base text-gray-700 mx-5 mb-6 sm:text-sm">
          The page you're looking for isn't here. Maybe it was moved, deleted, or never existed in the first place.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 mb-4 sm:text-base">
          Here Are Some Helpful Links To Get You Back On Track:
        </h2>

        <p className="text-base text-gray-700 mb-6 mx-5 sm:text-sm">
          Or, you can try searching for what you need.
          <br />
          Still stuck? Reach out to us, and we'll help you find your way!
        </p>

        <p className="text-lg font-semibold text-gray-900 mb-8 sm:text-base">
          Don't Worry, Every Great Adventure Starts
          <br />
          With A Wrong Turn! <span role="img" aria-label="smile">😊</span>
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-white border-none outline-none px-6 py-3 rounded-xl shadow-md text-base font-semibold text-gray-800 hover:bg-gray-100 hover:shadow-lg transition"
        >
          Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
