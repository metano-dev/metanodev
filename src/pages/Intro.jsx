import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Intro () {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            navigate('/home')
        }, 4000)
    }, [])
    return(
        <div className="m-auto md:mt-0 h-screen flex flex-col text-center justify-evenly md:justify-center">
        <p className="text-7xl md:text-9xl">METANO - DEV</p>
        <p className="mt-14 text-5xl md:text-7xl">Creemos en lo que hacemos</p>
        </div>
    )
}