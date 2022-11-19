import React, {useState} from "react";
import '../Style/Login.css'
import { useNavigate, useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom'

function Login({loggedIn, setLoggedIn}) {
    const[userName, setUserName]=useState("")
    const[password, setPassword]=useState("")
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault()
        setLoggedIn(true)
        setUserName('')
        setPassword('')
        navigate('/userDashboard')
    }

  return (
    <div className="login-container">

        <div>
        <form onSubmit={handleSubmit}>
            
        <div className="col">
            <input class="effect-1" type="text" placeholder="Username" name="name" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
            <span class="focus-border"></span>
        </div>
           
        <div className="col">
            <input class="effect-1" type="password" name="name" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <span class="focus-border"></span>
        </div>

        <div className="form-btn-submit"><button className="login-btn-submit">Login </button></div>
        
        </form>
        </div>
        {/* <div className="form-btn-submit"><Link to='/signUp' ><button className="login-btn-submit">Sign Up </button></Link></div> */}


    </div>
  )
}

export default Login