<<<<<<< Updated upstream
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function Logout(){
 const navigate = useNavigate()
 useEffect(()=>{
    localStorage.removeItem("userId")
    navigate("/")
 },[])
 
    return(
        <>
=======


function Logout(){
    return(
        <>
        logout page
>>>>>>> Stashed changes
        </>
    )
}
export default Logout