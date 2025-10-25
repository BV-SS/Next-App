import React from 'react'
import Link from 'next/link';

// icons
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { MdLaunch } from "react-icons/md";

// types
import { Note } from '@/types/DataTypes';

// component
import Chip from './Chip';

interface NoteCardProps {
    item: Note,
}


const NoteCard: React.FC<NoteCardProps> = ({ item }) => {
    return (
        <div className='h-48 w-78 shadow-lg  bg-white rounded-xl p-3 flex flex-col'>
            <div className='flex justify-between items-center'>
                <h3 className='text-lg font-semibold pl-2 text-gray-800'>{item.title}</h3>
                <div>
                    <AiFillEdit size={20} className='inline mx-2 hover:text-blue-500 cursor-pointer' />
                    <AiFillDelete size={20} className='inline mx-1 hover:text-red-500 cursor-pointer' />
                </div>
            </div>
            <hr className='border-gray-300 my-2' />
          
            <p className='text-gray-600 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] h-17 '>
                {item.content}
            </p>
            
            <div className='flex items-center justify-between pt-3.5'>
               <Chip tag={item.tag} />
                 
                <Link href={`/notes/${item.id}`} className='px-3 py-1 rounded-md bg-purple-800 text-white text-sm cursor-pointer hover:bg-purple-700'>
                    <button >View</button>
                    <MdLaunch className='inline ml-2' />
                </Link>
            </div>
        </div>
    )
}

export default NoteCard