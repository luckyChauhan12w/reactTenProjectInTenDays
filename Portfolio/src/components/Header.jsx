export default function Header() {
  return (
    <header className="fixed w-full z-10 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          Lucky Chauhan
        </a>

        <div className="flex items-center space-x-6">
          <a
            href="#about"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
