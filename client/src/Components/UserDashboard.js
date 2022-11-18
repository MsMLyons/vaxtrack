import React, {useState} from 'react'
import '../Style/UserDashboard.css'
import { Link } from 'react-router-dom'
function UserDashboard() {
  const[familyMembers, setFamilyMembers]=useState(["John", "Kate"])

    
  return (
    <div className="main-background-color">
    <div className='user-dashboard-container'>
        <div className="user-information">
        <div className="user-introduction">
            <img className="avatar-img " src="https://www.w3schools.com/w3images/avatar6.png" alt="..."/>
            <h5>Hello Kate</h5>    
        </div>
        <div className="healthy-tips">
            <h6>Healthy tip of the day</h6>
            <p className="tip-text">Your body goes quite a few hours without hydration as you sleep. Drinking a full glass of water in the morning can aid digestion, flush out toxins, enhance skin health and give you an energy boost.</p>
        </div>
        </div>
        <div className="family-members-information">
          <h5>DISPLAY VACCINATION RECORDS</h5>
            <div className="family-members-list" >
                <div className="card" >
                  <img className="card-img-top" src="./avatar3.png" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">JOHN</h5>
                    <Link to="/vaccineList" ><img className="arrow-icon" src="./arrow.png" alt="..."/></Link>
                  </div>
                </div>
           

            
                <div className="card" >
                  <img className="card-img-top" src="./avatar2.png" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">MEGGI</h5>
                    <Link to={{pathname:"/vaccineList"}}><img className="arrow-icon" src="./arrow.png" alt="..."/></Link>
                  </div>
                </div>
                <div className="card" >
                  <img className="card-img-top" src="./avatar2.png" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">MEGGI</h5>
                    <Link to={{pathname:"/vaccineList"}}><img className="arrow-icon" src="./arrow.png" alt="..."/></Link>
                  </div>
                </div>
                <div className="card" >
                  <img className="card-img-top" src="./avatar2.png" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">MEGGI</h5>
                    <Link to={{pathname:"/vaccineList"}}><img className="arrow-icon" src="./arrow.png" alt="..."/></Link>
                  </div>
                </div>
             
                <div className="card" >
                  <img className="card-img-top" src="./avatar1.png" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">HELEN</h5>
                    <Link to="/vaccineList" ><img className="arrow-icon" src="./arrow.png" alt="..."/></Link>
                  </div>
                 </div>
            </div>
      
        <div className="add-family-members"> 
            <Link 
            to={{pathname:"/newFamilyMember",
            state:{familyMembers:familyMembers, setFamilyMembers: setFamilyMembers}}}
            
            className="nav-item nav-link"
            id="Contact">
              <button className="add-new-family-member" >Add new family member</button>
            </Link></div>
        </div>

        </div>
         <div className="partners">
          <img src="./pfizer.png" alt='..' className="logo-vaccine"/>
          <img src="./moderna.png" alt='..' className="logo-vaccine"/>
          <img src="./novartis.png" alt='..' className="logo-vaccine"/>
          <img src="./merk.png" alt='..' className="logo-vaccine"/>
          <img src="./johnson.png" alt='..' className="logo-vaccine"/>
          </div>
      </div>
  )
}

export default UserDashboard