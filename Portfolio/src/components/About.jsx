export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm Lucky Chauhan, a passionate Full Stack Web Developer based in
              India. I specialize in building modern web applications using
              React, Node.js, and other cutting-edge technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              With 2+ years of experience in web development, I've worked on
              various projects ranging from small business websites to complex
              web applications. I'm dedicated to creating efficient, scalable,
              and user-friendly solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of
              coffee.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md flex-1 min-w-[200px]">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                  Education
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  B.Tech in Computer Science
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  ABC University, 2020
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md flex-1 min-w-[200px]">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                  Experience
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Web Developer
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  XYZ Company, 2021-Present
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
