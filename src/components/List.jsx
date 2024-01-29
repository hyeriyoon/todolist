import React,{useState} from 'react'
import Item from './Item'
import '../ToDo.css'


export default function List() {
    
    // States
    const [completed, setCompleted] = useState(false)

    const[task, setTask] = useState([
        {id:0, name:'Reading', completed: completed},
        {id:1, name:'Cleaning', completed: completed},
    ])
    const [text, setText] = useState('')
    


    //Functions
    const handleAdd = () => {
        setTask((task) => [...task,  {id:task.length, name:text, completed:false},])
        setText('')
    }
    const handleDelete = (id) => {
        setTask((task)=>task.filter((item)=> item.id !== id))
    }
    const toggleCompleted = () => {
        setCompleted(completed=>!completed)
        
    }
    const Active = (e) => {
        
    }
    const Done = (e) => {
        
    }

  return (
    <div>
        <button>All</button>
        <button onClick={Active}>Active</button>
        <button onClick={Done}>Done</button>
        <ul>
            {task.map((item)=>
            (<li key={item.id}>
                <Item 
                task={item} 
                handleDelete={handleDelete}
                toggleCompleted = {toggleCompleted} />
            </li>))}
        </ul>
        <input type="text" id="text" name="text" value={text} onChange={(e)=>{
            setText(e.target.value)
        }}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
