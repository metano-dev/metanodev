import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Intro () {
    const navigate = useNavigate();
    // useEffect(()=>{
    //     setTimeout(() => {
    //         navigate('/home')
    //     }, 6000)
    // }, [])
    return(
        <>
        <p>Intro</p>
        </>
    )
}