import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

function Projects() {
    const projectList = [
        {
            title: "Rate Calculator",
            desc: "Online grade calculator for university students to compute final scores based on TD and Exam weights.",
            img: "./images/rate-calculator-img.png",
            tags: ["HTML", "Tailwind", "JS Vanilla"],
            link: "https://rate-calculator-seven.vercel.app"
        },
        {
            title: "Restaurant Manager",
            desc: "Efficient order tracking and management system built with JS OOP principles.",
            img: "./images/restaurant-.png",
            tags: ["HTML", "Tailwind", "JS OOP"],
            link: "https://restaurant-order-manager-one.vercel.app"
        },
        {
            title: "Memory Game",
            desc: "Fun matching pairs game with modern layout and challenging logic.",
            img: "./images/memory-game.png",
            tags: ["HTML", "Tailwind", "JS Vanilla"],
            link: "https://memory-game-five-sage.vercel.app"
        },
        {
            title: "The Green Algeria",
            desc: "Promoting tree planting and environmental awareness in Algeria.",
            img: "./images/green-alg.png",
            tags: ["HTML", "Tailwind", "JavaScript"],
            link: "https://the-green-alg.vercel.app"
        },
        {
            title: "Courses Hub",
            desc: "Educational platform for L2 G07 courses with timetables and dashboards.",
            img: "./images/l2-g07-new-app.png",
            tags: ["React", "Tailwind", "Supabase"],
            link: "https://darling-starship-a6b23f.netlify.app"
        },
        {
            title: "Attendance Tracker",
            desc: "Track student presence and manage class sessions efficiently.",
            img: "./images/student attendance.png",
            tags: ["HTML", "Tailwind", "JS Vanilla"],
            link: "https://student-attendance-neon.vercel.app"
        }
    ];

    return ( 
      <PageWrapper>
        <div className="max-w-7xl mx-auto px-4 py-12">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold dark:text-gray-100">My <span className="text-green-600">Projects</span></h1>
                <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                    A showcase of my journey as a developer, from simple tools to complex web applications.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectList.map((project, idx) => (
                    <motion.div 
                        key={idx}
                        {...fadeInUp}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className="rounded-3xl bg-white dark:bg-gray-800 border dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                        <div className="overflow-hidden h-64 relative group">
                            <img src={project.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={project.title} />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <a href={project.link} target="_blank" rel="noreferrer" className="bg-white text-black px-6 py-2 rounded-full font-bold shadow-lg">
                                    View Project
                                </a>
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold dark:text-gray-100">{project.title}</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{project.desc}</p>
                            <div className="flex gap-2 mt-6 flex-wrap">
                                {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="py-1 px-3 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-xs font-bold rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-8">
                                <a className="text-green-700 dark:text-green-400 font-bold hover:text-green-800 flex items-center gap-2"
                                 href={project.link} target="_blank" rel="noreferrer">
                                    Live Demo <span>↗️</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </PageWrapper>
    );
}

export default Projects;