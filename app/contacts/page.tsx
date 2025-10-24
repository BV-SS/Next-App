import React from "react";
import Image from "next/image";

// components
import CardContainer from "@/components/CardContainer";

// icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const contacts = () => {
  return (
    <div className="h-[80vh] px-5 flex flex-col">
      <h2 className="text-3xl font-semibold pt-7 pl-15">Contacts</h2>

      <div className="flex-grow grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
        <CardContainer height="350px" width="370px">
          <div className="p-3 flex flex-col items-center pt-11 border-t-5 border-purple-800 rounded-lg">
            <Image
              src="/images/avatar_1.png"
              alt="avatar image"
              height={90}
              width={90}
              className="bg-gradient-to-t from-gray-50 to-gray-200 rounded-4xl p-1"
            />
            <h4 className="text-xl pt-3 ">Name surname</h4>
            <h6 className="text-md font-light text-gray-600 pt-3">designation will go here and more text</h6>
            <div className="pt-6 flex items-center justify-center gap-[1rem]">
              <div className="bg-blue-600 rounded-xl p-1.5">
                <FaLinkedinIn className="text-3xl text-white" />
              </div>
              <div className="rounded-xl">
                <FaGithub className="text-[2.7rem]"/>
              </div>
            </div>
          </div>
        </CardContainer>
        <CardContainer height="400px" width="370px">
          Name
        </CardContainer>
        <CardContainer height="400px" width="370px">
          Name
        </CardContainer>
      </div>
    </div>
  );
};

export default contacts;
