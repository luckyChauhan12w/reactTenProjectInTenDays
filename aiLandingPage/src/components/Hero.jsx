import React from "react";
import TextType from "../AnimationLogic/TextType";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="overflow-hidden h-[90vh] flex items-center justify-center">
      <div className="text-white text-center py-24 px-4 flex flex-col items-center">
        <div className="text-center mb-3 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-4xl w-fit flex justify-center items-center gap-2">
          <div className="h-2 w-2 bg-purple-600 rounded-full"></div>
          <p>MindlyAI</p>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          Your Smart AI Assistant For <br /> Faster{" "}
          <span className="text-purple-400">
            <Typewriter
              words={["Writing.", "Planning.", "Thinking."]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-8 text-gray-300">
          Mindly AI helps you write better, plan faster, and unlock your most
          productive self — all in one place.
        </p>
        <div className="mt-18">
          <button className="bg-white mb-4 text-black cursor-pointer px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Try Mindly AI for Free
          </button>
          <button className="text-white border cursor-pointer border-white px-6 py-3 rounded-lg ml-4 hover:bg-white hover:text-black transition">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
