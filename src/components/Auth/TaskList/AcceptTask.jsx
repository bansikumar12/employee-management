import React from 'react'

const AcceptTask = (props) => {
  return (
        
      <div className=" bg-red-400 flex-shrink-0 text-white  p-5 font-bold rounded-2xl text-2xl h-full w-[300px]">
          <div className='flex justify-between'>
            <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{props.data.category}</h3>
            <h4 className='text-lg'>{props.data.date}</h4>
          </div>
            <h2 className='text-xl mt-2 font-bold'>{props.data.title}</h2>
            <p className='mt-5 text-sm'>{props.data.description}</p>
            <div className='flex gap-2 mt-7'>
            <button className="bg-green-500 text-lg text-white px-2 py-1 rounded">Mark as Completed</button>
            <button className="bg-red-500 text-lg text-white px-2 py-1 rounded">Mark as Failed</button>
      </div>
      </div>
         
  )
}

export default AcceptTask