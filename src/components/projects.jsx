import { motion } from "framer-motion";
import p1 from './Images/p1.avif'
import p2 from './Images/p2.png'
import p3 from './Images/p3.jpg'
import p4 from './Images/p4.png'
import p5 from './Images/p5.jpg'
import p6 from './Images/p6.jpg'
import p7 from './Images/p7.jpg'

const projects = [
  {
    title: "Digital Business Card",
    desc: "A modern digital business card app with QR code sharing and responsive design.",
    image: p1,
    tech: ["React", "Css","Redux","Material UI", "Framer Motion","javascript"],
    link: "#",
  },
  {
    title: "E-Commerce Website",
    desc: "A full-stack ecommerce store with product filtering, cart, and checkout integration.",
    image: p2,
    tech: ["React", "javascript", "html"],
    link: "https://shopping-products-7296-dsqag2vhb-yuvraj-sahus-projects-732b130c.vercel.app/",
  },
  {
    title: "Pet Adoption Platform",
    desc: "Connects pet lovers with adoption centers — beautiful UI & easy filtering system.",
    image: p3,
    tech: ["React", "Mongodb", ,"Html","css","Bootstrap"],
    link: "#",
  },
  {
    title: "Car Rental Service",
    desc: "Car rental system with booking, search, and admin dashboard.",
    image: p5,
    tech: ["React","Tailwindcss","javscript"],
    link: "https://itsmycarrental.netlify.app/",
  },
  {
    title: "Netflix Clone",
    desc: "Movie streaming clone using TMDB API with interactive hover previews.",
    image: p4,
    tech: ["React", "Tailwindcss"],
    link: "https://itsmynetflx-hub.netlify.app/",
  },
  {
    title: "Portfolio Website",
    desc: "My own responsive portfolio with animations and modern design.",
    image: p6,
    tech: ["Html","Css","Javascript"],
    link: "https://helloitsmyportfolio.netlify.app/",
  },
  {
    title: "American Insurance Web App",
    desc: "Developed a professional insurance management platform for US clients.",
    image: p7,
    tech: ["react.js", "Tailwind", "API Integration","Html"],
    link: "https://insureamerican.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-indigo-500">Projects</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                group bg-white rounded-2xl shadow-md hover:shadow-2xl 
                overflow-hidden transition-all duration-500 hover:-translate-y-2
              "
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-indigo-500 transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block text-sm font-medium text-indigo-500 hover:text-indigo-600 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
