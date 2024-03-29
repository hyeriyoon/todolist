import React, {useState, useContext} from 'react'
import {v4 as uuidv4, v4} from 'uuid';
import { useDarkMode } from '../../context/DarkModeContext';
import styles from './Add.module.css'

export default function Add({handleAdd}) {
    const [text, setText] = useState('')

    const {darkMode} = useDarkMode();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim() === ''){
            setText('');
            return;
        }
        handleAdd({id:v4(), name:text.trim(), completed: false})
        setText('')

    }
  return (
    <form 
    className={`${styles.form}`}
    onSubmit={handleSubmit}>
      <input 
      className={styles.input}
      type="text" 
      name="text" 
      placeholder='Add Todos..' 
      value={text} 
      onChange={(e)=>setText(e.target.value)}/>
      <button className={styles.button}>Add</button>
    </form>
  )
}
