import React from "react";

const Search = () => {
  return (
    <div className="w-full flex justify-center gap-2.5 py-4">
      <input
        type="text"
        placeholder="Search for a city..."
        className="w-[300px] px-4 py-2 rounded-full border-2 text-[#eeeeee] text-base outline-none shadow-md"
      />
    </div>
  );
};

export default Search;
