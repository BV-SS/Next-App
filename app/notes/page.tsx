import React from "react";

// Components
import NoteCard from "@/components/Card";
// import NoteCounter from "@/components/NoteCounter";

// icons
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

// Data
import notesData from "@/data/NoteData";

const Notes = () => {
  return (
    <>
      <div className="px-7 flex justify-between">
        <h3 className="text-3xl font-bold">Your Notes</h3>
        <div>
          <FaSearch className="inline mr-5" />
          <input
            type="text"
            name="search"
            id="search"
            className="border border-gray-800 rounded-md p-1 pl-3 shadow-lg"
            placeholder="Search"
            autoComplete="off"
          />
          <Link href="/notes/new">
            <button className="bg-purple-800 text-white px-4 py-1.5 rounded-lg cursor-pointer ml-4 hover:bg-purple-700">
              Add Note
            </button>
          </Link>
        </div>
      </div>

      {/* temperary flow to study client and server components */}
      {/* <NoteCounter noteCount={notesData.length}/> */}

      <div className="px-7 pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {notesData.map((item) => (
          <NoteCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Notes;
