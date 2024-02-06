import {createContext, useState, useContext, useEffect} from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        updateDarkMode(!darkMode)
    }
    useEffect(()=>{
        const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        setDarkMode(isDark);
        updateDarkMode(isDark);
    },[])
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}
function updateDarkMode(darkmode){
    if(darkmode){
      document.documentElement.classList.add('darkmode');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('darkmode');
      localStorage.theme = 'light';
    }
  }

export const useDarkMode = () => useContext(DarkModeContext);