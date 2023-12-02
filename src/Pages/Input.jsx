import { useState } from "react"
import { Link } from "react-router-dom"



function Input(e){
    const [searchval, setSearchval]= useState("")
    return(
        <>
         <div className="d-flex justify-content-center">
        <input onChange={(e)=>{setSearchval(e.target.value)}} className="form-control" type="search" placeholder="Search" aria-label="Search" /> <Link 
        to={`/search?q=${searchval}`} className="btn btn-outline-success bg-primary" type="submit"><i class="fa-solid fa-magnifying-glass" style={{color:" #ffffff"}}></i></Link>
      </div>
        </>
    )
}
export default Input