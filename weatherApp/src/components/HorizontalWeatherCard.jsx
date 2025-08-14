import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const HorizontalWeatherCard = () => {
  // Dummy data for different cities

  const { data } = useContext(DataContext);

  console.log(data);
  return (
    <div>
      <div
        className="flex overflow-x-auto gap-4 py-2 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {data?.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[140px] cursor-pointer hover:border-[#FFD230] text-white border-2 rounded-lg p-4 text-center shadow-md"
          >
            <div className="text-base font-semibold mb-1">{item.city}</div>
            <div className="text-3xl">{item.icon}</div>
            <div className="text-base my-1">{item.temp}</div>
            <div className="text-sm text-gray-300">{item.desc}</div>
          </div>
        ))}
      </div>
      <style>{`
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
        `}</style>
    </div>
  );
};

export default HorizontalWeatherCard;
