import React, {useState} from 'react'
import '../Style/UserDashboard.css'
import { Link } from 'react-router-dom'
function UserDashboard() {
    let members =[
      {id: 1,
      name: "Samantha",
      picture: './avatar1.png'
      },
      {id: 2,
      name: "Kate",
      picture: './avatar2.png'
      },
      {id: 3,
      name: "John",
      picture: './avatar3.png'
      }]
    const[familyMembers, setFamilyMembers]=useState(members)

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
          {familyMembers.map(member => {return(
              <div className="card" >
                  <img className="card-img-top" src={member.picture} alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <Link to="/vaccineList" state={{id: member.id}} ><img className="arrow-icon" src="./arrow.png" alt="..."/></Link>
                  </div>
              </div>)
          })}
            
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
      </div>
  )
}

export default UserDashboard