import React, {useState} from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import '../ToDo.css'



export default function Item({task, handleDelete, toggleCompleted}) {
    const[checked, setChecked] = useState(false)

    const handleCheck = ()=>{
        toggleCompleted()
    }
    
  return (
    <div>
        <input type="checkbox" name="checkbox" checked={checked} onClick={handleCheck}/>

        <label className={task.completed ? 'strike-through' : ''} htmlFor="checkbox">{task.name}</label>

        <button onClick={()=> handleDelete(task.id)}><FaRegTrashAlt /></button>
    </div>
  )
}
