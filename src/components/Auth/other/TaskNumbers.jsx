import React from 'react'

const TaskNumbers = (props) => {

   

  

  return (
    <div className='flex justify-between mt-10 gap-5 flex-wrap'>
      
      <div className='w-[45%] p-4 bg-red-400 text-white  rounded-md'>
        <p className='text-3xl font-bold'>
          {props.data.taskCounts.newTask}
        </p>
        <h2 className='text-xl font-bold'>New Tasks</h2>
      </div>

      <div className='w-[45%] p-4 bg-blue-400 text-white rounded-md'>
        <p className='text-3xl font-bold'>
          {props.data.taskCounts.completed}
        </p>
        <h2 className='text-xl font-bold'>Completed</h2>
      </div>

      <div className='w-[45%] p-4 bg-green-400 text-white rounded-md'>
        <p className='text-3xl font-bold'>
          {props.data.taskCounts.active}
        </p>
        <h2 className='text-xl font-bold'>Active</h2>
      </div>

      <div className='w-[45%] p-4 bg-yellow-400 text-white rounded-md'>
        <p className='text-3xl font-bold'>
          {props.data.taskCounts.failed}
        </p>
        <h2 className='text-xl font-bold'>Failed</h2>
      </div>

    </div>
  );
};

export default TaskNumbers;
