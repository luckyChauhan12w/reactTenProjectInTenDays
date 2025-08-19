import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, ShoppingBag } from "lucide-react";

export default function Sidebar() {
  const { pathname } = useLocation();
  const links = [
    { to: "/", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { to: "/users", label: "Users", icon: <Users size={20} /> },
    { to: "/products", label: "Products", icon: <ShoppingBag size={20} /> },
  ];
  return (
    <div className="w-64 bg-gray-800 p-5 flex flex-col">
      <h1 className="text-2xl font-bold text-blue-400 mb-8">Admin Panel</h1>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl transition 
              ${
                pathname === link.to
                  ? "bg-blue-500 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
