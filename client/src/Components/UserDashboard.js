import React from 'react'
import '../Style/UserDashboard.css'
import { Link } from 'react-router-dom'
function UserDashboard() {

    
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
        <div className="family-members-list" >


           <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      
    </tr>
  </thead>
  <tbody>
    <tr >
      <td scope="row" className="row-img"><img className="avatar-family-member" src="./avatar1.png" alt="..."/></td>
  
      <td>Mark</td>
      <td>Otto</td>
      <td><img className="arrow-icon" src="./arrow.png" alt="..."/></td>

      
    </tr>
    <tr>
      <td scope="row"><img className="avatar-family-member" src="./avatar2.png" alt="..."/></td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><img className="arrow-icon" src="./arrow.png" alt="..."/></td>
      
    </tr>
    <tr>
      <td scope="row"><img className="avatar-family-member" src="./avatar3.png" alt="..."/></td>
      <td>Larry</td>
      <td>Bird</td>
      <td><img className="arrow-icon" src="./arrow.png" alt="..."/></td>
      
      
    </tr>
  </tbody>
</table>
        </div>
        <div className="add-family-members"> <Link to="/newFamilyMember" className="nav-item nav-link" id="Contact"><button className="add-new-family-member" >Add new family member</button></Link></div>
        
        
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