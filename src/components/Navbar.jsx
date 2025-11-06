import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
  to="/"
  className="text-2xl font-bold tracking-tight text-indigo-500 hover:text-indigo-600 transition-colors"
>
  MyPortfolio
</Link>


        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="
        relative text-gray-700 transition-all duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:w-0 after:h-0.5 after:bg-indigo-500 after:transition-all after:duration-300
        hover:text-indigo-500 hover:after:w-full
      "
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={toggleMenu}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-700 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
