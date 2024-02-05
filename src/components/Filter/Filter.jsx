import React, {useContext} from 'react'
import styles from './Filter.module.css'
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useDarkMode } from '../../context/DarkModeContext';


export default function Filter({filters, filter, setFilter}) {
    const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <section 
    className={styles.pagefilter}
    
    >
        <button 
          className={styles.modebutton}
          onClick={()=>{
            toggleDarkMode()
            }}
          >
          {darkMode? <IoSunny /> : <FaMoon/>}</button>
        <ul className={styles.filters}>
            {filters.map((value, index)=>(
                <li key={index}>
                    <button 
                    className={`${styles.filter} ${filter === value && styles.selected}`} 
                    onClick={()=>{setFilter(value)}}
                    
                    >{value}</button>
                </li>
            ))}
        </ul>
    </section>
  )
}
