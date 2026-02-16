import React from 'react'
import Headers from '../other/Header'
import TaskNumbers from '../other/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
   console.log("Employee Data:", props.data);
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
       <Headers  changeUser={props.changeUser} data={props.data} />
       <TaskNumbers data={props.data} />
       <TaskList data={props.data}  />
    </div>
  )
}

export default EmployeeDashboard