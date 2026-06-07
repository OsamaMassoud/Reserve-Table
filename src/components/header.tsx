import { useNavigate, useLocation, Link } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();


  const currentPath = location.pathname.toLowerCase();

  return (
    <header className="bg-green-900 shadow-md p-6 w-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <img
          src="littel-lemon-logo.png"
          alt="Logo"
          className="w-32 h-20 object-cover cursor-pointer"
          onClick={() => navigate("/home")}
        />

  
        {currentPath === "/reservations" ? (
   
          <Link to="/home" className="inline-block">
            <button
              className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group shadow-md"
              type="button"
            >
              <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="25px"
                  width="25px"
                >
                  <path
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    fill="#000000"
                  />
                  <path
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <p className="translate-x-6">Back to Home</p>
            </button>
          </Link>
        ) : currentPath === "/" || currentPath == "/home" ? (
       
          <Link to="/Reservations" className="inline-block">
            <button
              className="bg-yellow-300 text-center w-48 rounded-2xl h-14 relative text-green-900 text-xl font-bold group shadow-md hover:bg-yellow-500 transition duration-300"
              type="button"
            >
              <p className="">Reserve a Table</p>
            </button>
          </Link>
        ) : (
  
          <div className="w-48"></div>
        )}
      </div> 


      {currentPath === "/reservations" && (
        <div className="flex flex-col items-center -translate-y-6 mt-4">
          <h1 className="text-5xl font-bold text-green-100 text-center">
            Reserve a Table
          </h1>
          <h2 className="text-xl text-yellow-200 mt-4 max-w-2xl text-center">
            Book your perfect dining experience at Little Lemon
          </h2>
        </div>
      )}
    </header>
  );
}