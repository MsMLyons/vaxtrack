import React, {useState} from "react";
import '../Style/SignUp.css'
import { useNavigate } from 'react-router';

function SignUp() {
     const navigate = useNavigate();
    const[newUser, setNewUser]=useState({name:"", last_name: "",email: "",password:"", confirm_password:""})
    function handleSubmit(e){
        e.preventDefault()
        console.log(newUser)
        //navigate login
        navigate('/login')
    }
    return (
        <div className="signup-container">

        <div>
        <form onSubmit={handleSubmit}>
            <div  className="col">
                <input class="effect-1" type="text" placeholder="User name" value={newUser.name} onChange={(e)=> setNewUser({...newUser, name:e.target.value})}/>
                <span class="focus-border"></span>
            </div>

            <div  className="col">
                <input class="effect-1" type="text" placeholder="Last Name" value={newUser.last_name} onChange={(e)=> setNewUser({...newUser, last_name:e.target.value})}/>
                <span class="focus-border"></span>
            </div> 

        
            <div className="col" >
                <input class="effect-1" type="text" placeholder="Email" value={newUser.email} onChange={(e)=> setNewUser({...newUser, email:e.target.value})}/>
                <span class="focus-border"></span>
            </div> 

            <div  className="col">
                <input class="effect-1" type="password" placeholder="Password" alue={newUser.password} onChange={(e)=> setNewUser({...newUser, password:e.target.value})}/>
                <span class="focus-border"></span>
            </div> 

            <div  className="col">
                <input class="effect-1" type="password" placeholder="Confirm Password" alue={newUser.confirm_password} onChange={(e)=> setNewUser({...newUser, confirm_password:e.target.value})}/>
                <span class="focus-border"></span>
            </div> 
        
            <div className="form-btn-submit"><button className="login-btn-submit">Sign Up </button></div>
        </form>
        </div>
        


    </div>
  )
}

export default SignUp