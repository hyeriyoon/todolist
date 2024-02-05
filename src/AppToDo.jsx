import React,{useState} from 'react'
import Filter from './components/Filter/Filter'
import List from './components/List/List'
import { DarkModeProvider } from './context/DarkModeContext'

const filters = ['all', 'active', 'done']
export default function AppToDo() {
    const [filter, setFilter] = useState(filters[0])   

    
  return (
    <DarkModeProvider>
        <Filter filters={filters} filter={filter} setFilter={setFilter}/>
        <List filter={filter}/>
    </DarkModeProvider>
  )
}
