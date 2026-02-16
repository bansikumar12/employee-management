import React from 'react'

const FailedTask = (props) => {
  return (
     <div className=" bg-yellow-400 flex-shrink-0 p-5 text-white  font-bold text-2xl rounded-2xl h-full w-[300px]">
          <div className='flex justify-between'>
            <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{props.data.category}</h3>
            <h4 className='text-lg'>{props.data.date}</h4>
          </div>
            <h2 className='text-xl mt-2 font-bold'>{props.data.title}</h2>
            <p className='mt-5 text-sm'>{props.data.description}</p>
            <div className='  mt-5'>
            <button className="bg-red-500 text-lg text-white px-2 py-1 rounded">Failed</button>
          </div>  
      </div>
         
  )
}           

export default FailedTask