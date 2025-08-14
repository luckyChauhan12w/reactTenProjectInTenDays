import React from "react";
import Blog from "./components/Blog";

const App = () => {
  return (
    <div className="px-4">
      <nav className="flex justify-between py-2">
        <h1 className="text-[#732DEB] font-bold text-2xl">LastBlog</h1>
        <div className="w-[35px] h-[35px] bg-gray-400 rounded-full"></div>
      </nav>
      <div>
        <Blog />
      </div>
    </div>
  );
};

export default App;
