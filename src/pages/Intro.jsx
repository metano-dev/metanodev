import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Animate } from "react-simple-animate";
export default function Intro () {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(() => {
            navigate('/home')
        }, 3000)
    }, [])
    return(
        <Animate
        play='true'
        duration='1'
        easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
        start={{
            transform: "translateX(-200px) scale(0.1)"
          }}
          end={{ transform: "translateX(0px) scale(1)" }}
        >
        <div className=" m-auto md:mt-0 h-screen flex flex-col text-center justify-evenly md:justify-center">
        <p className="text-7xl md:text-9xl">METANO - DEV</p>
        <p className="mt-14 text-5xl md:text-7xl">Creemos en lo que hacemos</p>
        </div>
        </Animate>
    )
}