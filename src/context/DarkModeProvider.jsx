import { createContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [darkMode,setDarkMode] = useState(false);
    function toggleDarkMode(){
        setDarkMode(prevState => !prevState)
    }
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>{children}</DarkModeContext.Provider>
      );
}
export default DarkModeContext;