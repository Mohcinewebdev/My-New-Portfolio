import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

function About() {
    return (
      <PageWrapper>
         <section className="text-center pb-12 max-w-7xl mx-auto px-4">
            <img className="rounded-full border-4 border-green-700/20 mt-8 p-2 bg-green-800 md:w-[350px] md:h-[350px] w-[250px] h-[250px] mx-auto shadow-xl" src="./images/second-photo.jpg" alt="second-photo"/>
            <h2 className="font-bold uppercase text-green-700 dark:text-green-500 text-lg tracking-widest pt-10">About Me</h2>
            <p className="font-bold text-3xl md:text-4xl pt-4 dark:text-gray-100 leading-tight">
                Passionate full-stack developer building <br className="hidden md:block" /> <span className="text-green-600">modern web solutions.</span>
            </p>
            <div className="max-w-3xl mx-auto">
                <p className="text-gray-700 dark:text-gray-300 text-xl py-8 font-medium">
                    I specialize in JavaScript Vanilla, React.js, PHP/Laravel and modern web technologies. I create responsive
                    applications with expertise in CRUD systems, Authentication, and API integrations.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg pb-10 font-medium">
                    Passionate about creating responsive, clean layouts and user-friendly applications. I'm a strong team player with excellent problem-solving and communication skills.
                </p>
            </div>

            <div className="text-center">
                <motion.div whileTap={{ scale: 0.95 }} className="inline-block">
                    <Link to="/contact" className="inline-block px-10 py-4 bg-green-700 hover:bg-green-800 transition font-bold text-white rounded-2xl shadow-lg mb-12">
                      Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
      </PageWrapper>
    );
}

export default About;