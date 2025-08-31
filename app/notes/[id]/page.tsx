import React from 'react';

type Props ={
    params : {id : String}
}

const NotePage = async ({params } : Props) => {
    const {id} = await params
  return (
    <>
    <h3>Note Details</h3>
    <div>Note id : {id}</div>
    </>
  )
}

export default NotePage