import React from "react";

// component
import CardContainer from "@/components/CardContainer";
import { NoteForm } from "@/components/NoteForm";

const NewNote = () => {
  return (
    <div className="flex items-center justify-center mt-5 flex-col">
      <CardContainer height="40rem" width="50rem">
        <div className="flex flex-col items-start justify-evenly gap-4 p-5">
          <h3 className="text-3xl font-bold mb-4"> Add Note</h3>
          <NoteForm/>
        </div>
      </CardContainer>
    </div>
  );
};

export default NewNote;
