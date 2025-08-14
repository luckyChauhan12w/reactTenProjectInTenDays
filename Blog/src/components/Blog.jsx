import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15">
      {[...Array(10)].map(() => {
        return (
          <div className="">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                alt=""
              />
            </div>
            <div className="">
              <div className="flex items-center gap-6 mt-6">
                <p className="text-[#99A1AF] text-xs">Mar 16, 2020</p>
                <p className="bg-[#182332] text-[#D1D5DC] py-1 px-3 rounded-full text-xs">
                  Marketing
                </p>
              </div>
              <h1 className="text-xl mt-2 font-semibold">
                Boost your conversion rate
              </h1>
              <p className="mt-4 text-[#99A1AF]">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed
                exercitationem placeat
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
