'use client';

import React,{useState} from 'react'

interface NoteType {
    title : string,
    description : string,
    tag : string
}

export const NoteForm = () => {
  const [formData, setFormData] = useState<NoteType>({
    title: '',
    description: '',
    tag : 'Personal'
  });
  
  const handleSubmit = (e : React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    console.log(formData)
  }

    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => {
    // console.log(e.target)
    const {name,value} = e.target
    console.log("name- ", name, "value - ",value)
    setFormData((prev) => ({
        ...prev,
        [name] : value,

    }))
  }

  return (
  <form onSubmit={handleSubmit} className="w-full">
            <label htmlFor="title" className="block text-xl">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Note Title"
              className="border-2 border-gray-700 rounded-md p-1 w-full mt-2"
              value={formData.title}
              onChange={handleChange}
            />
            <label htmlFor="description" className="block text-xl mt-5">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Note Description"
              className="border-2 border-gray-700 rounded-md p-1 w-full mt-2 resize-y max-h-60 min-h-40"
              value={formData.description}
              onChange={handleChange}
            ></textarea>

            <label htmlFor="tag" className="block text-xl mt-5">
              Tag
            </label>
            <select
              name="tag"
              id="tag"
              className="border-2 border-gray-700 rounded-md p-2 w-full mt-2 cursor-pointer"
              value={formData.tag}
              onChange={handleChange}
            >
              <option value="Personal">Personal</option>
              <option value="Business">Business</option>
              <option value="Home">Home</option>
            </select>

            <div className="text-right">
              <button className="bg-purple-800 text-white rounded-lg px-4 py-2 mt-5 mr-auto cursor-pointer" type="submit">
                Save
              </button>
            </div>
          </form>
  )
}
