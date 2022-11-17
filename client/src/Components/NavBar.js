import React from 'react'
import '../Style/NavBar.css'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link to="/" className="navbar-brand" ><img src='./VaxTrack.png' className='navbar-brand' alt="..."/></Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                        <div className="navbar-nav">
                        
                                <Link to="/" className="nav-item nav-link active" id="Home">Home</Link>


                                <Link to="/" className="nav-item nav-link" id="Contact">About</Link>
                                <Link to="/login" className="nav-item nav-link" id="Contact">Login</Link>
                                <Link to="/signUp" className="nav-item nav-link" id="Contact">SignUp</Link>
                                
                        </div>
                    </div>
                </div>
            </nav>

  )
}

export default NavBar