import React from "react";
import Blog from "./components/Blog";

const App = () => {
  return (
    <div className="bg-[#101828]">
      <nav className="w-[100%] border-b border-[#364153] bg-[#03071289] backdrop-blur-md text-white flex sticky top-0 left-0 justify-between px-4 py-2">
        <h1 className="text-[#00BCFF] font-semibold text-2xl">LastBlog</h1>
        <div className="w-[35px] h-[35px] bg-gray-400 rounded-full"></div>
      </nav>
      <div className="px-4 text-white">
        <Blog />
      </div>
    </div>
  );
};

export default App;
