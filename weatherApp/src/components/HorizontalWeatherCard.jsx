import React from "react";

const HorizontalWeatherCard = () => {
  // Dummy data for different cities
  const cityWeather = [
    { city: "New York", temp: "22°C", icon: "🌤️", desc: "Partly Cloudy" },
    { city: "London", temp: "18°C", icon: "🌧️", desc: "Rain Showers" },
    { city: "Tokyo", temp: "25°C", icon: "☀️", desc: "Sunny" },
    { city: "Paris", temp: "20°C", icon: "⛅", desc: "Cloudy" },
    { city: "Sydney", temp: "28°C", icon: "🌞", desc: "Clear Sky" },
    { city: "Moscow", temp: "15°C", icon: "🌦️", desc: "Light Rain" },
    { city: "Mumbai", temp: "30°C", icon: "🌡️", desc: "Humid" },
    { city: "Delhi", temp: "35°C", icon: "☀️", desc: "Hot" },
    { city: "Bangalore", temp: "24°C", icon: "🌦️", desc: "Showers" },
    { city: "Chennai", temp: "32°C", icon: "🌞", desc: "Sunny" },
    { city: "Kolkata", temp: "29°C", icon: "🌦️", desc: "Thunderstorm" },
    { city: "Hyderabad", temp: "27°C", icon: "⛅", desc: "Cloudy" },
    { city: "Pune", temp: "26°C", icon: "🌤️", desc: "Partly Cloudy" },
    { city: "Ahmedabad", temp: "34°C", icon: "☀️", desc: "Hot" },
    { city: "Jaipur", temp: "33°C", icon: "☀️", desc: "Sunny" },
    { city: "Lucknow", temp: "31°C", icon: "🌡️", desc: "Humid" },
    { city: "Indore", temp: "28°C", icon: "⛅", desc: "Cloudy" },
    { city: "Goa", temp: "29°C", icon: "🌦️", desc: "Showers" },
    { city: "Amritsar", temp: "30°C", icon: "☀️", desc: "Sunny" },
    { city: "Surat", temp: "32°C", icon: "🌞", desc: "Clear Sky" },
  ];

  return (
    <div>
      <div
        className="flex overflow-x-auto gap-4 py-2 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {cityWeather.map((item, idx) => (
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
