import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo / Brand */}
          <h2 className="text-2xl font-bold text-indigo-500 hover:text-indigo-400 transition-colors">
            Yuvraj<span className="text-white">Sahu</span>
          </h2>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-indigo-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-indigo-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-indigo-400 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-indigo-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-indigo-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/yuvrajsahu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:scale-110 hover:text-blue-500 transition-transform duration-300 hover:-translate-y-1"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/yuvrajsahu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:scale-110 hover:text-gray-200 transition-transform duration-300 hover:-translate-y-1"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://wa.me/918849926163"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:scale-110 hover:text-green-500 transition-transform duration-300 hover:-translate-y-1"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="mailto:yuvrajsahu040@gmail.com"
              className="text-gray-400 hover:scale-110 hover:text-yellow-400 transition-transform duration-300 hover:-translate-y-1"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://www.instagram.com/mr_yuvrajjjj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:scale-110 hover:text-pink-800 transition-transform duration-300 hover:-translate-y-1"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-gray-500"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-indigo-400">Yuvraj Sahu</span>. All Rights
          Reserved. | Built with ❤️ using React & Tailwind
        </motion.div>
      </div>
    </footer>
  );
}
