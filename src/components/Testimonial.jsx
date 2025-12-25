import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    client: "Upwork Client",
    review: "Excellent work and will hire again",
    rating: 5, // number of stars
  },
];

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12"
        >
          What Clients Say
        </motion.h2>

        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 sm:p-8"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl sm:text-2xl mx-1" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-lg sm:text-xl italic mb-4">
                "{testimonial.review}"
              </p>

              {/* Client Name */}
              <span className="font-semibold text-indigo-500">
                — {testimonial.client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
