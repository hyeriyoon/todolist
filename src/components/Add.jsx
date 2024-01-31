import React, {useState} from 'react'
import {v4 as uuidv4, v4} from 'uuid';

export default function Add({handleAdd}) {
    const [text, setText] = useState('')

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
    <form onSubmit={handleSubmit}>
        <input type="text" name="text" placeholder='Add Todos..' value={text} onChange={(e)=>setText(e.target.value)}/>
        <button>Add</button>
    </form>
  )
}
