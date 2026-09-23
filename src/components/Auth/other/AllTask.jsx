import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    return (
        <div className='bg-[#1c1c1c] p-5 rounded-xl mt-5 shadow-lg overflow-x-auto'>

            
            <div className='bg-[#2a2a2a] border border-gray-700 mb-3 py-3 px-4 flex items-center justify-between rounded-lg min-w-[800px]'>

                <h2 className='text-sm font-semibold text-gray-300 w-1/5'>
                    Employee Name
                </h2>

                <h3 className='text-sm font-semibold text-blue-400 w-1/5 text-center'>
                    New Task
                </h3>

                <h3 className='text-sm font-semibold text-yellow-400 w-1/5 text-center'>
                    Active Task
                </h3>

                <h3 className='text-sm font-semibold text-green-400 w-1/5 text-center'>
                    Completed
                </h3>

                <h3 className='text-sm font-semibold text-red-400 w-1/5 text-center'>
                    Failed
                </h3>

            </div>

            {/* Employee Rows */}
            <div className='min-w-[800px]'>

                {userData && userData.map((elem, idx) => (

                    <div
                        key={idx}
                        className='bg-[#242424] hover:bg-[#2d2d2d] border border-gray-700 mb-2 py-3 px-4 flex items-center justify-between rounded-lg transition'
                    >

                        <h2 className='text-sm font-medium text-white w-1/5'>
                            {elem.firstname}
                        </h2>

                        <h3 className='text-sm font-semibold text-blue-400 w-1/5 text-center'>
                            {elem.taskCounts.newTask}
                        </h3>

                        <h3 className='text-sm font-semibold text-yellow-400 w-1/5 text-center'>
                            {elem.taskCounts.active}
                        </h3>

                        <h3 className='text-sm font-semibold text-green-400 w-1/5 text-center'>
                            {elem.taskCounts.completed}
                        </h3>

                        <h3 className='text-sm font-semibold text-red-400 w-1/5 text-center'>
                            {elem.taskCounts.failed}
                        </h3>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default AllTask
