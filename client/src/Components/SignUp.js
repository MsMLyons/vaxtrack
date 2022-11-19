import React, {useState} from "react";
import '../Style/SignUp.css'

function SignUp() {
    const[newUser, setNewUser]=useState({name:"", last_name: "",email: "",password:"", confirm_password:""})
    function handleSubmit(e){
        e.preventDefault()
        console.log(newUser)
        //navigate login
    }
    return (
        <div className="login-container">

        
            <div class="col" className="form_input-fields">
                <input class="effect-1" type="text" placeholder="Username"/>
                <span class="focus-border"></span>
            </div>

            <div class="col" className="form_input-fields">
                <input class="effect-1" type="text" placeholder="Last Name"/>
                <span class="focus-border"></span>
            </div> 

        
            <div class="col" className="form_input-fields">
                <input class="effect-1" type="text" placeholder="Email"/>
                <span class="focus-border"></span>
            </div> 

            <div class="col" className="form_input-fields">
                <input class="effect-1" type="text" placeholder="Password"/>
                <span class="focus-border"></span>
            </div> 

            <div class="col" className="form_input-fields">
                <input class="effect-1" type="text" placeholder="Confirm Password"/>
                <span class="focus-border"></span>
            </div> 
        
            <div className="form-btn-submit"><button className="login-btn-submit">Sign Up </button></div>
            
        


    </div>
  )
}

export default SignUp