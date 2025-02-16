import React from "react";
import { DiYii, DiJoomla } from "react-icons/di";
import { IoCameraOutline } from "react-icons/io5";
import { TbBrandRadixUi } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";

export default function Services() {
  return (
    <div className="mx-4 md:mx-24 mt-24">
      <div>
        <h1 className="font-Signika text-white text-4xl md:text-6xl font-bold text-center">
          Services
        </h1>
        <p className="font-Signika text-zinc-500 mt-5 text-center">
          I specialize in web development, UI/UX design, graphic designing,
          video production, and photography. I create responsive websites,
          intuitive interfaces, eye-catching designs, engaging videos, and
          stunning photos to bring your ideas to life and enhance your brand.
        </p>
      </div>

      <div className="justify-items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5">
          <div className="h-[200px] w-[300px] bg-neutral-800 flex justify-center items-center rounded-lg hover:bg-orange-400">
            <div>
              <DiYii className="text-6xl ml-6 text-white" />
              <h1 className="text-white font-Signika">GRAPHIC DESIGN</h1>
            </div>
          </div>
          <div className="h-[200px] w-[300px] bg-neutral-800 flex justify-center items-center rounded-lg hover:bg-orange-400">
            <div>
              <DiJoomla className="text-6xl ml-10 text-white" />
              <h1 className="text-white font-Signika">WEB DEVELOPMENT</h1>
            </div>
          </div>
          <div className="h-[200px] w-[300px] bg-neutral-800 flex justify-center items-center rounded-lg hover:bg-orange-400">
            <div>
              <IoCameraOutline className="text-6xl ml-10 text-white" />
              <h1 className="text-white font-Signika">PHOTO/VIDEOGRAPHY</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5">
          <div className="h-[200px] w-[300px] bg-neutral-800 flex justify-center items-center rounded-lg hover:bg-orange-400">
            <div>
              <TbBrandRadixUi className="text-6xl ml-6 text-white" />
              <h1 className="text-white font-Signika">UI/UX DESIGN</h1>
            </div>
          </div>
          <div className="h-[200px] w-[300px] bg-neutral-800 flex justify-center items-center rounded-lg hover:bg-orange-400">
            <div>
              <FaLaptopCode className="text-6xl ml-16 text-white" />
              <h1 className="text-white font-Signika">FRONTEND DEVELOPMENT</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
