import me from './Images/me.png'
export default function About() {
  return (
    <section
      id="about"
      className="py-16 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Profile image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={me} // replace with your image
          alt="About"
          className="rounded-2xl shadow-soft w-72 sm:w-80 md:w-96 object-cover"
        />
      </div>

      {/* Text content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          I’m a passionate front-end developer who loves crafting visually
          appealing and highly interactive web experiences. With a focus on
          responsive design, accessibility, and performance, I create products
          that work beautifully across all devices.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <div className="px-4 py-2 bg-primary text-white rounded-lg shadow-soft">
            Frontend Developer
          </div>
          <div className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-xl hover:-translate-y-2 cursor-pointer active:translate-y-0">
  React.js Expert
</div>
<div className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-xl hover:-translate-y-2 cursor-pointer active:translate-y-0">
  UI/UX Designer
</div>
        </div>
      </div>
    </section>
  );
}
