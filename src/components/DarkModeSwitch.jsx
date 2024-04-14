import { useContext } from "react";
import DarkModeContext from "../context/DarkModeProvider.jsx";
import  logoLuna from '/svg/moon.svg'
import logoSol from '/svg/sun.svg'

export default function DarkModeSwitch(){
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () =>{
        toggleDarkMode()
    }
    return(
        <button onClick={handleClick} className="mt-4 md:mt-0">
           {darkMode && <img className="darkmodelogo" src={logoSol}/>}
           {!darkMode && <img className="darkmodelogo" src={logoLuna}/>}
        </button>
        
    )

}