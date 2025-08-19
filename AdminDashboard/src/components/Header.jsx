import { useAppContext } from "../context/AppContext";
import { Bell, Search } from "lucide-react";

export default function Header() {
  const { user } = useAppContext();

  return (
    <header className="flex items-center justify-between bg-gray-800 p-4 rounded-2xl mb-6 shadow">
      <div className="flex items-center bg-gray-700 px-3 py-2 rounded-xl w-1/3">
        <Search className="text-gray-400 mr-2" size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-gray-200 w-full"
        />
      </div>
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="text-gray-300" size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>
        <div className="flex items-center gap-3">
          <img
            src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-gray-200 font-medium">{user.name}</span>
        </div>
      </div>
    </header>
  );
}
