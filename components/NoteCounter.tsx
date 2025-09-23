"use client";
import React, { useState } from "react";

type noteCountType = {
    noteCount : number
}

const NoteCounter = ({noteCount}: noteCountType) => {
  const [count, setCount] = useState(noteCount);
  return (
    <div className="flex items-center mt-10 gap-7 w-full pl-7">
      <h4 className="text-2xl inline"> Note count : {count}</h4>
      <button
        className="p-1 px-3 bg-indigo-400 border border-indigo-950 rounded-xl cursor-pointer hover:bg-indigo-500"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add Note
      </button>
    </div>
  );
};

export default NoteCounter;
