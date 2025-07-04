import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="bg-[#285226] text-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold hover:scale-105 transition-transform duration-300">
        📚 Book Finder
      </h1>
      <nav>
        <ul className="flex gap-6">
          {[
            { name: "Home", path: "/" },
            { name: "Library", path: "/library" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="relative px-3 py-2 rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-[#285226] font-medium"
              >
                <span className="after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
