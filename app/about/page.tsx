import React from "react";
import Image from "next/image";

// components
import CardContainer from "@/components/CardContainer";

// icons
import { FaBoltLightning } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdStickyNote2 } from "react-icons/md";

const AboutPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr] gap-1">
        <div className="mt-17 ml-17">
          <h1 className="text-5xl font-semibold pt-4 p-1">
            Your personal note-taking companion.
          </h1>
          <h4 className="text-lg p-1 pt-7">
            NotesApp is a modern, lightweight note-taking app built with Next.js and Tailwind CSS. Designed for speed and simplicity, it lets you focus on your ideas while keeping your workspace organized and beautiful.
          </h4>
        </div>
        <div className="h-full w-full ">
          <Image src="/images/about_image.png" alt="About image" height={400} width={400}  />
        </div>
      </div>

      <div className="w-full h-full flex items-center justify-center mb-5">
        <CardContainer width="80% ">
          <div className="flex items-center justify-around gap-5 pt-10 p-7">

            <div className="flex flex-col items-center justify-center hover:scale-105 transition">
                <FaBoltLightning className="text-6xl text-purple-800"/>
              <div className="font-bold pt-3 text-2xl">Fast</div>
              <h4  className="text-center text-gray-700 py-4">
                Optimized for speed and smooth writing.Built with modern web technologies like Next.js and Tailwind CSS, NotesApp is optimized for speed and performance. Every interaction feels smooth and responsive for a seamless note-taking experience.
              </h4>

            </div>
            <div className="flex flex-col items-center justify-center hover:scale-105 transition">
              <AiFillSafetyCertificate className="text-6xl text-purple-800" />
              <div className="font-bold pt-3 text-2xl">Safe</div>
               <h4 className="text-center text-gray-700  py-4">
                Your privacy matters. NotesApp keeps your data safe with secure storage practices and ensures your notes stay private. You can focus on writing without worrying about leaks or unauthorized access.
              </h4>

            </div>
            <div className="flex flex-col items-center justify-center hover:scale-105 transition">
              <MdStickyNote2 className="text-6xl text-purple-800"/>
              <div className="font-bold pt-3 text-2xl">Simple</div>
               <h4 className="text-center text-gray-700  py-4">
                Designed with clarity and minimalism in mind, NotesApp eliminates distractions. Its clean interface helps you focus on what matters most — capturing your thoughts and staying organized effortlessly.
              </h4> 

            </div>

          </div>
        </CardContainer>
      </div>
    </div>
  );
};

export default AboutPage;
