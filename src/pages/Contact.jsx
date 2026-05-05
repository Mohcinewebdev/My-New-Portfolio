import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
        <main className="">
        <div className="md:flex-row justify-between flex-col flex items-center ">
        <div>
        <h1 className="text-5xl md:text-6xl font-bold pl-6 pt-8">Contact Me Now</h1>
        </div>

        <form action="contact.php" method="post" className="border dark:border-gray-700 rounded-lg p-6 my-10 md:mr-12 md:mt-12 m-auto w-[90%] space-y-3 bg-white dark:bg-gray-800 shadow-md">
            <h2 className="text-3xl font-bold">Send Me A <span className="text-green-700 dark:text-green-500">Message</span></h2>
            <input className="p-4 outline-none border-b dark:border-gray-600 w-full bg-transparent dark:text-white" type="text" name="full_name" placeholder="Full Name" required /> <br />
            <input className="p-4 outline-none border-b dark:border-gray-600 w-full bg-transparent dark:text-white" type="email" name="email" placeholder="Email Address" required /> <br />
            <input className="p-4 outline-none border-b dark:border-gray-600 w-full bg-transparent dark:text-white" type="tel" name="phone" placeholder="Phone Number" required /> <br />
            <textarea className="p-4 outline-none border-b dark:border-gray-600 w-full bg-transparent dark:text-white" rows="5" cols="10" name="message" id="message" placeholder="Your Message Here..."></textarea> <br />
            <input className="bg-green-600 dark:bg-green-700 rounded-full cursor-pointer px-4 py-2 text-white font-bold transition hover:bg-green-700 dark:hover:bg-green-600" type="submit" value="Send Now" />
        </form>
        </div>

        <div className="lg:flex-row justify-between flex-col flex items-center gap-4 mb-10 md:px-4">
            <div className="flex border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg w-[70%] lg:w-fit py-6 px-2 shadow-sm">
                <a className="py-2 px-4 font-semibold text-gray-800 dark:text-gray-200" href="tel:+123696244248">​📞 +213696244248</a>
            </div>
            <div className="flex border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg w-[70%] lg:w-fit py-6 px-2 shadow-sm">
                <a className="py-2 px-4 font-semibold text-gray-800 dark:text-gray-200" href="mailto:webdevmohcine@gmail.com">📧 webdevmohcine@gmail.com</a>
            </div>
            <div className="flex border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg w-[70%] lg:w-fit py-6 px-14 shadow-sm">
                <p className="py-2 px-4 font-semibold text-gray-800 dark:text-gray-200">📍​ Batna / Algeria</p>
            </div>
        </div>
    </main>
    </>
    );
}

export default Contact;