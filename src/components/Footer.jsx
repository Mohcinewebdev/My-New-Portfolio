import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
        <footer className="text-center bg-gray-100 dark:bg-gray-800 md:rounded-t-[50%] rounded-t-[30%] pb-12 transition-colors duration-300">
        <h2 className="text-green-800 dark:text-green-500 md:text-4xl text-3xl duration-300 font-bold p-4 pt-12">Mohcene Ziadi</h2>
        <p className="text-gray-700 dark:text-gray-300 text-[18px] pb-8 md:px-24 px-6">Full-stack Web Developer, Creating responsive, functional web experiences with modern technologies</p>
        <ul className="flex md:gap-10 gap-5 justify-center">
            <li><Link to="/" className="font-semibold text-gray-900 dark:text-gray-100 md:text-[18px] text-[16px] hover:text-green-700 dark:hover:text-green-400 duration-300">Home</Link></li>
            <li><Link to="/about" className="font-semibold text-gray-900 dark:text-gray-100 md:text-[18px] text-[16px] hover:text-green-700 dark:hover:text-green-400 duration-300">About</Link></li>
            <li><Link to="/projects" className="font-semibold text-gray-900 dark:text-gray-100 md:text-[18px] text-[16px] hover:text-green-700 dark:hover:text-green-400 duration-300">Projects</Link></li>
            <li><Link to="/contact" className="font-semibold text-gray-900 dark:text-gray-100 md:text-[18px] text-[16px] hover:text-green-700 dark:hover:text-green-400 duration-300">Contact</Link></li>
        </ul>
        <div className="space-x-4 text-xl border-l px-4 border-r pb-12 pt-10 dark:border-gray-700">
            <a href="https://www.facebook.com/mo.hcine.149843" target="_blank" rel="noreferrer" className="hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition p-2 text-[20px]"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/mohcine_z26" target="_blank" rel="noreferrer" className="hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition p-2 text-[20px]"><i className="fab fa-instagram"></i></a>
            <a href="https://www.t.me/mohcine_z26" target="_blank" rel="noreferrer" className="hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition p-2 text-[20px]"><i className="fab fa-telegram"></i></a>
            <a href="https://www.linkedin.com/in/mohcene-ziadi-866b45366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition p-2 text-[20px]"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Mohcinewebdev" target="_blank" rel="noreferrer" className="hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition p-2 text-[20px]"><i className="fab fa-github"></i></a>
        </div>
         <div className="footer-border text-[18px]">
            <h2 className="font-bold pb-2 text-gray-900 dark:text-gray-100">Contact Info</h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-8">
                <a className="text-gray-700 dark:text-gray-300 text-[16px] hover:text-green-700 dark:hover:text-green-400 transition" href="mailto:webdevmohcine@gmail.com">📧 webdevmohcine@gmail.com</a>
                <a href="tel:+213696244248" className="text-gray-700 dark:text-gray-300 text-[16px] hover:text-green-700 dark:hover:text-green-400 transition">📞 +213696244248</a>
            </div>
        </div>
        <p className="md:text-[18px] text-[16px] text-gray-700 dark:text-gray-400 pt-8">Designed and Developed By Mohcene Ziadi  |  &copy;2026 All Rights Reserved</p>
    </footer>
        </>
    );
}

export default Footer;