import { createContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [darkMode,setDarkMode] = useState(false);
    function toggleDarkMode(){
        setDarkMode(!setDarkMode)
    }
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>{children}</DarkModeContext.Provider>
      );
}
export default DarkModeContext;