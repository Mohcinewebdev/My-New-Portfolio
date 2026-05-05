import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <main className="border-b dark:border-gray-800 rounded-b-[10%] bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="md:flex-row justify-between flex-col flex items-center ">
        <div>
        <h1 className="text-5xl md:text-6xl font-bold pl-6 pt-8">Hi<span className="text-green-800 dark:text-green-500"> !</span><br /> I'm Mohcene Ziadi</h1>
        <p className="pl-6 font-awesome pt-8 text-gray-800 dark:text-gray-300 text-[18px]">20 years old, A Full Stack Web Developer, Welcome To my Portfolio.</p>
        </div>

        <div className="">
            <img src="./images/my-photo.jpg" className="rounded-full border dark:border-gray-700 mt-2 md:mr-2 bg-green-800 w-[450px] h-auto p-1" alt="my-photo" />
        </div>
        </div>

        <div className=" md:justify-left md:w-fit pl-6 mb-6 md:flex justify-center flex gap-4 mt-6 md:mt-0 pb-12">
            <Link to="/about" className="font-semibold hover:text-white hover:bg-green-600 dark:hover:bg-green-500 duration-300 border dark:border-gray-700 transition p-2 text-1xl rounded-full block">Know About Me</Link>
            <a href="./documents/my cv.docx" target="_blank" download="Mohcene Ziadi CV" className="font-semibold bg-green-600 dark:bg-green-700 text-white hover:bg-green-700 dark:hover:bg-green-600 duration-300 transition p-2 text-1xl rounded-full block">Download My CV</a>
        </div>
    </main>

    <section className="text-center">
        <img className="rounded-full border dark:border-gray-700 mt-4 p-1 bg-green-800 md:w-[370px] md:h-[370px] w-[300px] h-[300px] mx-auto" src="./images/second-photo.jpg" alt="second-photo" />
        <h2 className="font-semibold uppercase text-green-800 dark:text-green-500 text-[19px] pt-6">About Me</h2>
        <p className="pAbout font-bold text-2xl pb-3 pt-1 px-2 dark:text-gray-100">Passionate full-stack developer specializing in JavaScript Vanilla 
            and JavaScript OOP (Object Oriented Programming), React.js, PHP MVC(Model View Controller), LARAVEL and modern web technologies. I create responsive
            applications with expertise in TailwindCss(CDN, NPM), JavaScript OOP and Proffessional paradigm [CRUD System, DOM, FILTER, Authentication, 
            Authorization, File Upload, API, and more], Node.js, Always eager to tackle new challenges and build innovative solutions. 
        </p>
        <p className="text-gray-800 dark:text-gray-300 text-[18px] py-5 px-2 font-semibold"> Passionate about creating responsive, clean layouts user-friendly applications
            and learning new technologies. Strong team player with excellent problem-solving and communication skills
        </p>

        <div className="lg:flex-row justify-between flex-col flex items-center gap-4 mb-10 md:px-4">
            <div className="flex border dark:border-gray-700 dark:bg-gray-800 rounded-lg w-[70%] lg:w-[45%] py-6 px-2 shadow-sm">
                <a className="py-2 px-4 font-semibold dark:text-gray-200" href="mailto:webdevmohcine@gmail.com">📧 webdevmohcine@gmail.com</a>
            </div>
            <div className="flex border dark:border-gray-700 dark:bg-gray-800 rounded-lg w-[70%] lg:w-[45%] py-6 px-2 shadow-sm">
                <p className="py-2 px-4 font-semibold dark:text-gray-200">📍​ Batna / Algeria</p>
            </div>
        </div>
        <div className="text-center">
            <Link to="/contact" className="block px-4 py-2 bg-green-700 hover:bg-green-800 dark:hover:bg-green-600 transition font-semibold w-fit m-auto text-white rounded-lg mb-12">Contact Me</Link>
        </div>
    </section>

    <section className="mb-10 pt-10 pb-20 rounded-b-[10%] rounded-t-[10%] bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-center">My <span className="text-green-700 dark:text-green-500">Skills</span></h2>
        <p className="text-gray-800 dark:text-gray-300 text-[16px] pb-5 pt-2 px-2 font-semibold text-center">I've worked with a variety of technologies in the web 
            development world. Here's an overview of my technical skills and expertise.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
            <div className="border dark:border-gray-700 bg-gray-200 dark:bg-gray-700 cursor-pointer transition rounded-lg text-center w-[40%] md:w-[20%] hover:scale-110 duration-500">
                <i className="fa-brands fa-html5 text-5xl text-orange-600 pt-2"></i>
                <h2 className="font-bold pt-2 px-3 py-3 text-2xl dark:text-gray-100">HTML5</h2>
            </div>
            <div className="border dark:border-gray-700 bg-gray-200 dark:bg-gray-700 cursor-pointer transition rounded-lg text-center w-[40%] md:w-[20%] hover:scale-110 duration-500">
                <i className="fa-brands fa-css3 text-blue-600 text-5xl pt-2"></i>
                <h2 className="font-bold pt-2 px-3 py-3 text-2xl dark:text-gray-100">CSS3</h2>
            </div>
            <div className="border dark:border-gray-700 bg-gray-200 dark:bg-gray-700 cursor-pointer transition rounded-lg text-center w-[40%] md:w-[20%] hover:scale-110 duration-500">
                <i className="devicon-tailwindcss-plain text-5xl text-[#38BDF8] pt-2"></i>
                <h2 className="font-bold pt-2 px-3 py-3 text-2xl dark:text-gray-100">Tailwind CSS</h2>
            </div>
            <div className="border dark:border-gray-700 bg-gray-200 dark:bg-gray-700 cursor-pointer transition rounded-lg text-center w-[40%] md:w-[20%] hover:scale-110 duration-500">
                <i className="fa-brands fa-js text-yellow-400 text-5xl pt-2"></i>
                <h2 className="font-bold pt-2 px-3 py-3 text-2xl dark:text-gray-100">JavaScript</h2>
            </div>
            <div className="border dark:border-gray-700 bg-gray-200 dark:bg-gray-700 cursor-pointer transition rounded-lg text-center w-[40%] md:w-[20%] hover:scale-110 duration-500">
                <i className="fa-brands fa-react text-[#61DAFB] text-5xl pt-2"></i>
                <h2 className="font-bold pt-2 px-3 py-3 text-2xl dark:text-gray-100">React</h2>
            </div>
            <div className="border dark:border-gray-700 bg-gray-200 dark:bg-gray-700 cursor-pointer transition rounded-lg text-center w-[40%] md:w-[20%] hover:scale-110 duration-500">
                <i className="fa-brands fa-php text-5xl text-blue-500 pt-2"></i>
                <h2 className="font-bold pt-2 px-3 py-3 text-2xl dark:text-gray-100">PHP</h2>
            </div>
            <div className="border dark:border-gray-700 bg-gray-200 dark:bg-gray-700 cursor-pointer transition rounded-lg text-center w-[40%] md:w-[20%] hover:scale-110 duration-500">
                <i className="fa-brands fa-laravel text-5xl text-red-600 pt-2"></i>
                <h2 className="font-bold pt-2 px-3 py-3 text-2xl dark:text-gray-100">LARAVEL</h2>
            </div>
            <div className="border dark:border-gray-700 bg-gray-200 dark:bg-gray-700 cursor-pointer transition rounded-lg text-center w-[40%] md:w-[20%] hover:scale-110 duration-500">
                <i className="devicon-mysql-original text-5xl text-blue-400 pt-2"></i>
                <h2 className="font-bold pt-2 px-3 py-3 text-2xl dark:text-gray-100">MySQL</h2>
            </div>
            <div className="border dark:border-gray-700 bg-gray-200 dark:bg-gray-700 cursor-pointer transition rounded-lg text-center w-[40%] md:w-[20%] hover:scale-110 duration-500">
                <i className="fa-brands fa-npm text-5xl text-red-600 pt-2"></i>
                <h2 className="font-bold pt-2 px-3 py-3 text-2xl dark:text-gray-100">npm</h2>
            </div>
            <div className="border dark:border-gray-700 bg-gray-200 dark:bg-gray-700 cursor-pointer transition rounded-lg text-center w-[40%] md:w-[20%] hover:scale-110 duration-500">
                <i className="fa-brands fa-git-alt text-5xl text-red-500 pt-2"></i>
                <h2 className="font-bold pt-2 px-3 py-3 text-2xl dark:text-gray-100">Git</h2>
            </div>
            <div className="border dark:border-gray-700 bg-gray-200 dark:bg-gray-700 cursor-pointer transition rounded-lg text-center w-[40%] md:w-[20%] hover:scale-110 duration-500">
                <i className="fa-brands fa-github text-5xl pt-2 dark:text-white"></i>
                <h2 className="font-bold pt-2 px-3 py-3 text-2xl dark:text-gray-100">GitHub</h2>
            </div>
            <div className="border dark:border-gray-700 bg-gray-200 dark:bg-gray-700 cursor-pointer transition rounded-lg text-center w-[40%] md:w-[20%] hover:scale-110 duration-500">
                <i className="devicon-vercel-original text-5xl pt-2 dark:text-white"></i>
                <h2 className="font-bold pt-2 px-3 py-3 text-2xl dark:text-gray-100">Vercel</h2>
            </div>
        </div>
    </section>

    <section className="mb-16">
       <h2 className="text-2xl font-bold text-center">My <span className="text-green-700 dark:text-green-500">Projects</span></h2>
       <p className="text-gray-800 dark:text-gray-300 text-[16px] pb-5 pt-2 px-2 font-semibold text-center">Here are some of my projects. Each project showcases different
        skills and technologies I've worked with.
        </p>

        <div className="flex justify-center flex-wrap gap-6">
            <div className="rounded-lg bg-gray-300 dark:bg-gray-800 w-[90%] md:w-[45%] shadow dark:shadow-gray-900/50">
                <div className="overflow-hidden rounded-t-lg">
                <img src="./images/restaurant-.png" className="w-full h-[300px] rounded-t-lg hover:scale-105 duration-500" alt="" />
                </div>
                <h2 className="pt-4 ml-4 text-2xl font-bold dark:text-gray-100">Restaurant Order Manager</h2>
                <p className="p-4 dark:text-gray-300">Restaurant Order Manager is a simple web application that allows restaurants to manage customer orders efficiently.
                     It provides an organized interface to view, add, and track orders in a clear way. built with JavaScript OOP (Object Oriented Programming).</p>
                <div className="flex gap-2 mx-4 flex-wrap">
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">HTML</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">Tailwind CSS</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">JavaScript OOP</p>
                </div>
                <div className="ml-4 my-6">
                    <a className="text-green-800 dark:text-green-400 text-[18px] font-semibold hover:text-green-700 dark:hover:text-green-300 transition hover:underline"
                     href="https://restaurant-order-manager-one.vercel.app" target="_blank" rel="noreferrer">↗️ Live Demo</a>
                </div>
            </div>

            <div className="rounded-lg bg-gray-300 dark:bg-gray-800 w-[90%] md:w-[45%] shadow dark:shadow-gray-900/50">
                <div className="overflow-hidden rounded-t-lg">
                <img src="./images/memory-game.png" className="w-full h-[300px] rounded-t-lg hover:scale-105 duration-500" alt="" />
                </div>
                <h2 className="pt-4 ml-4 text-2xl font-bold dark:text-gray-100">Memory Game</h2>
                <p className="p-4 dark:text-gray-300">Memory Game is a fun web-based game with modern layout and design where players flip cards to match pairs. It challenges your memory
                 and concentration by requiring you to remember the location of cards and match all pairs in the least number of moves.</p>
                <div className="flex gap-2 mx-4 flex-wrap">
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">HTML</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">Tailwind CSS</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">JavaScript</p>
                </div>
                <div className="ml-4 my-6">
                    <a className="text-green-800 dark:text-green-400 text-[18px] font-semibold hover:text-green-700 dark:hover:text-green-300 transition hover:underline"
                     href="https://memory-game-five-sage.vercel.app" target="_blank" rel="noreferrer">↗️ Live Demo</a>
                </div>
            </div>

          {/* <div className="rounded-lg bg-gray-300 dark:bg-gray-800 w-[90%] md:w-[45%] shadow dark:shadow-gray-900/50">
                <div className="overflow-hidden rounded-t-lg">
                <img src="./images/courses-adding.png" className="w-full h-[300px] rounded-t-lg hover:scale-105 duration-500" alt="" />
                </div>
                <h2 className="pt-4 ml-4 text-2xl font-bold dark:text-gray-100">Courses Adding</h2>
                <p className="p-4 dark:text-gray-300">It’s a course management tool that allows students to add, list, and organize their subjects along
                 with credit values. The simple interface makes it easy to keep track of all courses in one place. It helps students
                 stay organized and manage their class schedules efficiently.</p>
                <div className="flex gap-2 mx-4 flex-wrap">
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">HTML</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">Tailwind CSS</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">JavaScript</p>
                </div>
                <div className="ml-4 my-6">
                    <a className="text-green-800 dark:text-green-400 text-[18px] font-semibold hover:text-green-700 dark:hover:text-green-300 transition hover:underline"
                     href="https://courses-adding.vercel.app" target="_blank" rel="noreferrer">↗️ Live Demo</a>
                </div>
            </div>  */}

            <div className="rounded-lg bg-gray-300 dark:bg-gray-800 w-[90%] md:w-[45%] shadow dark:shadow-gray-900/50">
                <div className="overflow-hidden rounded-t-lg">
                <img src="./images/green-alg.png" className="w-full h-[300px] rounded-t-lg hover:scale-105 duration-500" alt="" />
                </div>
                <h2 className="pt-4 ml-4 text-2xl font-bold dark:text-gray-100">The Green Algeria</h2>
                <p className="p-4 dark:text-gray-300">The Green Algeria is a project promoting tree planting to fight desertification and restore lost trees.
                 It aims to beautify the environment and raise awareness about greenery. The site provides tips, locations, and ways
                  to get involved. It encourages volunteering, donations, and participation in planting campaigns.</p>
                <div className="flex gap-2 mx-4 flex-wrap">
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">HTML</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">Tailwind CSS</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">JavaScript</p>
                </div>
                <div className="ml-4 my-6">
                    <a className="text-green-800 dark:text-green-400 text-[18px] font-semibold hover:text-green-700 dark:hover:text-green-300 transition hover:underline"
                     href="https://the-green-alg.vercel.app" target="_blank" rel="noreferrer">↗️ Live Demo</a>
                </div>
            </div>
            <div className="rounded-lg bg-gray-300 dark:bg-gray-800 w-[90%] md:w-[45%] shadow dark:shadow-gray-900/50">
                <div className="overflow-hidden rounded-t-lg">
                <img src="./images/l2-g07-new-app.png" className="w-full h-[300px] rounded-t-lg hover:scale-105 duration-500" alt="" />
                </div>
                <h2 className="pt-4 ml-4 text-2xl font-bold dark:text-gray-100">Courses App</h2>
                <p className="p-4 dark:text-gray-300">The Dynamic Web App is for L2 G07 courses at the University of Batna 02, Faculty of Letters and Foreign Languages.
                     It shows the course list, weekly timetable, and exam schedule. Students can use it to check their courses and assignments.
                      The page also includes dashboard for teachers where they can upload courses and assignments.</p>
                <div className="flex gap-2 mx-4 flex-wrap">
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">React + Vite</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">Tailwind CSS</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">Supabase</p>
                </div>
                <div className="ml-4 my-6">
                    <a className="text-green-800 dark:text-green-400 text-[18px] font-semibold hover:text-green-700 dark:hover:text-green-300 transition hover:underline"
                     href="https://darling-starship-a6b23f.netlify.app" target="_blank" rel="noreferrer">↗️ Live Demo</a>
                </div>
            </div>
            <div className="rounded-lg bg-gray-300 dark:bg-gray-800 w-[90%] md:w-[45%] shadow dark:shadow-gray-900/50">
                <div className="overflow-hidden rounded-t-lg">
                <img src="./images/student attendance.png" className="w-full h-[300px] rounded-t-lg hover:scale-105 duration-500" alt="" />
                </div>
                <h2 className="pt-4 ml-4 text-2xl font-bold dark:text-gray-100">Student Attendance Tracker</h2>
                <p className="p-4 dark:text-gray-300">An online student attendance tracker that allows students to mark their presence and view
                 attendance for each class session. It provides a clear, easy-to-use interface where users can track attendance over time.
                  The tool helps both students and teachers manage and monitor attendance efficiently.</p>
                <div className="flex gap-2 mx-4 flex-wrap">
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">HTML</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">Tailwind CSS</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">JavaScript</p>
                </div>
                <div className="ml-4 my-6">
                    <a className="text-green-800 dark:text-green-400 text-[18px] font-semibold hover:text-green-700 dark:hover:text-green-300 transition hover:underline"
                     href="https://student-attendance-neon.vercel.app" target="_blank" rel="noreferrer">↗️ Live Demo</a>
                </div>
            </div>
        </div>

        <div className="text-center">
            <Link to="/projects" className="py-2 px-4 hover:bg-white dark:hover:bg-gray-800 hover:text-black dark:hover:text-white bg-green-700 border dark:border-green-700 text-white font-semibold
             rounded-full block mt-10 mx-auto w-fit transition">View More ➡️</Link>
        </div>
    </section>
    </>
  );
}

export default Home;