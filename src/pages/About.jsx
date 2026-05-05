import { Link } from "react-router-dom";

function About() {
    return (
         <section className="text-center pb-12">
        <img className="rounded-full border mt-4 p-1 bg-green-800 md:w-[370px] md:h-[370px] w-[300px] h-[300px] mx-auto" src="./images/second-photo.jpg" alt="second-photo"/>
        <h2 className="font-semibold uppercase text-green-800 dark:text-green-500 text-[19px] pt-6">About Me</h2>
        <p className="pAbout font-bold text-2xl pb-3 pt-1 px-2">Passionate full-stack developer specializing in JavaScript Vanilla 
            and JavaScript OOP (Object Oriented Programming), React.js, PHP MVC(Model View Controller), LARAVEL and modern web technologies. I create responsive
            applications with expertise in TailwindCss(CDN, NPM), JavaScript OOP and Proffessional paradigm [CRUD System, DOM, FILTER, Authentication, 
            Authorization, File Upload, API, and more], Node.js, Always eager to tackle new challenges and build innovative solutions. 
        </p>
        <p className="text-gray-800 dark:text-gray-300 text-[18px] py-5 px-2 font-semibold"> Passionate about creating responsive, clean layouts user-friendly applications
            and learning new technologies. Strong team player with excellent problem-solving and communication skills
        </p>

        <div className="text-center">
            <Link to="/contact" className="block px-4 py-2 bg-green-700 hover:bg-green-800 dark:hover:bg-green-600 transition font-semibold w-fit m-auto text-white rounded-lg mb-12">Contact Me</Link>
        </div>
    </section>
    );
}

export default About;