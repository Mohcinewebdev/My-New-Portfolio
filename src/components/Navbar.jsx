import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
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

  return (
   <header className="flex justify-between sticky top-0 bg-white dark:bg-gray-900 border-b dark:border-gray-800 items-center z-50 transition-colors duration-300">
        <Link to="/"><h1 className="pl-4 text-3xl font-bold uppercase text-green-700 dark:text-green-500">M. Ziadi</h1></Link>
        <div className={`nav-links duration-500 lg:static absolute bg-white dark:bg-gray-900 border-b dark:border-gray-800 lg:border-none lg:min-h-fit min-h-fit lg:w-auto left-0 ${isMenuOpen ? 'top-[100%]' : 'top-[-750%]'} w-full flex flex-col justify-center items-center px-5 py-4 lg:py-0 transition-colors`}>
        <div className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8">
        <nav className="space-x-3 font-semibold mr-2 flex lg:flex-row flex-col items-center gap-4 lg:gap-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="nav-bar transition hover:bg-green-700 dark:hover:bg-green-600 hover:text-white dark:text-gray-200 p-2 rounded-full">Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="nav-bar transition hover:bg-green-700 dark:hover:bg-green-600 hover:text-white dark:text-gray-200 p-2 rounded-full">About Me</Link>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="nav-bar transition hover:bg-green-700 dark:hover:bg-green-600 hover:text-white dark:text-gray-200 p-2 rounded-full">My Projects</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="nav-bar transition hover:bg-green-700 dark:hover:bg-green-600 hover:text-white dark:text-gray-200 p-2 rounded-full">Contact</Link>
        </nav>
        <div className="space-x-4 text-xl lg:border-l px-4 lg:border-r flex justify-center dark:border-gray-700">
            <a href="https://www.facebook.com/mo.hcine.149843" target="_blank" rel="noreferrer" className="hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500 transition p-2 text-[20px]"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/mohcine_z26" target="_blank" rel="noreferrer" className="hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500 transition p-2 text-[20px]"><i className="fab fa-instagram"></i></a>
            <a href="https://www.t.me/mohcine_z26" target="_blank" rel="noreferrer" className="hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500 transition p-2 text-[20px]"><i className="fab fa-telegram"></i></a>
            <a href="https://www.linkedin.com/in/mohcene-ziadi-866b45366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500 transition p-2 text-[20px]"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Mohcinewebdev" target="_blank" rel="noreferrer" className="hover:text-green-600 dark:text-gray-300 dark:hover:text-green-500 transition p-2 text-[20px]"><i className="fab fa-github"></i></a>
        </div>
        </div>
        </div>

        <div className="flex gap-4 p-2 items-center">
        <button id="toggle-dark" className="btn px-3 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded-full py-2 transition-colors cursor-pointer" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <ion-icon onClick={() => setIsMenuOpen(!isMenuOpen)} name={isMenuOpen ? "close" : "menu"} className="text-3xl lg:hidden cursor-pointer dark:text-white transition-colors"></ion-icon>
        </div>
    </header>
  );
}

export default Navbar;