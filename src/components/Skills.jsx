import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { DiMongodb ,DiBootstrap } from "react-icons/di";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
  { name: "Bootstrap", icon: <DiBootstrap className="text-purple-500 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-sky-400 text-5xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
  { name: "MongoDb", icon: <DiMongodb className="text-green-500 text-5xl" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-indigo-500">Skills</span>
        </motion.h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          A blend of design sense and technical precision — crafting interactive, performant, and visually engaging web experiences.
        </p>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
  key={skill.name}
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4, delay: index * 0.1 }}
  className="
    flex flex-col items-center justify-center 
    bg-white shadow-md 
    hover:shadow-2xl 
    transition-all duration-500 ease-in-out 
    rounded-2xl p-6 hover:-translate-y-2
    hover:bg-linear-to-br hover:from-indigo-500 hover:to-blue-500
    hover:text-white
  "
>
              {skill.icon}
              <p className="mt-3 text-gray-800 font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
