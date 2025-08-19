export default function Projects() {
  const projects = [
    {
      title: "Netflix Clone",
      description:
        "A frontend clone of Netflix with movie posters, categories, and a responsive UI. Data is fetched from TMDB API (or static dataset).",
      technologies: ["React", "Tailwind CSS", "TMDB API"],
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      link: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "A simple weather forecast application that displays weather details using static JSON data. Built to practice API integration and UI design.",
      technologies: ["React", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      link: "#",
    },
    {
      title: "YouTube Clone",
      description:
        "A frontend YouTube clone with video cards, categories, and a responsive design to mimic the real platform UI.",
      technologies: ["React", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=869&q=80",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was built to solve a
          specific problem or explore new technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
