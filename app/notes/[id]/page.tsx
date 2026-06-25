import React from 'react';

//types
import { Note } from '@/types/DataTypes';

// components
import CardContainer from '@/components/CardContainer';

// data
import notesData from '@/data/NoteData';

type Props = {
  params: Promise<{ id: string }>;
}

// icons
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';

const NotePage = async ({ params }: Props) => {
  const { id } = await params;

  const response  = await fetch(`http://localhost:3000/api/notes/${id}`, {cache:'no-store'});
  const resNote = await response.json();

  // console.log(id)
  // console.log("------------",resNote)

  // const note : Note | undefined = notesData.find((note) => note._id === Number(id))
  // console.log("note :" , note)
  return (
    <>
      <div className='px-17 py-1'>
        <h2 className='text-3xl pb-4'>Note Details</h2>
        <CardContainer >
          <div className='flex items-center justify-between'>
            <div>

            <h3 className='text-3xl font-semibold pl-2 text-gray-800'>{resNote?.title}</h3>
            <div className='text-md text-gray-700 py-1 pl-2'>{`Created on : ${resNote?.created_at}` }</div>
            </div>
            <div className='self-start'>
              <AiFillEdit size={25} className='inline mx-2 hover:text-blue-500 cursor-pointer' />
              <AiFillDelete size={25} className='inline mx-1 hover:text-red-500 cursor-pointer' />
            </div>

          </div>
          <hr className='border-gray-300 my-2' />

           <div className='border border-teal-700 text-teal-700 bg-teal-200 px-2 py-1.5 rounded-md text-sm inline-block w-fit my-2 mx-2'>
                   {resNote?.tag}
                   
                </div>
                 
          <p className=' p-2 pb-4'>
            {resNote?.content}
          </p>
        </CardContainer>
      </div>

    </>
  )
}

export default NotePage