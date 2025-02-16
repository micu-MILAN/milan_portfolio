import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
  return (
    <div className="mx-4 md:mx-24 mt-24">
      <div>
        <h1 className="font-Signika text-white text-4xl md:text-6xl font-bold text-center">
          My Skills
        </h1>
        <p className="font-Signika text-zinc-500 mt-5 text-center">
          I have expertise in HTML, Photoshop, Figma, Tailwind CSS, and React
          for creating web content, designing visuals, building responsive UIs,
          and developing interactive applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-10 gap-5">
        <div className="w-full max-w-[500px]">
          <div className="flex justify-between">
            <h1 className="text-white font-Signika">Photoshop</h1>
            <h1 className="text-white font-Signika">40%</h1>
          </div>
          <ProgressBar
            className="w-full"
            height="9px"
            completed={40}
            maxCompleted={100}
            borderRadius="2px"
            bgColor="orange"
            labelAlignment="outside"
            labelClassName="hide"
          />
        </div>
        <div className="w-full max-w-[500px]">
          <div className="flex justify-between">
            <h1 className="text-white font-Signika">React</h1>
            <h1 className="text-white font-Signika">55%</h1>
          </div>
          <ProgressBar
            className="w-full"
            height="9px"
            completed={55}
            maxCompleted={100}
            borderRadius="2px"
            bgColor="orange"
            labelAlignment="outside"
            labelClassName="hide"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-5 gap-5">
        <div className="w-full max-w-[500px]">
          <div className="flex justify-between">
            <h1 className="text-white font-Signika">HTML</h1>
            <h1 className="text-white font-Signika">80%</h1>
          </div>
          <ProgressBar
            className="w-full"
            height="9px"
            completed={80}
            maxCompleted={100}
            borderRadius="2px"
            bgColor="orange"
            labelAlignment="outside"
            labelClassName="hide"
          />
        </div>
        <div className="w-full max-w-[500px]">
          <div className="flex justify-between">
            <h1 className="text-white font-Signika">Figma</h1>
            <h1 className="text-white font-Signika">85%</h1>
          </div>
          <ProgressBar
            className="w-full"
            height="9px"
            completed={85}
            maxCompleted={100}
            borderRadius="2px"
            bgColor="orange"
            labelAlignment="outside"
            labelClassName="hide"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-5 gap-5">
        <div className="w-full max-w-[500px]">
          <div className="flex justify-between">
            <h1 className="text-white font-Signika">Tailwind CSS</h1>
            <h1 className="text-white font-Signika">60%</h1>
          </div>
          <ProgressBar
            className="w-full"
            height="9px"
            completed={60}
            maxCompleted={100}
            borderRadius="2px"
            bgColor="orange"
            labelAlignment="outside"
            labelClassName="hide"
          />
        </div>
        <div className="w-full max-w-[500px]">
          <div className="flex justify-between">
            <h1 className="text-white font-Signika">Singing</h1>
            <h1 className="text-white font-Signika">70%</h1>
          </div>
          <ProgressBar
            className="w-full"
            height="9px"
            completed={70}
            maxCompleted={100}
            borderRadius="2px"
            bgColor="orange"
            labelAlignment="outside"
            labelClassName="hide"
          />
        </div>
      </div>
    </div>
  );
}
