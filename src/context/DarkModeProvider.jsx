import { createContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [darkMode,setDarkMode] = useState(false);
    function handleDarkModeChange(){
        setDarkMode(prevState => !prevState)
    }
    return (
        <DarkModeContext.Provider value={{darkMode, handleDarkModeChange}}>{children}</DarkModeContext.Provider>
      );
}
export default DarkModeContext;