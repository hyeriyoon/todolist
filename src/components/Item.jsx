import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import '../ToDo.css'



export default function Item({task, handleDelete, toggleCompleted}) {
    
  return (
    <div>
        <input type="checkbox" id="checkbox" name="checkbox" onClick={()=>{
            task.completed = !task.completed
            console.log(task.completed)
        }}/>
        <label className={task.completed ? 'strike-through' : ''} htmlFor="checkbox">{task.name}</label>
        <button onClick={()=> handleDelete(task.id)}><FaRegTrashAlt /></button>
    </div>
  )
}
