import React, {useState} from 'react'
import '../Style/NewFamilyMember.css'
import { useNavigate, useLocation} from 'react-router-dom';
function NewFamilyMember() {
   const location = useLocation()
   const {familyMembers, setFamilyMembers}= location.state
   console.log(location.state)
    
    

    const navigate = useNavigate();
    const[newMember, setNewMember]=useState({name:"", last_name:"", picture: ""})
    function handleNewMember(e){
      e.preventDefault()
      console.log(newMember)

      setNewMember({name:"", last_name:""})
      navigate("/userDashboard")
    }
    function returnToDashboard(){
      navigate("/userDashboard")
    }

    return (
        <div className="new-family-member">
          <div className="new-family-member-headline"><div className="return-btn-container"><button className="btn btn-outline-info" onClick={returnToDashboard}>Return to dashboard</button></div>
        </div>
<h4>New Family Member</h4>
            <form onSubmit={handleNewMember}>
                <div class="col">
                    <input class="effect-1" type="text" placeholder="Name" value={newMember.name} onChange={(e)=>setNewMember({...newMember, name: e.target.value})}  />
                    <span class="focus-border"></span>
                </div>
                <div class="col">
                    <input class="effect-1" type="text" placeholder="Last name"value={newMember.last_name} onChange={(e)=>setNewMember({...newMember, last_name: e.target.value})}/>
                    <span class="focus-border"></span>
                </div>
                <div class="col">
                    <input class="effect-1" type="text" placeholder="Upload picture" value={newMember.last_name} value={newMember.picture} onChange={(e)=>setNewMember({...newMember, picture: e.target.value})}/>
                    <span class="focus-border"></span>
                </div> 
                <div className="form-btn-submit"><button   className="new-member-button">Add family member</button></div>
          </form>  

          

      </div>
  )
}

export default NewFamilyMember