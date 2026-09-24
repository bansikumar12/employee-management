import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider'



const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }

        const data = userData.map((elem) => {

            if (asignTo === elem.firstname) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, newTask],
                    taskCounts: {
                        ...elem.taskCounts,
                        newTask: elem.taskCounts.newTask + 1
                    }
                }
            }

            return elem
        })

        setUserData(data)

        console.log(data)

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
      }
    return (
        <div className='p-6 bg-[#1c1c1c] mt-5 rounded-xl border border-gray-800 shadow-lg'>

            {/* Title */}
            <div className='mb-6'>
                <h2 className='text-2xl font-semibold text-white'>
                    Create New Task
                </h2>
                <p className='text-sm text-gray-400 mt-1'>
                    Assign a new task to an employee
                </p>
            </div>

            <form
                onSubmit={submitHandler}
                className='flex flex-col lg:flex-row gap-8 w-full'
            >

                {/* Left Side */}
                <div className='w-full lg:w-1/2 space-y-4'>

                    {/* Task Title */}
                    <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                            Task Title
                        </label>

                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='w-full text-sm py-3 px-4 rounded-lg outline-none bg-[#252525] text-white border border-gray-700 focus:border-emerald-500 transition'
                            type='text'
                            placeholder='Make a UI design'
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                            Date
                        </label>

                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='w-full text-sm py-3 px-4 rounded-lg outline-none bg-[#252525] text-white border border-gray-700 focus:border-emerald-500 transition'
                            type='date'
                        />
                    </div>

                    
                    <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                            Assign To
                        </label>

                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            className='w-full text-sm py-3 px-4 rounded-lg outline-none bg-[#252525] text-white border border-gray-700 focus:border-emerald-500 transition'
                            type='text'
                            placeholder='Employee name'
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className='block text-sm font-medium text-gray-300 mb-2'>
                            Category
                        </label>

                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='w-full text-sm py-3 px-4 rounded-lg outline-none bg-[#252525] text-white border border-gray-700 focus:border-emerald-500 transition'
                            type='text'
                            placeholder='Design, Development, etc.'
                        />
                    </div>

                </div>

              
                <div className='w-full lg:w-1/2 flex flex-col'>

                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                        Task Description
                    </label>

                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='w-full h-56 text-sm py-3 px-4 rounded-lg outline-none bg-[#252525] text-white border border-gray-700 focus:border-emerald-500 transition resize-none'
                        placeholder='Write task description...'
                    />

                    <button
                        type='submit'
                        className='bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-semibold py-3 px-5 rounded-lg text-sm mt-5 transition duration-200'
                    >
                        Create Task
                    </button>

                </div>

            </form>

        </div>
    )
}

export default CreateTask
