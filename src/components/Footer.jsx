import React from "react";
import {
  FaRegCopyright,
  FaLinkedin,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaFacebookSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-16 h-auto pb-10">
      <hr className="border-t border-orange-300 border-dashed max-w-[1000px] w-full mx-auto" />
      <div>
        <h1 className="text-white font-Delicious text-4xl md:text-7xl text-center mt-10 px-4">
          Start Building Your Website
        </h1>
      </div>
      <div className="flex justify-center flex-wrap mt-16 gap-4 hover:cursor-pointer">
        <FaLinkedin className="text-zinc-500 text-3xl" />
        <FaInstagramSquare className="text-zinc-500 text-3xl" />
        <FaYoutubeSquare className="text-zinc-500 text-3xl" />
        <FaFacebookSquare className="text-zinc-500 text-3xl" />
      </div>
      <div className="flex flex-col md:flex-row gap-1 items-center justify-center mt-6 text-center">
        <h1 className="text-zinc-500 font-Signika flex items-center">
          <FaRegCopyright className="text-zinc-500 mr-1" /> Copyright 2025
        </h1>
        <h1 className="text-zinc-500 font-Signika">Milan Sunar</h1>
      </div>
    </div>
  );
}
