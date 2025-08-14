import React, { useEffect } from "react";
import CurentWeatherDisplay from "./components/CurentWeatherDisplay";
import Search from "./components/Search";
import HorizontalWeatherCard from "./components/HorizontalWeatherCard";
import { useContext } from "react";
import { DataContext } from "./context/DataContext";

const App = () => {
  const cityWeather = [
    {
      id: 1,
      city: "Mumbai",
      temp: "30°C",
      desc: "Humid",
      humidity: "65%",
      wind: "14 km/h",
    },
    {
      id: 2,
      city: "Delhi",
      temp: "32°C",
      desc: "Sunny",
      humidity: "40%",
      wind: "12 km/h",
    },
    {
      id: 3,
      city: "Bangalore",
      temp: "24°C",
      desc: "Showers",
      humidity: "70%",
      wind: "10 km/h",
    },
    {
      id: 4,
      city: "Chennai",
      temp: "33°C",
      desc: "Sunny",
      humidity: "55%",
      wind: "15 km/h",
    },
    {
      id: 5,
      city: "Kolkata",
      temp: "29°C",
      desc: "Thunderstorm",
      humidity: "75%",
      wind: "18 km/h",
    },
    {
      id: 6,
      city: "Hyderabad",
      temp: "27°C",
      desc: "Cloudy",
      humidity: "60%",
      wind: "11 km/h",
    },
    {
      id: 7,
      city: "Pune",
      temp: "26°C",
      desc: "Partly Cloudy",
      humidity: "58%",
      wind: "9 km/h",
    },
    {
      id: 8,
      city: "Ahmedabad",
      temp: "34°C",
      desc: "Hot",
      humidity: "45%",
      wind: "13 km/h",
    },
    {
      id: 9,
      city: "Jaipur",
      temp: "33°C",
      desc: "Sunny",
      humidity: "35%",
      wind: "14 km/h",
    },
    {
      id: 10,
      city: "Lucknow",
      temp: "31°C",
      desc: "Humid",
      humidity: "50%",
      wind: "12 km/h",
    },
    {
      id: 11,
      city: "Indore",
      temp: "28°C",
      desc: "Cloudy",
      humidity: "55%",
      wind: "10 km/h",
    },
    {
      id: 12,
      city: "Goa",
      temp: "29°C",
      desc: "Showers",
      humidity: "80%",
      wind: "20 km/h",
    },
    {
      id: 13,
      city: "Amritsar",
      temp: "30°C",
      desc: "Sunny",
      humidity: "42%",
      wind: "11 km/h",
    },
    {
      id: 14,
      city: "Surat",
      temp: "32°C",
      desc: "Clear Sky",
      humidity: "50%",
      wind: "13 km/h",
    },
  ];

  const { setData } = useContext(DataContext);

  useEffect(() => {
    setData(cityWeather);
  }, []);

  return (
    <div className="bg-black h-screen flex flex-col justify-between py-4">
      <Search />
      <CurentWeatherDisplay />
      <HorizontalWeatherCard />
    </div>
  );
};

export default App;
