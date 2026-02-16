import React from 'react'
import Header from '../other/Header'
import AllTask from '../other/AllTask'
import CreateTask from '../other/CreateTask'

const AdminDashbord = (props) => {
  return (
    <div className=' bg-[#1C1C1C] '>
        <Header  changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashbord