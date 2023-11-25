import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const navigate = useNavigate()
  const signin =(e)=>{
    e.preventDefault()
    axios.post("https://backend-self-delta.vercel.app/api/login",{
      email,
      password
    })
    .then(res=>{
      if(res.data.status === 'true'){
        const token = res.data.token
       localStorage.setItem("userId",token)
        navigate("/menu")
      }
      else{
        alert(res.data.msg)
      }
    })
  }
    return(
        <>
        <section className="container login-sec">
            <div className="row text-center mt-5">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" onClick={signin} className="btn btn-primary">Submit</button>
</form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </section>
        </>
    )
}
export default Login