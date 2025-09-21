import React from 'react';

// components
import CardContainer from '@/components/CardContainer';

type Props = {
  params: { id: String }
}

// icons
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';

const NotePage = async ({ params }: Props) => {
  const { id } = await params
  return (
    <>
      <div className='px-17 py-1'>
        <h2 className='text-3xl pb-4'>Note Details</h2>
        <CardContainer >
          <div className='flex items-center justify-between'>
            <div>

            <h3 className='text-3xl font-semibold pl-2 text-gray-800'>card title</h3>
            <div className='text-md text-gray-700 py-1 pl-2'> Created on : 12/3/2025</div>
            </div>
            <div className='self-start'>
              <AiFillEdit size={25} className='inline mx-2 hover:text-blue-500 cursor-pointer' />
              <AiFillDelete size={25} className='inline mx-1 hover:text-red-500 cursor-pointer' />
            </div>

          </div>
          <hr className='border-gray-300 my-2' />

           <div className='border border-amber-700 text-amber-700 bg-amber-200 px-2 py-1.5 rounded-md text-sm inline-block w-fit my-2 mx-2'>
                    personal
                   
                </div>
                 
          <p className=' p-2 pb-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla natus itaque laborum, exercitationem perspiciatis mollitia eos deleniti aliquid a, ullam eaque ab incidunt ea reprehenderit est praesentium aliquam accusantium rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore ex odit, vel quidem quas veniam quam sed. Aliquid autem similique non accusamus quaerat eos distinctio repellat doloremque magnam exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium consequatur repellat voluptate quasi velit quis facere provident accusamus commodi ipsum dolor voluptas recusandae delectus vitae natus autem, porro id!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto possimus quisquam sint expedita ab minus quaerat quae delectus sit officia, consectetur accusantium amet officiis porro ipsa quis pariatur? Quos, eius.

          </p>
        </CardContainer>
      </div>

    </>
  )
}

export default NotePage