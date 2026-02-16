
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';


const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className='p-4 bg-[#1c1c1c]  overflow-auto  rounded mt-5 '>
        <div
    className='bg-red-400 py-2 mb-2 flex justify-between px-4 rounded'
  >
    <h2 className='w-1/5 font-bold p-2 text-white bg-red-600'>Employee Name</h2>
    <h3 className='w-1/5 font-bold p-2 text-white bg-red-600'>New Tasks</h3>
    <h5 className='w-1/5 font-bold p-2 text-white bg-red-600'>Active Task</h5>
    <h5 className='w-1/5 font-bold p-2 text-white bg-red-600'>Completed</h5>
    <h5 className='w-1/5 font-bold p-2 text-white bg-red-600'>Failed</h5>
  </div>
    
       {userData.map(function(elem,idx) {
  return  <div key={idx} className=' border-emerald-500 border-2 py-2 mb-2  flex justify-between px-4 rounded'
  >
    <h3  className='w-1/6 font-semibold key text-white'>{elem.firstname}</h3>
    <h2 className='w-1/6 font-semibold text-white'>{elem.taskCounts.newTask}</h2>
    <h5 className='w-1/6 font-semibold text-white'>{elem.taskCounts.active}</h5>
    <h5 className='w-1/6 font-semibold text-white'>{elem.taskCounts.completed}</h5>
    <h5 className='w-1/6 font-semibold text-white'>{elem.taskCounts.failed}</h5>
  </div>
})}
     </div>

   
  );
};

export default AllTask;