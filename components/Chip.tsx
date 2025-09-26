import React from 'react';

// define type 
type Tag ='Home' | 'Business' | 'Personal';

const tagClasses : Record<Tag , string> = {
  Home :'border-purple-700 text-purple-700 bg-purple-200',
  Business:'border-amber-700 text-amber-700 bg-amber-200',
  Personal :'border-teal-700 text-teal-700 bg-teal-200',
}



const chip = ({tag} : {tag: Tag} ) => {
  // const 
  return (
    <div className={`border ${tagClasses[tag]} px-2 py-0.5 rounded-md text-sm`}>{tag}</div>
  )
}

export default chip