import React, {useState} from "react";

function SignUp() {
    const[newUser, setNewUser]=useState({name:"", last_name: "",email: "",password:"", confirm_password:""})
    function handleSubmit(e){
        e.preventDefault()
        console.log(newUser)
    }
    return (
        <div className="login-container">
        Signup
        <img src='./VaxTrack.png' className='logo-login' alt="..."/>
        <form onSubmit={handleSubmit}>
            <div className="form-input-fields">

                
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" className="form-control" />
              
            <label>
            User name:
            <input type="text" name="name" value={newUser.name} onChange={(e)=> setNewUser({...newUser, name: e.target.value})}/>
            </label>
            <label>
            Last name:
            <input type="text" name="last_name" value={newUser.last_name} onChange={(e)=> setNewUser({...newUser, last_name: e.target.value})}/>
            </label>
            <label>
            Email:
            <input type="text" name="last_name" value={newUser.email} onChange={(e)=> setNewUser({...newUser, email: e.target.value})}/>
            </label>
            <label>
            Passowrd:
            <input type="password" name="name" value={newUser.password} onChange={(e)=> setNewUser({...newUser, password: e.target.value})}/>
            </label>

            <label>
            Confirm passowrd:
            <input type="password" name="name" value={newUser.confirm_password} onChange={(e)=> setNewUser({...newUser, confirm_password: e.target.value})}/>
            </label>

            <button>Sign Up</button>
            </div>
        </form>
        or
        <button>Login</button>


    </div>
  )
}

export default SignUp