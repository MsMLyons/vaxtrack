import React, {useState} from 'react'
import '../Style/NewFamilyMember.css'
import { useNavigate} from 'react-router-dom';
function NewFamilyMember() {
    const navigate = useNavigate();
    const[newMember, setNewMember]=useState({name:"", last_name:""})
    function handleNewMember(e){
      e.preventDefault()
      console.log(newMember)

      setNewMember({name:"", last_name:""})
      navigate("/userDashboard")

    }

    return (
        <div className="new-family-member">
            <h4>New Family Member</h4>
            <form onClick={(e)=>handleNewMember(e)}>
              <div className="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" className="form-control" value={newMember.name} onChange={(e)=>setNewMember({...newMember, name: e.target.value})}  />
              </div>
              <div className="form-group">
                  <label for="exampleInputPassword1">Last name</label>
                  <input type="text" className="form-control" value={newMember.last_name} onChange={(e)=>setNewMember({...newMember, last_name: e.target.value})}/>
              </div>
              <label for="exampleInputPassword1">Upload picture</label>
              <div className="custom-file">
                  <input type="file" className="custom-file-input" id="inputGroupFile01" />
                  <label className="custom-file-label" for="inputGroupFile01"></label>
              </div>
             <button  type="submit" className="new-member-button">Submit</button>    
          </form> 
            
      </div>
  )
}

export default NewFamilyMember