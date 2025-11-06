import { motion } from "framer-motion";
import heropic from "../components/Images/giyuvraj.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl text-center md:text-left"
      >
        <div className="max-w-xl text-center md:text-left">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">
            Welcome to my world
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-primary">Yuvraj</span>{" "}
            <span className="text-gray-700">Sahu</span>
            <br />a <span className="text-indigo-500">Frontend</span>{" "}
            <span className="text-gray-900">Developer</span>.
          </h1>

          <p className="mt-4 text-gray-600">
            Passionate about crafting elegant, fast, and intuitive UIs that make
            every user interaction feel effortless.
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-white rounded-xl shadow-soft hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="https://wa.me/918849926163?text=Hi%20Yuvraj,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="
    flex items-center gap-2 px-6 py-3 rounded-xl border border-green-500 
    text-green-600 font-medium transition-all duration-300 
    hover:bg-green-500 hover:text-white hover:shadow-lg hover:-translate-y-1
  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12c0 1.826.487 3.585 1.412 5.139L2 22l5.043-1.372A9.94 9.94 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2Zm0 18a8.949 8.949 0 0 1-4.651-1.288l-.334-.199-2.992.814.799-3.067-.217-.315A8.933 8.933 0 0 1 3 12c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9Zm4.657-6.267c-.255-.128-1.509-.745-1.743-.83-.234-.085-.405-.128-.576.128-.17.255-.66.83-.809 1-.149.17-.298.192-.553.064-.255-.128-1.078-.398-2.053-1.269-.759-.677-1.271-1.511-1.42-1.766-.149-.255-.016-.393.113-.52.116-.115.255-.298.383-.446.128-.149.17-.255.255-.425.085-.17.043-.319-.021-.446-.064-.128-.575-1.384-.789-1.896-.207-.497-.418-.43-.575-.438l-.49-.008c-.17 0-.446.064-.68.319s-.894.873-.894 2.128  .915 2.47 1.042 2.642c.128.17 1.801 2.751 4.367 3.857.611.264 1.087.422 1.458.54.613.195 1.17.168 1.609.102.491-.073 1.509-.617 1.723-1.213.213-.596.213-1.106.149-1.213-.064-.106-.234-.17-.49-.298Z" />
              </svg>
              WhatsApp Me
            </a>

            <a
    href="https://www.linkedin.com/in/sahu-yuvraj/" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-600 
               text-blue-600 font-medium transition-all duration-300 
               hover:bg-blue-600 hover:text-white hover:shadow-lg hover:-translate-y-1"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 
      0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-2.5v-10h2.5v10zm-1.25
      -11.268c-.828 0-1.5-.675-1.5-1.507 0-.831.672-1.507 1.5-1.507s1.5.676 
      1.5 1.507c0 .832-.672 1.507-1.5 1.507zm13 11.268h-2.5v-5.356c0-1.277-.024
      -2.919-1.781-2.919-1.782 0-2.056 1.392-2.056 2.826v5.449h-2.5v-10h2.4v1.367h.034c.334
      -.632 1.153-1.3 2.375-1.3 2.541 0 3.012 1.674 3.012 3.851v6.082z" />
    </svg>
    LinkedIn
  </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-10 md:mt-0"
      >
        <div className="mt-10 md:mt-0">
          <img
            src={heropic}
            alt="heropic"
            className="w-80 md:w-96 custom-curve shadow-lg object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
