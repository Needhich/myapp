import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Signup(){
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const navigate = useNavigate()

  const register =(e)=>{
    e.preventDefault()
    axios.post("https://backend-self-delta.vercel.app/api/registration",{
      email,
      name,
      password
    })
    .then(res=>{
     if(res.data.status === true){
       navigate("/login")
     }
     else{
      alert(res.data.msg)
     }
    })

  }
    return(
        <>
        <section className="container signup-sec">
            <div className="row text-center mt-5">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <form>
                <div className="mb-3">
    <label for="exampleInputName" className="form-label">Name</label>
    <input type="text" onChange={(e)=>{setName(e.target.value)}} className="form-control" id="exampleInputName"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onChange={(e)=>{setEmail(e.target.value)}}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" onClick={register} className="btn btn-primary">Submit</button>
</form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </section>
        </>
    )
}
export default Signup