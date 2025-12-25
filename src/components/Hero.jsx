import { motion } from "framer-motion";
import heropic from "../components/Images/giyuvraj.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between 
      min-h-screen px-5 sm:px-8 md:px-20 pt-24 md:pt-0"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl text-center md:text-left"
      >
        <p className="uppercase tracking-widest text-xs sm:text-sm text-gray-500 mb-2">
          Welcome to my world
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Hi, I’m <span className="text-primary">Yuvraj</span>{" "}
          <span className="text-gray-700">Sahu</span>
          <br />
          a <span className="text-indigo-500">Frontend</span>{" "}
          <span className="text-gray-900">Developer</span>.
        </h1>

        <p className="mt-4 text-sm sm:text-base text-gray-600">
          Passionate about crafting elegant, fast, and intuitive UIs that make
          every user interaction feel effortless.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-6">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl 
            border border-orange-500 text-orange-600 font-medium 
            transition-all duration-300 hover:bg-orange-500 
            hover:text-white hover:shadow-lg hover:-translate-y-1"
          >
            View Projects
          </a>

          <a
            href="https://wa.me/918849926163?text=Hi%20Yuvraj,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl 
            border border-green-500 text-green-600 font-medium 
            transition-all duration-300 hover:bg-green-500 
            hover:text-white hover:shadow-lg hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12c0 1.826.487 3.585 1.412 5.139L2 22l5.043-1.372A9.94 9.94 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2Z" />
            </svg>
            WhatsApp Me
          </a>

          <a
            href="https://www.linkedin.com/in/sahu-yuvraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl 
            border border-blue-600 text-blue-600 font-medium 
            transition-all duration-300 hover:bg-blue-600 
            hover:text-white hover:shadow-lg hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-10 md:mt-0 flex justify-center"
      >
        <img
          src={heropic}
          alt="Yuvraj Sahu"
          className="w-64 sm:w-80 md:w-96 custom-curve 
          shadow-lg object-cover"
        />
      </motion.div>
    </section>
  );
}
