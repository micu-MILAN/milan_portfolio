import React from "react";

export default function Resume() {
  return (
    <div className="mx-4 md:mx-24 mt-24">
      <div>
        <h1 className="font-Signika text-white text-4xl md:text-6xl font-bold text-center">
          Resume
        </h1>
        <p className="font-Signika text-zinc-500 mt-5 text-center">
          Highly motivated IT Assistant with experience in managing hospital IT
          systems, including COGENT EMR, and ensuring smooth technical
          operations. Seeking to leverage my technical expertise and
          problem-solving skills to enhance IT infrastructure and user
          experience in a dynamic environment.
        </p>
      </div>

      <div className="justify-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          <div className="h-[250px] w-full max-w-[500px] bg-neutral-800 rounded-lg mx-auto">
            <div className="mx-5 mt-6">
              <h1 className="font-Signika text-3xl font-bold text-orange-400">
                2018-2024
              </h1>
              <p className="text-white text-2xl md:text-4xl font-Signika">
                Bachelor Degree in ICT
              </p>
              <p className="text-zinc-500 text-xs font-bold tracking-widest font-Signika">
                TRIBHUVAN UNIVERSITY
              </p>
              <p className="text-zinc-500 font-bold font-Signika mt-4">
                The ICT course at Tribhuvan University equips students with
                skills in technology, networking, and software development for
                careers in IT and telecommunications.
              </p>
            </div>
          </div>
          <div className="h-[250px] w-full max-w-[500px] bg-neutral-800 rounded-lg mx-auto">
            <div className="mx-5 mt-6">
              <h1 className="font-Signika text-3xl font-bold text-orange-400">
                2015-2024
              </h1>
              <p className="text-white text-2xl md:text-4xl font-Signika">
                +2 Computer Science
              </p>
              <p className="text-zinc-500 text-xs font-bold tracking-widest font-Signika">
                NATIONAL EDUCATION BOARD
              </p>
              <p className="text-zinc-500 font-bold font-Signika mt-4">
                The +2 Computer Science program under NEB in Nepal is a two-year
                course focused on computing, programming, and IT basics.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div className="h-[250px] w-full max-w-[500px] bg-neutral-800 rounded-lg mx-auto">
            <div className="mx-5 mt-6">
              <h1 className="font-Signika text-3xl font-bold text-orange-400">
                2013-2015
              </h1>
              <p className="text-white text-2xl md:text-4xl font-Signika">
                School Leaving Certificate
              </p>
              <p className="text-zinc-500 text-xs font-bold tracking-widest font-Signika">
                NATIONAL EDUCATION BOARD
              </p>
              <p className="text-zinc-500 font-bold font-Signika mt-4">
                The SLC in Nepal, formerly known as the "Iron Gate," was the
                national examination taken at the end of Grade 10. It has now
                been replaced by the SEE under the new education system.
              </p>
            </div>
          </div>
          <div className="h-[250px] w-full max-w-[500px] bg-neutral-800 rounded-lg mx-auto">
            <div className="mx-5 mt-6">
              <h1 className="font-Signika text-3xl font-bold text-orange-400">
                2020-2022
              </h1>
              <p className="text-white text-2xl md:text-4xl font-Signika">
                Diploma in Computer
              </p>
              <p className="text-zinc-500 text-xs font-bold tracking-widest font-Signika">
                COMPUTER INSTITUTE
              </p>
              <p className="text-zinc-500 font-bold font-Signika mt-4">
                A technical course focusing on computing, programming, and IT
                skills for entry-level jobs or further studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
