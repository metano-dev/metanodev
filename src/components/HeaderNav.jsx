import { NavLink } from "react-router-dom";

export default function HeaderNav(){
    return(
        <div className="header m-auto flex flex-col md:flex-row text-center my-4 text-2xl md:text-2xl lg:text-4xl md:justify-evenly">
        <NavLink to="/home" className="hover:text-3xl md:hover:text-5xl hover:underline">Quiénes Somos</NavLink>
        <NavLink to="/home/presupuesto" className="hover:text-3xl md:hover:text-5xl hover:underline ">Pide tu presupuesto</NavLink>
        <NavLink to="/trabajaconnosotros" className="hover:text-3xl md:hover:text-5xl hover:underline ">Trabaja con nosotros</NavLink>
        </div>
    )
}