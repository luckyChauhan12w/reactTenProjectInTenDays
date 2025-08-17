export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-500">Lucky Chauhan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Web Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            I build exceptional digital experiences with modern technologies.
            Currently focused on creating responsive and user-friendly web
            applications.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
            >
              View Work
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="Lucky Chauhan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
