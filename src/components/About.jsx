import React from "react";
import img2 from "../assets/aboutme.png";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row gap-10 mt-24 m-auto mx-4 md:mx-24 font-Signika">
      <div className="flex justify-center">
        <img
          className="h-[300px] md:h-[400px] w-[300px] md:w-[400px] object-cover"
          src={img2}
          alt="About Me"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-white text-4xl md:text-6xl font-bold">About Me</h1>
        <p className="text-zinc-500 mt-7">
          A small river named madhi flow flows by their place and supplies it
          with the necessary regelialia.
        </p>
        <div className="w-full md:w-[250px] mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div className="text-white gap-y-2">
              <p>Name:</p>
              <p>Date of Birth:</p>
              <p>Address:</p>
              <p>Postal Code:</p>
              <p>Email:</p>
              <p>Phone:</p>
            </div>
            <div className="text-zinc-500">
              <p>Milan Sunar</p>
              <p>15th July, 2000</p>
              <p>Damauli,Tanahun</p>
              <p>33900</p>
              <p>micubict999@gmail.com</p>
              <p>9846659674</p>
            </div>
          </div>
        </div>
        <p className="text-white font-Signika mt-10 text-xl md:text-2xl">
          <span className="text-orange-400">120</span> Project Completed
        </p>
        <button className="h-[50px] w-full md:w-[120px] text-xs font-bold mt-4 rounded-full bg-orange-400 items-center">
          DOWNLOAD CV
        </button>
      </div>
    </div>
  );
}
