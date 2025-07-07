import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1f3d1a] text-white pt-12 pb-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10 text-sm">
        {/* Brand Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">📚 Book Finder</h2>
          <p className="text-gray-300 leading-relaxed">
            Discover your next favorite book. Explore curated collections and
            build your personal library effortlessly.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-6 md:items-end md:w-1/2">
          <nav>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="flex flex-wrap gap-6 text-sm font-medium">
              {[
                { name: "Home", href: "/" },
                { name: "Library", href: "/library" },
                { name: "About Us", href: "/about" },
                { name: "Our Process", href: "/ourProcess" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-yellow-300 transition duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/thakurvinesh57/BookFinder"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-transform duration-300 hover:scale-110">
                <GitHub fontSize="large" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-transform duration-300 hover:scale-110">
                <Twitter fontSize="large" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-transform duration-300 hover:scale-110">
                <Instagram fontSize="large" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-transform duration-300 hover:scale-110">
                <LinkedIn fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-green-900 pt-4 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Book Finder App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
