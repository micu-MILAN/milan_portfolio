import React from "react";
import img1 from "../assets/graduadate.png";

export default function Hero() {
  return (
    <div>
      <div className="m-auto mx-4 md:mx-24 bg-black h-full">
        <div className="flex flex-col md:flex-row gap-10 md:gap-24 font-Signika">
          <div className="mt-10 md:mt-24 text-center md:text-left">
            <h1 className="text-orange-400 font-bold">HELLO !</h1>
            <h1 className="text-white text-4xl md:text-6xl font-bold w-full md:w-[450px]">
              I'm a <span className="text-orange-400">Web Designer</span> Based
              in Nepal
            </h1>
            <div className="mt-10 flex flex-col md:flex-row gap-5 md:gap-7">
              <button className="h-[50px] w-full md:w-[120px] text-xs font-bold rounded-full bg-orange-400">
                HIRE ME
              </button>
              <button className="h-[50px] w-full md:w-[120px] text-white text-xs font-bold rounded-full border border-white">
                MY WORK
              </button>
            </div>
          </div>
          <div className="mt-10 md:mt-0 flex justify-center md:justify-start">
            <img
              className="h-[300px] md:h-[400px] w-[300px] md:w-[400px] object-cover"
              src={img1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
