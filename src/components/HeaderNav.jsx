import { NavLink } from "react-router-dom";
import DarkModeSwitch from "../components/DarkModeSwitch";
import { useContext } from "react";
import DarkModeContext from "../context/DarkModeProvider";

export default function HeaderNav(){
    const {darkMode} = useContext(DarkModeContext);
    return(
        <div className={darkMode ?"header m-auto flex flex-col md:flex-row text-center py-4 text-2xl md:text-2xl lg:text-4xl md:justify-evenly items-center darkmodeon" : "header m-auto flex flex-col md:flex-row text-center py-4 text-2xl md:text-2xl lg:text-4xl md:justify-evenly items-center darkmodeoff" }>
        <NavLink to="/home" className="hover:text-3xl md:hover:text-5xl hover:underline"><p>Quiénes Somos</p></NavLink>
        <NavLink to="/home/presupuesto" className="hover:text-3xl md:hover:text-5xl hover:underline "><p>Pide tu presupuesto</p></NavLink>
        <NavLink to="/home/trabajaconnosotros" className="hover:text-3xl md:hover:text-5xl hover:underline "><p>Trabaja con nosotros</p></NavLink>
        <DarkModeSwitch></DarkModeSwitch>
        </div>
    )
}