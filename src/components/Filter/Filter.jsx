import React from 'react'
import styles from './Filter.module.css'

export default function Filter({filters, filter, setFilter}) {
    
  return (
    <section className={styles.pagefilter}>
        <ul className={styles.filters}>
            {filters.map((value, index)=>(
                <li key={index}>
                    <button 
                    className={`${styles.filter} ${filter === value && styles.selected}`} 
                    onClick={()=>{setFilter(value)}}>{value}</button>
                </li>
            ))}
        </ul>
    </section>
  )
}