import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = (props) => {

  

  return (
    <div
      id="tasklist"
      className="w-full flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[55%] m-10"
    >
      {props.data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
       
      })}
    </div>
  );
};

export default TaskList;
