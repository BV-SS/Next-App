import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <div className="mt-17 ml-5">
          <h1 className="text-5xl font-semibold pt-4 p-1">
            Your personal note-taking companion.
          </h1>
          <h4 className="text-lg p-1 pt-3">
            NotesApp is a minimal, fast, and elegant note-taking application
            built with Next.js and tailwind css
          </h4>
        </div>
        <div className="h-full w-full ">
          <Image src="/images/about_image.png" alt="About image" height={400} width={600} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
