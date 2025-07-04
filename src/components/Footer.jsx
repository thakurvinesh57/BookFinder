import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-[#1f3d1a] text-white pt-12 pb-6 mt-12">
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-4 text-sm">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">📚 Book Finder</h2>
          <p className="text-gray-300 leading-relaxed">
            Discover your next favorite book. Explore curated collections and
            build your personal library effortlessly.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "Library", href: "/library" },
              { name: "About Us", href: "/about" },
              { name: "Contact Us", href: "/contact" },
              { name: "Privacy Policy", href: "/privacy" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/faq"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/help"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform duration-300 hover:scale-110"
            >
              <Facebook fontSize="large" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-transform duration-300 hover:scale-110"
            >
              <Twitter fontSize="large" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-transform duration-300 hover:scale-110"
            >
              <Instagram fontSize="large" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-transform duration-300 hover:scale-110"
            >
              <LinkedIn fontSize="large" />
            </a>
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
