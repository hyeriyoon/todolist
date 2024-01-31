import React,{useState} from 'react'
import Item from './Item'
import '../ToDo.css'
import Add from './Add';

export default function List() {
    
    // States
    const [completed, setCompleted] = useState(false)

    const[task, setTask] = useState([
        {id:0, name:'Reading', completed: completed},
        {id:1, name:'Cleaning', completed: completed},
    ])

    //Functions
    const handleAdd = (added) => {
        setTask((task)=>[...task, added])
    }
    const handleDelete = (id) => {
        setTask((task)=>task.filter((item)=> item.id !== id))
    }
    const toggleCompleted = (toggled) => {

    }

  return (
    <div>
        {/* <button>All</button>
        <button onClick={Active}>Active</button>
        <button onClick={Done}>Done</button> */}
        <ul>
            {task.map((item)=>
            (<li key={item.id}>
                <Item 
                task={item} 
                handleDelete={handleDelete}
                toggleCompleted={toggleCompleted}
            />
            </li>))}
        </ul>
        <Add handleAdd={handleAdd}/>
        
    </div>
  )
}
