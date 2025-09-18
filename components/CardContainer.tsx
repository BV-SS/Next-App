import React, { ReactNode } from 'react';

interface CardContainerProps{
    height?:string,
    width?:string,
    children : ReactNode
}

const CardContainer = ({height = '100%', width = '100%', children} : CardContainerProps) => {
  return (
    <div className='shadow-lg  bg-white rounded-xl p-3 flex flex-col' style={{height , width}}>
        {children}
    </div>
  )
}

export default CardContainer