import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const location = useLocation();

  const activeLink = (path) =>
    location.pathname === path
      ? "bg-green-700 text-white"
      : "text-gray-800 dark:text-white";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
           (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "My Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex justify-between sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-800 items-center z-50 transition-colors duration-300">
      <Link to="/">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="pl-4 text-3xl font-bold uppercase text-green-700 dark:text-green-500"
        >
          M. Ziadi
        </motion.h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8 px-5">
        <div className="flex items-center gap-2 font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-bar transition-all duration-300 hover:bg-green-700 dark:hover:bg-green-600 hover:text-white p-2 px-4 rounded-full ${activeLink(link.path)}`}
            >
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="block"
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-2 border-l pl-6 dark:border-gray-700">
          {[
            { icon: "fa-facebook", url: "https://www.facebook.com/mo.hcine.149843" },
            { icon: "fa-instagram", url: "https://www.instagram.com/mohcine_z26" },
            { icon: "fa-telegram", url: "https://www.t.me/mohcine_z26" },
            { icon: "fa-linkedin", url: "https://www.linkedin.com/in/mohcene-ziadi-866b45366" },
            { icon: "fa-github", url: "https://github.com/Mohcinewebdev" },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, color: "#16a34a" }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 dark:text-gray-300 transition-colors p-2 text-xl"
            >
              <i className={`fab ${social.icon}`}></i>
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b dark:border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl font-bold p-3 rounded-xl transition-all ${location.pathname === link.path ? 'text-green-600' : ''}`}
                >
                  <motion.span whileTap={{ scale: 0.9 }}>{link.name}</motion.span>
                </Link>
              ))}
              <div className="flex flex-wrap justify-center gap-6 mt-4">
                 {[
                   { icon: "fa-facebook", url: "https://www.facebook.com/mo.hcine.149843" },
                   { icon: "fa-instagram", url: "https://www.instagram.com/mohcine_z26" },
                   { icon: "fa-telegram", url: "https://www.t.me/mohcine_z26" },
                   { icon: "fa-linkedin", url: "https://www.linkedin.com/in/mohcene-ziadi-866b45366" },
                   { icon: "fa-github", url: "https://github.com/Mohcinewebdev" },
                 ].map((social, idx) => (
                   <a 
                     key={idx} 
                     href={social.url} 
                     target="_blank" 
                     rel="noreferrer" 
                     className="text-2xl text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors"
                   >
                     <i className={`fab ${social.icon}`}></i>
                   </a>
                 ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-4 p-2 items-center pr-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn px-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full py-2 transition-colors cursor-pointer shadow-sm"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </motion.button>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-3xl cursor-pointer dark:text-white focus:outline-none"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ion-icon name={isMenuOpen ? "close" : "menu"}></ion-icon>
          </motion.div>
        </button>
      </div>
    </header>
  );
}

export default Navbar;