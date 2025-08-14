import React from "react";

const Loading = () => {
  return (
    <>
      {[...Array(20)].map(() => {
        return (
          <div className="animate-pulse">
            {/* Image skeleton */}
            <div className="rounded-2xl overflow-hidden bg-gray-700 h-48"></div>

            {/* Text skeleton */}
            <div className="mt-6">
              <div className="flex items-center gap-6">
                <div className="h-3 w-16 bg-gray-700 rounded"></div>
                <div className="h-3 w-20 bg-gray-700 rounded-full"></div>
              </div>
              <div className="h-5 w-3/4 bg-gray-700 rounded mt-4"></div>
              <div className="h-3 w-full bg-gray-700 rounded mt-4"></div>
              <div className="h-3 w-5/6 bg-gray-700 rounded mt-2"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Loading;
