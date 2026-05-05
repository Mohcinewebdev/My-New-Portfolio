function Projects() {
    return ( 
    <>
    <div className="flex justify-center flex-wrap gap-6 my-8">
            <div className="rounded-lg bg-gray-300 dark:bg-gray-800 w-[90%] md:w-[45%] shadow dark:shadow-gray-900/50">
                <div className="overflow-hidden rounded-t-lg">
                <img src="./images/rate-calculator-img.png" className="w-full h-[300px] rounded-t-lg hover:scale-105 duration-500" alt="" />
                </div>
                <h2 className="pt-4 ml-4 text-2xl font-bold dark:text-gray-100">Rate Calculator</h2>
                <p className="p-4 dark:text-gray-300">This is an online grade calculator that helps you compute final scores. You enter your course scores along
                 with their credit values. Then, you choose the weighting between TD (continuous assessment) and exams. The tool automatically calculates your weighted final result</p>
                <div className="flex gap-2 mx-4 flex-wrap">
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">HTML</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">Tailwind CSS</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">JavaScript (Vanilla)</p>
                </div>
                <div className="ml-4 my-6">
                    <a className="text-green-800 dark:text-green-400 text-[18px] font-semibold hover:text-green-700 dark:hover:text-green-300 transition hover:underline"
                     href="https://rate-calculator-seven.vercel.app" target="_blank" rel="noreferrer">↗️ Live Demo</a>
                </div>
            </div>
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
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">JavaScript (Vanilla)</p>
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
            </div> */}

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
                <p className="p-4 dark:text-gray-300"> The Dynamic Web App is for L2 G07 courses at the University of Batna 02, Faculty of Letters and Foreign Languages.
                     It shows the course list, weekly timetable, and exam schedule. Students can use it to check their courses and assignments.
                      The page also includes dashboard for teachers where they can upload courses and assignments.</p>
                <div className="flex gap-2 mx-4 flex-wrap">
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">HTML</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">Tailwind CSS</p>
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">JavaScript</p>
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
                    <p className="py-1 px-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 md:text-[14px] text-[12px] font-semibold rounded-full">JavaScript Vanilla</p>
                </div>
                <div className="ml-4 my-6">
                    <a className="text-green-800 dark:text-green-400 text-[18px] font-semibold hover:text-green-700 dark:hover:text-green-300 transition hover:underline"
                     href="https://student-attendance-neon.vercel.app" target="_blank" rel="noreferrer">↗️ Live Demo</a>
                </div>
            </div>
        </div>
    </>
    );
}

export default Projects;