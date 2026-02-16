
import React,{useState,useContext} from 'react'
import { AuthContext } from '../../../context/AuthProvider';

const CreateTask = () => {

const [userData, setUserData] = useContext(AuthContext);


const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [date, setDate] = useState("");
const [assignedTo, setAssignedTo] = useState("");
const [category, setCategory] = useState("");

const [newTask, setNewTask] = useState({});



   const submitHandler=(e)=>{
    e.preventDefault();
    setNewTask({title,description,date,category, active: false, newTask: true, completed: false, failed: false});
    
    const data = userData
    
    
    data.forEach(function(elem) {
        if (assignedTo == elem.firstname) {
            elem.tasks.push(newTask);
            elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
        }
     });
    
   setUserData( data);
  console.log(data);
 
   setTitle("");
   setDescription("");
   setDate("");
   setAssignedTo("");
   setCategory("");
  
    }
  return (
    <div className='flex justify-center items-center'>
          <form onSubmit ={(e)=>submitHandler(e)} className='flex flex-col lg:w-1/4  gap-4 p-10 border border-white text-white m-10 rounded-md'>
              <div> <h2 className='text-lg font-medium'> Task Title</h2>
                <input className='border-2 p-1 text-lg rounded-lg' type="text" placeholder='Enter task title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div><h2 className='text-lg font-medium'> Description</h2>
                <textarea className='border-2 text-lg p-1 rounded-lg' name='' id='' cols='30' rows='10' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <div><h2 className='text-lg font-medium'> Date</h2>    
                <input className='p-2 rounded-lg text-lg border-2'   style={{ filter: "invert(0.6)" }} type="date" value={date} onChange={(e)=>setDate(e.target.value)}/></div>
                
                <div ><h2 className='text-lg font-medium'>Asign to</h2>
                <input className='border-2 p-1 text-lg rounded-lg' type='text' placeholder='employee name' value={assignedTo} onChange={(e)=>setAssignedTo(e.target.value)}/></div>
                <div><h1 className='text-lg font-medium'>Category</h1>
                <input className='border-2 text-lg p-1 rounded-lg' type='text' placeholder='design,dev,etc' value={category} onChange={(e)=>setCategory(e.target.value)}/></div>
                <button className='bg-amber-300 text-xl font-semibold rounded-2xl p-1 ' type='submit'>Create Task</button>
          </form>
      </div>
  )
}

export default CreateTask