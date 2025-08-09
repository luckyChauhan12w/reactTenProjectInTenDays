import React from "react";
import CurentWeatherDisplay from "./components/CurentWeatherDisplay";
import Search from "./components/Search";
import HorizontalWeatherCard from "./components/HorizontalWeatherCard";

const App = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-between py-4">
      <Search />
      <CurentWeatherDisplay />
      <HorizontalWeatherCard />
    </div>
  );
};

export default App;
