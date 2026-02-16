import React from 'react'

const CompleteTask = (props) => {
  return (
     <div className=" bg-blue-400 flex-shrink-0 p-5 font-bold text-white rounded-2xl text-2xl h-full w-[300px]">
          <div className='flex justify-between'>
            <h3 className='bg-red-600 px-3 text-sm text-white text-bold py-1 rounded'>{props.data.category}</h3>
            <h4 className='text-lg'>{props.data.date} </h4>
          </div>
            <h2 className='text-xl mt-2 font-bold'>{props.data.title}</h2>
            <p className='mt-5 text-sm'>{props.data.description}</p>
            <div className='  mt-5'>
            <button className="bg-green-500 text-white text-lg px-2 py-1 rounded">Complete</button>
          </div>  
      </div>
  )
}

export default CompleteTask