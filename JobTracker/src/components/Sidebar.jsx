import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", name: "Dashboard", icon: "📊" },
    { path: "/users", name: "Users", icon: "👥" },
    { path: "/jobs", name: "Jobs", icon: "💼" },
  ];

  return (
    <div className="w-64 bg-gray-800 h-full flex flex-col">
      <div className="p-5 text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        JobTracker
      </div>
      <nav className="flex-1 mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path} className="px-4 py-2">
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-purple-700 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center p-3 text-gray-400">
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs">admin@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
