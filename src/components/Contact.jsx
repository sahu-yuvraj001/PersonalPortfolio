import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16 bg-gray-50"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-indigo-600 mb-10"
      >
        Get in Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Let’s Connect
            </h3>
            <p className="text-gray-600 mb-6">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <FaMapMarkerAlt className="text-indigo-500 text-xl" />
              <span className="text-gray-700">Surat, Gujarat, India</span>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <a
                href="https://wa.me/918849926163?text=Hi%20Yuvraj,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-indigo-500 hover:text-indigo-600 transition"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="mailto:yuvrajsahu@example.com"
                className="flex items-center gap-2 text-indigo-500 hover:text-indigo-600 transition"
              >
                <FaEnvelope className="text-2xl" />
                <span>sahu.yuvraj001@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl shadow-lg h-[400px]"
        >
          <iframe
            title="Surat Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.092785546442!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e63f1a8b1f3%3A0xe1a7bfa742eaed55!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1697370000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
