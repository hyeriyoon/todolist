import React,{useState, useEffect} from 'react'
import Item from '../Item/Item'
import Add from '../Add/Add';
import styles from './List.module.css'

export default function List({filter}) {
    
    // States
  
    const[task, setTask] = useState(()=>todo())
    
    
    useEffect(()=>{
       localStorage.setItem('task', JSON.stringify(task)) 
    },[task])
    //Functions
    const handleAdd = (added) => {
        setTask((task)=>[...task, added])
    }
    const handleDelete = (id) => {
        setTask((task)=>task.filter((item)=> item.id !== id))
    }
    const toggleCompleted = (toggled) => {
        setTask((task) => task.map(
            (item) => item.id === toggled.id ? toggled : item
        ))
    }

const filtered = getFilteredItem(task, filter);
    
  return (
    <section className={styles.container}>
        <ul className={styles.ul}>
            {filtered?.map((item)=>
            (<li key={item.id}>
                <Item 
                task={item} 
                handleDelete={handleDelete}
                toggleCompleted={toggleCompleted}
            />
            </li>))}
        </ul>
        <Add handleAdd={handleAdd}/>
        
    </section>
  )
}
const todo = ()=>{
    return JSON.parse(localStorage.getItem('task'));
    
}

function getFilteredItem(task, filter){
    if(filter === 'all'){
        return task;
    }else if(filter === 'active'){
        return task.filter(item=>item.completed === false);
    }else{
        return task.filter(item=>item.completed===true);
    }
}
