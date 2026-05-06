import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
    return (
        <footer className="relative bg-gray-50 dark:bg-gray-900 pt-20 pb-12 transition-colors duration-300 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <motion.h2 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-green-700 dark:text-green-500 text-4xl font-bold tracking-tight"
                >
                    Mohcene Ziadi
                </motion.h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mt-4 max-w-2xl mx-auto font-medium">
                    Full-stack Web Developer creating responsive, functional, and beautiful web experiences.
                </p>
                
                <ul className="flex flex-wrap gap-8 justify-center mt-12">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <li key={item}>
                            <Link 
                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="font-bold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex justify-center gap-6 mt-12 pb-12 border-b dark:border-gray-800">
                    {[
                        { icon: "fa-facebook", url: "https://www.facebook.com/mo.hcine.149843" },
                        { icon: "fa-instagram", url: "https://www.instagram.com/mohcine_z26" },
                        { icon: "fa-telegram", url: "https://www.t.me/mohcine_z26" },
                        { icon: "fa-linkedin", url: "https://www.linkedin.com/in/mohcene-ziadi-866b45366" },
                        { icon: "fa-github", url: "https://github.com/Mohcinewebdev" }
                    ].map((social, idx) => (
                        <motion.a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -5, color: "#16a34a" }}
                            className="text-gray-800 dark:text-gray-400 transition-colors text-2xl"
                        >
                            <i className={`fab ${social.icon}`}></i>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-12">
                    <h3 className="font-bold text-gray-900 dark:text-gray-100 uppercase tracking-widest text-sm mb-6">Contact Info</h3>
                    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
                        <a className="text-gray-600 dark:text-gray-400 font-medium hover:text-green-600 transition-colors flex items-center justify-center gap-2" href="mailto:webdevmohcine@gmail.com">
                            <span>📧</span> webdevmohcine@gmail.com
                        </a>
                        <a href="tel:+213696244248" className="text-gray-600 dark:text-gray-400 font-medium hover:text-green-600 transition-colors flex items-center justify-center gap-2">
                            <span>📞</span> +213 696 244 248
                        </a>
                    </div>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-500 mt-16 font-medium">
                    &copy; {new Date().getFullYear()} Mohcene Ziadi. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
