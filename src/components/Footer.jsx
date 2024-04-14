import { useContext } from "react";
import DarkModeContext from "../context/DarkModeProvider";
export default function Footer(){
    const {darkMode} = useContext(DarkModeContext);
    return(
        <footer className={darkMode ? "py-4 darkmodeon" : "py-4"}>
            <p className="text-2xl md:text-4xl text-center">Metano-dev 2024 ©. Todos los derechos reservados</p></footer>
    )
}