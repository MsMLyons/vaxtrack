import React from 'react'
import '../Style/Home.css'


function Home() {
  return (
    <div className="home-container">
      
      <div className="text-main">
        <h5>FAMILY VACCINATION RECORDS IN ONE PLACE</h5>
        <br/>
        Vaxtrack serves as a repository for your family vaccination records so that you have access to them when it matters most. 
        This application allows the user to create individual accounts for themselves as well as family members to track vaccination records. 
        </div>
      
      <div className="picture-main">

        <img src="./main.png" id="main-page-img" alt=".."/>

      </div>

      <div className='filler'></div>

    </div>

  )
}



export default Home