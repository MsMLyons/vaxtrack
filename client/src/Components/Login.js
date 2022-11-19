import React, {useState} from "react";
import '../Style/Login.css'


function Login() {
    const[userName, setUserName]=useState("")
    const[password, setPassword]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        console.log("submitted");
        console.log(userName, password)
        setUserName('')
        setPassword('')

        
    }

  return (
    <div className="login-container">
        <h4>Login</h4>
        
        <form onSubmit={handleSubmit}>
            
        <div class="col" className="form-input-fields">
            <input class="effect-1" type="text" placeholder="Username" name="name" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
            <span class="focus-border"></span>
        </div>
           
        <div class="col" className="form-input-fields">
            <input class="effect-1" type="text" name="name" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <span class="focus-border"></span>
        </div>

        <div className="form-btn-submit"><button className="new-member-button">Login </button></div>
        
        </form>

        <div className="form-btn-submit"><button className="new-member-button">Sign Up </button></div>


    </div>
  )
}

export default Login