import React from "react";
import HorizontalWeatherCard from "./HorizontalWeatherCard";

const CurentWeatherDisplay = () => {
  const [isCelsius, setIsCelsius] = React.useState(true);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[300px] rounded-xl shadow-lg p-8">
        <div className="mb-4">
          <svg
            className="rounded-full shadow-lg"
            fill="#ffffff"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="120"
            height="120"
            viewBox="-51.48 -51.48 617.76 617.76"
            xmlSpace="preserve"
            stroke="#ffffff"
            strokeWidth="0.005148"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="M405.962,47.612c-7.037,0-13.674,1.597-19.688,4.312c-12.021-23.963-36.749-40.459-65.389-40.459 c-18.628,0-35.582,7.019-48.501,18.484C250.658,11.398,221.961,0,190.396,0C123.573,0,69.344,50.614,67.967,113.517 c-25.054,11.628-42.458,36.93-42.458,66.354c0,34.004,23.228,62.52,54.669,70.724l338.579,2.324 c39.178-1.405,70.533-33.526,70.533-73.048c0-28.219-15.988-52.661-39.388-64.872c2.61-5.929,4.121-12.441,4.121-19.335 C454.024,69.127,432.508,47.612,405.962,47.612z"></path>
                <path d="M141.818,372.364c8.501-16.438,9.524-91.36,9.524-91.36s-60.55,44.141-69.051,60.578 c-8.501,16.438-2.065,36.653,14.373,45.154C113.102,395.237,133.317,388.802,141.818,372.364z"></path>
                <path d="M266.13,372.364c8.501-16.438,9.524-91.36,9.524-91.36s-60.55,44.141-69.051,60.578 c-8.501,16.438-2.065,36.653,14.372,45.154C237.414,395.237,257.629,388.802,266.13,372.364z"></path>
                <path d="M354.861,386.736c16.438,8.501,36.653,2.065,45.154-14.372c8.501-16.438,9.524-91.36,9.524-91.36 s-60.55,44.141-69.051,60.578C331.988,358.021,338.423,378.235,354.861,386.736z"></path>
                <path d="M125.361,511.049c16.438,8.501,36.653,2.065,45.154-14.372c8.501-16.438,9.524-91.36,9.524-91.36 s-60.549,44.141-69.051,60.578C102.487,482.333,108.923,502.548,125.361,511.049z"></path>
                <path d="M249.673,511.049c16.438,8.501,36.653,2.065,45.154-14.372c8.501-16.438,9.524-91.36,9.524-91.36 s-60.55,44.141-69.051,60.578C226.8,482.333,233.235,502.548,249.673,511.049z"></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Delhi</h2>
          <p className="text-6xl font-extrabold text-amber-300 mb-2">32°C</p>

          <p className="text-lg text-gray-300 mb-4">Sunny</p>
          <div className="flex justify-center gap-8 text-gray-400">
            <div>
              <span className="block text-sm">Humidity</span>
              <span className="font-semibold text-white">40%</span>
            </div>
            <div>
              <span className="block text-sm">Wind</span>
              <span className="font-semibold text-white">12 km/h</span>
            </div>
          </div>
          <button
            className="text-white border-2 px-3 mt-4 w-[100px] rounded-full cursor-pointer"
            onClick={() => setIsCelsius((prev) => !prev)}
          >
            {isCelsius ? "Show °F" : "Show °C"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CurentWeatherDisplay;
