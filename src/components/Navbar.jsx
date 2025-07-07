import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=1`
      );
      const data = await res.json();

      if (data.items && data.items.length > 0) {
        setSearchResults(data.items[0]);
        setShowModal(true);
      } else {
        setSearchResults(null);
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error fetching search result:", error);
    }
  };

  return (
    <header className="bg-[#285226] text-white shadow-md relative z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Left - Logo */}
        <div className="text-2xl font-bold hover:scale-105 transition-transform duration-300">
          📚 Book Finder
        </div>

        {/* Center - Search */}
        <form
          onSubmit={handleSearch}
          className="relative w-full max-w-md mx-4 flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search book..."
            className="w-full py-2 pl-4 pr-10 bg-white text-[#285226] text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#285226] hover:text-green-600 transition">
            <SearchIcon />
          </button>
        </form>

        {/* Right - Navigation */}
        <nav>
          <ul className="flex gap-5 items-center">
            {[
              { name: "Home", path: "/" },
              { name: "Our Process", path: "/ourProcess" },
              { name: "Library", path: "/library" },
              { name: "About Us", path: "/about" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="relative px-3 py-2 transition duration-300 ease-in-out hover:text-green-300">
                  <span className="after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Modal */}
      {/* Search Result Modal */}
      {showModal && searchResults && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl font-bold">
              ×
            </button>
            <div className="text-center">
              <img
                src={
                  searchResults.volumeInfo.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/150"
                }
                alt={searchResults.volumeInfo.title}
                className="w-40 h-56 mx-auto rounded mb-4"
              />
              <h3 className="text-xl font-semibold">
                {searchResults.volumeInfo.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {searchResults.volumeInfo.authors?.join(", ") ||
                  "Unknown Author"}
              </p>
              {/* Description */}
              {searchResults.volumeInfo.description && (
                <p className="text-gray-700 text-sm mt-4 text-justify max-h-40 overflow-y-auto">
                  {searchResults.volumeInfo.description}
                </p>
              )}
              {searchResults.volumeInfo.previewLink && (
                <a
                  href={searchResults.volumeInfo.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-[#285226] text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  Preview Book
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
