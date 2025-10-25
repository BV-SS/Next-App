import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import CardContainer from "@/components/CardContainer";

// icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

// Data
import contactDetails from "../../data/Contact";

const contacts = () => {
  return (
    <div className="h-[80vh] px-5 flex flex-col">
      <h2 className="text-3xl font-semibold pt-7 pl-15">Contacts</h2>

      <div className="flex-grow grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
        {contactDetails.map((contact) => (
          <CardContainer height="450px" width="370px" key={contact.id} >
            <div className="p-3 flex flex-col items-center pt-11 border-t-5 border-purple-800 rounded-lg hover:scale-103 transition">
              <Image
                src={contact.avatar}
                alt="avatar image"
                height={90}
                width={90}
                className="bg-gradient-to-t from-gray-50 to-gray-200 rounded-4xl p-1"
              />
              <h4 className="text-xl pt-3 ">{contact.name}</h4>
              <h6 className="text-md font-light text-gray-600 pt-3">
                {contact.designation}
              </h6>
              <div className="flex pt-2 w-full items-center justify-center gap-2.5">
                <FaLocationDot className="text-xl text-pink-700"/>
                  <h6 className="text-sm font-light text-gray-600 ">
                      {contact.address}
                  </h6>
              </div>
              <h6 className="text-md font-light text-gray-600 pt-3">
                {contact.bio}
              </h6>
              <div className="pt-6 flex items-center justify-center gap-[1rem]">
                <div className="bg-blue-600 rounded-xl p-1.5">
                  <Link
                    href={contact.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="text-3xl text-white" />
                  </Link>
                </div>
                <div className="rounded-xl">
                  <Link
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-[2.7rem]" />
                  </Link>
                </div>
              </div>
            </div>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default contacts;
