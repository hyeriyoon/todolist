import React, {useState} from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import styles from './Item.module.css'



export default function Item({task, handleDelete, toggleCompleted}) {

    const {id, name, completed} = task;
    

    const handleCheck = (e)=>{
        toggleCompleted({...task, completed: e.target.checked? true : false})
    }
    
  return (
    <div className={styles.item}>
        <input 
        className={styles.input}
        type="checkbox" 
        id={id} 
        checked={completed} 
        onChange={handleCheck}/>

        <label 
        className={styles.label}
        htmlFor={id}>{name}</label>

        <span className={styles.icon}>
          <button 
          className={styles.button}
          onClick={()=> handleDelete(id)}><FaRegTrashAlt /></button>
        </span>
    </div>
  )
}


