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
        Login
        <img src='./VaxTrack.png' className='logo-login' alt="..."/>
        <form onSubmit={handleSubmit}>
            <div className="form-input-fields">
            <label>
            User name:
            <input type="text" name="name" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
            </label>

            <label>
            Password:
            <input type="text" name="name" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </label>

            <button>Login</button>
            </div>
        </form>
        or
        <button>SignUp </button>


    </div>
  )
}

export default Login