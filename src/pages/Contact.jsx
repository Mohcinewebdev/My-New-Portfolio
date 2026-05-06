import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

function Contact() {
    return (
        <PageWrapper>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold dark:text-gray-100">
                            Let's <span className="text-green-600">Connect</span>
                        </h1>
                        <p className="mt-8 text-xl text-gray-600 dark:text-gray-400 font-medium max-w-lg leading-relaxed">
                            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
                        </p>

                        <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-6 p-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-3xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-2xl">📞</div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Phone</p>
                                    <a href="tel:+213696244248" className="text-lg font-bold dark:text-white hover:text-green-600 transition">+213 696 244 248</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 p-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-3xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-2xl">📧</div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</p>
                                    <a href="mailto:webdevmohcine@gmail.com" className="text-lg font-bold dark:text-white hover:text-green-600 transition">webdevmohcine@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 p-4 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-3xl shadow-sm">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-2xl">📍</div>
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Location</p>
                                    <p className="text-lg font-bold dark:text-white">Batna, Algeria</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-gray-800 border dark:border-gray-700 p-10 rounded-[2.5rem] shadow-xl"
                    >
                        <form action="#" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold px-1 dark:text-gray-300">Full Name</label>
                                    <input className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 border border-transparent focus:border-green-600 outline-none transition-all dark:text-white" type="text" placeholder="Your Full Name" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold px-1 dark:text-gray-300">Email Address</label>
                                    <input className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 border border-transparent focus:border-green-600 outline-none transition-all dark:text-white" type="email" placeholder="you@example.com" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold px-1 dark:text-gray-300">Phone Number</label>
                                <input className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 border border-transparent focus:border-green-600 outline-none transition-all dark:text-white" type="number" placeholder="Your Phone Number" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold px-1 dark:text-gray-300">Message</label>
                                <textarea className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 border border-transparent focus:border-green-600 outline-none transition-all dark:text-white resize-none" rows="5" placeholder="Your Message Here..."></textarea>
                            </div>
                            <button className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 group">
                                Send Message
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Contact;
