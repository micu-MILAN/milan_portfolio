import React from "react";
import Form from "../assets/Form.png";
import { BiSolidDirections } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";
import { PiVoicemailFill } from "react-icons/pi";
import { FaEarthAsia } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="px-4 md:px-24 mt-24">
      <div>
        <h1 className="font-Signika text-white text-4xl md:text-6xl font-bold text-center">
          Contact Me
        </h1>
        <p className="font-Signika text-zinc-500 mt-5 text-center text-sm md:text-base">
          "Feel free to reach out for any inquiries or collaborations!"
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-10">
        <div className="text-center">
          <div className="bg-neutral-800 w-[80px] md:w-[100px] h-[80px] md:h-[100px] rounded-full flex justify-center items-center mx-auto">
            <BiSolidDirections className="text-orange-400 text-3xl md:text-4xl" />
          </div>
          <div className="text-white font-Signika mt-6">
            <h1>ADDRESS</h1>
            <p className="text-zinc-500 text-sm">Vyas-7 Damauli, Tanahun</p>
            <p className="text-zinc-500 text-sm">Gandaki Province</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-neutral-800 w-[80px] md:w-[100px] h-[80px] md:h-[100px] rounded-full flex justify-center items-center mx-auto">
            <MdLocalPhone className="text-orange-400 text-3xl md:text-4xl" />
          </div>
          <div className="text-white font-Signika mt-6">
            <h1>CONTACT</h1>
            <p className="text-zinc-500 text-sm">+977 9846659674</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-neutral-800 w-[80px] md:w-[100px] h-[80px] md:h-[100px] rounded-full flex justify-center items-center mx-auto">
            <PiVoicemailFill className="text-orange-400 text-3xl md:text-4xl" />
          </div>
          <div className="text-white font-Signika mt-6">
            <h1>EMAIL</h1>
            <p className="text-zinc-500 text-sm">micubict999@gmail.com</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-neutral-800 w-[80px] md:w-[100px] h-[80px] md:h-[100px] rounded-full flex justify-center items-center mx-auto">
            <FaEarthAsia className="text-orange-400 text-3xl md:text-4xl" />
          </div>
          <div className="text-white font-Signika mt-6">
            <h1>WEBSITE</h1>
            <p className="text-zinc-500 text-sm">milansunar.com.np</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-24 ">
        <div className="bg-neutral-100 h-auto lg:h-[526px] w-full lg:w-[500px]  lg:rounded-l-2xl flex justify-center">
          <img
            className="h-auto lg:h-[510px] w-[90%] lg:w-[390px] mt-4"
            src={Form}
            alt=""
          />
        </div>
        <div className="bg-neutral-800 h-auto lg:h-[526px] w-full lg:w-[500px]  lg:rounded-r-2xl p-6">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name "
              className="inputclass px-2 text-white bg-neutral-700 w-full lg:w-[400px] h-[45px] rounded-sm"
            />
            <input
              type="email"
              placeholder="Your Email "
              className="inputclass px-2 text-white bg-neutral-700 w-full lg:w-[400px] h-[45px] rounded-sm"
            />
            <input
              type="text"
              placeholder="Subject "
              className="inputclass px-2 text-white bg-neutral-700 w-full lg:w-[400px] h-[45px] rounded-sm"
            />
            <textarea
              placeholder="Message"
              className="inputclass px-2 text-white bg-neutral-700 w-full lg:w-[400px] h-[200px] rounded-sm resize-none"
            ></textarea>
          </form>
          <button className="mt-6 h-[50px] w-full lg:w-[150px] text-black text-xs font-bold rounded-full bg-orange-400">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
}
