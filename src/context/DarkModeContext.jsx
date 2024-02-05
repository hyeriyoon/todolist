import {createContext, useState, useContext} from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        updateDarkMode(!darkMode)
    }
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}
function updateDarkMode(darkmode){
    if(darkmode){
      document.documentElement.classList.add('darkmode');
    }else{
      document.documentElement.classList.remove('darkmode');
    }
  }

export const useDarkMode = () => useContext(DarkModeContext);