import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import AnimatedBackground from "../components/AnimatedBackground";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function Home() {
  return (
    <PageWrapper>
      <main className="relative border-b dark:border-gray-800 rounded-b-[10%] bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300 overflow-hidden">
        <AnimatedBackground />
        
        <div className="md:flex-row justify-between flex-col flex items-center max-w-7xl mx-auto px-4 py-12 md:py-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi<span className="text-green-600 dark:text-green-500"> !</span><br /> 
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500 dark:from-green-400 dark:to-emerald-300">Mohcene Ziadi</span>
            </h1>
            <p className="font-medium pt-8 text-gray-700 dark:text-gray-300 text-xl max-w-lg">
              Full-stack Web Developer creating responsive, functional, and user-friendly web applications
            </p>
            <div className="flex gap-4 mt-12 items-center flex-wrap">
              <Link to="/projects" className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-xl transition duration-300 shadow-lg">View Projects</Link>
              <Link to="/contact" className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white font-bold rounded-xl transition duration-300 border dark:border-gray-600">Contact Me</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center mt-12 md:mt-0"
          >
            <img className="rounded-3xl border-4 border-green-800 md:w-[400px] w-[300px] shadow-2xl" src="./images/my-photo.jpg" alt="Mohcene Ziadi" />
          </motion.div>
        </div>
      </main>

      <div className="max-w-7xl mx-auto px-4">
        <motion.section 
          {...fadeInUp}
          className="text-center py-20"
        >
            <img className="rounded-full border-4 border-green-700/20 dark:border-green-500/20 p-2 md:w-[350px] md:h-[350px] w-[250px] h-[250px] mx-auto object-cover shadow-xl" src="./images/second-photo.jpg" alt="second-photo" />
            <h2 className="font-bold uppercase text-green-700 dark:text-green-500 text-lg tracking-widest pt-8">About Me</h2>
            <p className="text-3xl md:text-4xl font-bold pt-4 max-w-4xl mx-auto leading-tight dark:text-gray-100">
              Passionate developer building modern, <span className="text-green-600">responsive</span> web experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg py-8 max-w-3xl mx-auto font-medium">
              Specializing in JavaScript, React, and PHP/Laravel. I focus on creating clean, efficient code and user-friendly interfaces that solve real-world problems.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl p-6 w-full md:w-auto shadow-sm">
                    <span className="text-2xl">📧</span>
                    <a className="font-semibold dark:text-gray-200" href="mailto:webdevmohcine@gmail.com">webdevmohcine@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-2xl p-6 w-full md:w-auto shadow-sm">
                    <span className="text-2xl">📍</span>
                    <p className="font-semibold dark:text-gray-200">Batna / Algeria</p>
                </div>
            </div>
            
            <Link to="/contact" className="inline-block px-10 py-4 bg-gray-900 dark:bg-green-600 hover:bg-black dark:hover:bg-green-500 text-white font-bold rounded-2xl transition-all shadow-lg">
              Get In Touch
            </Link>
        </motion.section>

        <motion.section 
          {...fadeInUp}
          className="mb-10 py-20 rounded-3xl bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300"
        >
            <h2 className="text-4xl font-bold text-center">My <span className="text-green-700 dark:text-green-500">Skills</span></h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg py-4 px-2 font-medium text-center max-w-2xl mx-auto">
              A collection of technologies I use to bring ideas to life.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap justify-center gap-4 md:gap-6 px-4 mt-8 max-w-6xl mx-auto">
                {[
                  { name: "HTML5", icon: "fa-html5", color: "text-orange-600" },
                  { name: "CSS3", icon: "fa-css3", color: "text-blue-600" },
                  { name: "Tailwind", icon: "devicon-tailwindcss-plain", color: "text-[#38BDF8]", isDevicon: true },
                  { name: "JavaScript", icon: "fa-js", color: "text-yellow-400" },
                  { name: "React", icon: "fa-react", color: "text-[#61DAFB]" },
                  { name: "PHP", icon: "fa-php", color: "text-blue-500" },
                  { name: "Laravel", icon: "fa-laravel", color: "text-red-600" },
                  { name: "MySQL", icon: "devicon-mysql-original", color: "text-blue-400", isDevicon: true },
                  { name: "Vite", icon: "devicon-vitejs-plain", color: "text-[#646CFF]", isDevicon: true },
                  { name: "WordPress", icon: "fa-wordpress", color: "text-[#21759b]" },
                  { name: "npm", icon: "fa-npm", color: "text-red-600" },
                  { name: "Git", icon: "fa-git-alt", color: "text-red-500" },
                  { name: "GitHub", icon: "fa-github", color: "dark:text-white" },
                  { name: "Vercel", icon: "devicon-vercel-original", color: "dark:text-white", isDevicon: true },
                  { name: "Netlify", icon: "devicon-netlify-plain", color: "text-[#00C7B7]", isDevicon: true }
                ].map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-6 rounded-2xl text-center shadow-sm cursor-default"
                  >
                    {skill.isDevicon ? (
                      <i className={`${skill.icon} text-5xl ${skill.color}`}></i>
                    ) : (
                      <i className={`fa-brands ${skill.icon} text-5xl ${skill.color}`}></i>
                    )}
                    <h3 className="font-bold mt-4 dark:text-gray-100">{skill.name}</h3>
                  </motion.div>
                ))}
            </div>
        </motion.section>

        <section className="py-20">
           <motion.div {...fadeInUp} className="text-center mb-16">
             <h2 className="text-4xl font-bold">Featured <span className="text-green-700 dark:text-green-500">Projects</span></h2>
             <p className="text-gray-600 dark:text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
               Explore some of my recent work and personal projects.
             </p>
           </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  {
                    title: "Restaurant Manager",
                    desc: "Efficient order tracking and management system built with JS OOP.",
                    img: "/images/restaurant-.png",
                    tags: ["HTML", "Tailwind", "JS OOP"],
                    link: "https://restaurant-order-manager-one.vercel.app"
                  },
                  {
                    title: "Memory Game",
                    desc: "Interactive matched-pair game with smooth animations and logic.",
                    img: "/images/memory-game.png",
                    tags: ["HTML", "Tailwind", "JavaScript"],
                    link: "https://memory-game-five-sage.vercel.app"
                  },
                  {
                    title: "The Green Algeria",
                    desc: "Environmental awareness platform for tree planting initiatives.",
                    img: "/images/green-alg.png",
                    tags: ["HTML", "CSS", "JavaScript"],
                    link: "https://the-green-alg.vercel.app"
                  },
                  {
                    title: "Courses Hub",
                    desc: "Educational resources and timetable management for students.",
                    img: "/images/l2-g07-new-app.png",
                    tags: ["React", "Supabase", "Tailwind"],
                    link: "https://darling-starship-a6b23f.netlify.app"
                  }
                ].map((proj, idx) => (
                  <motion.div 
                    key={idx}
                    {...fadeInUp}
                    className="group rounded-3xl bg-white dark:bg-gray-800 border dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="overflow-hidden h-64 relative">
                      <img src={proj.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={proj.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                         <a href={proj.link} target="_blank" rel="noreferrer" className="text-white font-bold flex items-center gap-2">
                           Live Demo <span className="text-xl">↗️</span>
                         </a>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold dark:text-gray-100">{proj.title}</h3>
                      <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium">{proj.desc}</p>
                      <div className="flex gap-2 mt-6 flex-wrap">
                          {proj.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="py-1 px-4 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-xs font-bold rounded-full uppercase tracking-wider">
                              {tag}
                            </span>
                          ))}
                      </div>
                      <div className="mt-8 md:hidden">
                        <a href={proj.link} target="_blank" rel="noreferrer" className="text-green-700 dark:text-green-400 font-bold flex items-center gap-2">
                          Live Demo <span>↗️</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>

            <motion.div {...fadeInUp} className="text-center mt-20">
                <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-bold rounded-2xl transition-all shadow-lg hover:gap-4">
                  View All Projects <span className="text-xl">→</span>
                </Link>
            </motion.div>
        </section>
      </div>
    </PageWrapper>
  );
}

export default Home;